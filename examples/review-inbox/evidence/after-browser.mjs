import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../../../', import.meta.url));
const out = resolve(root, '.artifacts/after');
mkdirSync(out, { recursive: true });
process.env.PLAYWRIGHT_BROWSERS_PATH = resolve(root, '.cache/ms-playwright');
const { chromium, expect } = await import('@playwright/test');
const browser = await chromium.launch();
const evidence = { checkedAt: new Date().toISOString(), browser: browser.version(), cut: 'K1', observations: [] };
try {
  for (const viewport of [{ width: 1280, height: 800 }, { width: 390, height: 844 }]) {
    const page = await browser.newPage({ viewport });
    await page.goto('http://127.0.0.1:5191/');
    await page.getByRole('searchbox').fill('Orchard');
    for (let index = 0; index < 18; index++) await page.keyboard.press('Tab');
    const row = page.getByRole('button', { name: 'Open Orchard handoff, note-049', exact: true });
    await expect(row).toBeFocused();
    const snapshot = () => page.evaluate(() => ({
      query: document.querySelector('#search')?.value,
      noteId: document.activeElement?.dataset.noteId,
      listScrollTop: document.querySelector('.results')?.scrollTop,
      pageScrollY: scrollY, historyLength: history.length,
    }));
    const origin = await snapshot();
    await page.keyboard.press('Enter');
    const answer = page.getByText(/final Orchard handoff owner is Mara/);
    await answer.scrollIntoViewIfNeeded();
    await expect(answer).toBeVisible();
    await page.keyboard.press('Shift+Tab');
    await expect(page.getByRole('button', { name: 'Back to results' })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(row).toBeFocused();
    const returned = await snapshot();
    expect(returned).toEqual({ ...origin, historyLength: origin.historyLength + 1 });
    const screenshot = `after-return-${viewport.width}.png`;
    await page.screenshot({ path: resolve(out, screenshot) });
    evidence.observations.push({ viewport, origin, returned, screenshot });
    await page.close();
  }
  writeFileSync(resolve(out, 'after-observations.json'), JSON.stringify(evidence, null, 2) + '\n');
  console.log('Captured and checked desktop/narrow return state in .artifacts/after.');
} finally { await browser.close(); }
