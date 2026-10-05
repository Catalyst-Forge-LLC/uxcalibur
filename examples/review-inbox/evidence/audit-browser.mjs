import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

// Historical observation runner; reruns go to ignored artifacts.
const root = fileURLToPath(new URL('../../../', import.meta.url));
const out = resolve(root, '.artifacts/audit');
process.env.PLAYWRIGHT_BROWSERS_PATH = resolve(root, '.cache/ms-playwright');
const { chromium } = await import('@playwright/test');
const browser = await chromium.launch({ headless: true });
const evidence = {
  auditStartedAt: new Date().toISOString(),
  target: 'http://127.0.0.1:5191/',
  browser: await browser.version(),
  method: 'Baseline rendered observation, not implementation acceptance or efficacy measurement',
  errors: [],
  snapshots: [],
  sourceSha256Before: {},
};
const sources = ['fixtures/review-inbox/src/main.ts', 'fixtures/review-inbox/src/style.css', 'fixtures/review-inbox/src/data.ts'];
for (const path of sources) evidence.sourceSha256Before[path] = createHash('sha256').update(readFileSync(resolve(root, path))).digest('hex');
mkdirSync(out, { recursive: true });

async function snapshot(page, id, notes, screenshot = false) {
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  const observed = await page.evaluate(() => {
    const rect = node => {
      if (!node) return null;
      const { x, y, width, height, top, bottom } = node.getBoundingClientRect();
      return { x, y, width, height, top, bottom, inViewport: bottom > 0 && top < innerHeight };
    };
    const list = document.querySelector('.results');
    const active = document.activeElement;
    const target = document.querySelector('[data-note-id="note-049"]');
    const answer = [...document.querySelectorAll('article p')].find(node => node.textContent.includes('owner is Mara'));
    return {
      url: location.href,
      viewport: { width: innerWidth, height: innerHeight },
      historyLength: history.length,
      heading: document.querySelector('h1')?.textContent,
      search: document.querySelector('#search')?.value ?? null,
      count: document.querySelector('.result-count')?.textContent ?? null,
      rows: [...document.querySelectorAll('.note')].map(node => ({ id: node.dataset.noteId, title: node.querySelector('strong')?.textContent, accessibleName: node.getAttribute('aria-label') })),
      list: list ? { scrollTop: list.scrollTop, scrollHeight: list.scrollHeight, clientHeight: list.clientHeight, rect: rect(list) } : null,
      targetRect: rect(target),
      active: { tag: active?.tagName, id: active?.id, noteId: active?.dataset?.noteId ?? null, text: active?.textContent?.trim().slice(0, 160) ?? '', accessibleName: active?.getAttribute('aria-label') ?? null },
      windowScrollY: scrollY,
      documentHeight: document.documentElement.scrollHeight,
      horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
      backRect: rect(document.querySelector('.back')),
      answer: answer ? { text: answer.textContent, rect: rect(answer) } : null,
      unavailable: document.querySelector('article')?.textContent.includes('This note ID is not') ?? false,
    };
  });
  evidence.snapshots.push({ id, notes, ...observed, ...(screenshot ? { screenshot: `audit-${id}.png` } : {}) });
  if (screenshot) await page.screenshot({ path: resolve(out, `audit-${id}.png`) });
  console.log(JSON.stringify({ id, url: observed.url, search: observed.search, count: observed.count, listScrollTop: observed.list?.scrollTop, active: observed.active, windowScrollY: observed.windowScrollY, backInViewport: observed.backRect?.inViewport }));
}

async function keyboardTarget(page) {
  await page.getByRole('searchbox', { name: 'Search notes' }).focus();
  for (let i = 0; i < 30; i++) {
    await page.keyboard.press('Tab');
    if (await page.evaluate(() => document.activeElement?.dataset?.noteId === 'note-049')) return i + 1;
  }
  throw new Error('Could not reach note-049 by Tab.');
}

async function readAnswer(page) {
  for (let i = 0; i < 20; i++) {
    const visible = await page.evaluate(() => {
      const answer = [...document.querySelectorAll('article p')].find(node => node.textContent.includes('owner is Mara'));
      if (!answer) return false;
      const rect = answer.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= innerHeight;
    });
    if (visible) return i;
    await page.keyboard.press('PageDown');
    await page.waitForTimeout(150); // Allow Chromium's native key scrolling to settle.
  }
  throw new Error('Handoff paragraph did not become visible through PageDown.');
}

try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  page.on('pageerror', error => evidence.errors.push(error.message));
  await page.goto(evidence.target);
  await snapshot(page, 'initial', 'Fresh list, all records.');
  await page.getByRole('searchbox', { name: 'Search notes' }).fill('Orchard');
  await snapshot(page, 'searched', 'Literal Orchard query; duplicate display titles retain stable IDs.');
  const tabPresses = await keyboardTarget(page);
  await snapshot(page, 'keyboard-origin', `${tabPresses} Tabs from search: Clear then Orchard rows, ending at note-049.`, true);
  await page.keyboard.press('Enter');
  await snapshot(page, 'detail-top', 'Enter on note-049; heading receives focus and detail starts at top.');
  const pageDownPresses = await readAnswer(page);
  await snapshot(page, 'handoff', `Handoff paragraph rendered in viewport after ${pageDownPresses} PageDown keys.`, true);
  await page.keyboard.press('Control+End');
  await page.waitForTimeout(150);
  await snapshot(page, 'detail-end', 'End of long note: return control is outside viewport.', true);
  await page.keyboard.press('Shift+Tab');
  await snapshot(page, 'keyboard-back-control', 'Reverse Tab from focused heading reaches Back to results and scrolls it into view.');
  await page.keyboard.press('Enter');
  await snapshot(page, 'app-return', 'App Back to results by keyboard Enter; query retained, list rebuilt.', true);
  await page.keyboard.press('Tab');
  await snapshot(page, 'first-tab-after-return', 'First Tab after app return; test whether review resumes at originating row.');
  await page.goBack();
  await snapshot(page, 'history-after-app-return', 'Browser Back immediately after app Back to results.');
  await page.goBack();
  await snapshot(page, 'history-second-back', 'A second browser Back reaches search list.');
  await page.goForward();
  await snapshot(page, 'history-forward-detail', 'Browser Forward returns to detail.');
  await page.keyboard.press('Control+End');
  await page.waitForTimeout(150);
  await snapshot(page, 'before-browser-back', 'Long detail at end before native history return.');
  await page.goBack();
  await snapshot(page, 'browser-return', 'Browser Back from detail to original result entry.', true);

  await page.getByRole('searchbox', { name: 'Search notes' }).fill('orCHard Mara Thursday');
  await snapshot(page, 'body-and-search', 'Mixed-case whitespace-separated terms include body-only owner/action.');
  await page.getByRole('searchbox', { name: 'Search notes' }).fill('no-such-orchard-note');
  await snapshot(page, 'no-match', 'No match has explicit recovery copy.');
  await page.getByRole('button', { name: 'Clear search', exact: true }).focus();
  await page.keyboard.press('Enter');
  await snapshot(page, 'clear-recovery', 'Keyboard Clear restores all 72 records and focuses search.');

  await page.goto(`${evidence.target}?q=Orchard&note=unknown`);
  await snapshot(page, 'invalid-id', 'Unknown ID route gives honest unavailable state and return.');
  await page.getByRole('button', { name: 'Back to results', exact: true }).click();
  await snapshot(page, 'invalid-return', 'Unknown ID return retains Orchard query.');
  await context.close();

  const narrowContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const narrow = await narrowContext.newPage();
  narrow.on('pageerror', error => evidence.errors.push(error.message));
  await narrow.goto(evidence.target);
  await narrow.getByRole('searchbox', { name: 'Search notes' }).fill('Orchard');
  const narrowTabs = await keyboardTarget(narrow);
  await snapshot(narrow, 'narrow-origin', `${narrowTabs} Tabs reach correct note ID at 390px width.`, true);
  await narrow.keyboard.press('Enter');
  await readAnswer(narrow);
  await snapshot(narrow, 'narrow-handoff', 'Owner/action paragraph read by native PageDown at 390px width.', true);
  await narrow.keyboard.press('Shift+Tab');
  await narrow.keyboard.press('Enter');
  await snapshot(narrow, 'narrow-return', 'Narrow keyboard return retains query but rebuilds list.', true);
  await narrowContext.close();
} finally {
  evidence.auditFinishedAt = new Date().toISOString();
  evidence.sourceSha256After = {};
  for (const path of sources) evidence.sourceSha256After[path] = createHash('sha256').update(readFileSync(resolve(root, path))).digest('hex');
  writeFileSync(resolve(out, 'audit-observations.json'), JSON.stringify(evidence, null, 2) + '\n');
  await browser.close();
}
