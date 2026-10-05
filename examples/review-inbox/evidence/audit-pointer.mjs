import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('../../../', import.meta.url));
const out = resolve(root, '.artifacts/audit');
mkdirSync(out, { recursive: true });
process.env.PLAYWRIGHT_BROWSERS_PATH = resolve(root, '.cache/ms-playwright');
const { chromium } = await import('@playwright/test');
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const observations = [];
async function record(id) {
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  observations.push({ id, ...await page.evaluate(() => ({
    url: location.href,
    query: document.querySelector('#search')?.value ?? null,
    scrollTop: document.querySelector('.results')?.scrollTop ?? null,
    activeTag: document.activeElement?.tagName,
    activeNoteId: document.activeElement?.dataset?.noteId ?? null,
    activeText: document.activeElement?.textContent?.trim().slice(0, 80),
    windowScrollY: scrollY,
  })) });
}
try {
  await page.goto('http://127.0.0.1:5191/');
  await page.getByRole('searchbox', { name: 'Search notes' }).fill('Orchard');
  await page.mouse.move(1000, 600);
  await page.mouse.wheel(0, 1200);
  await page.waitForTimeout(150);
  await record('pointer-origin');
  await page.getByRole('button', { name: 'Open Orchard handoff, note-049', exact: true }).click();
  await record('pointer-detail');
  await page.mouse.wheel(0, 800);
  await page.waitForTimeout(150);
  await record('pointer-reading');
  await page.getByRole('button', { name: 'Back to results', exact: true }).click();
  await record('pointer-return');
  console.log(JSON.stringify(observations, null, 2));
  writeFileSync(resolve(out, 'audit-pointer.json'), JSON.stringify({ capturedAt: new Date().toISOString(), method: 'Mouse wheel and pointer click; Playwright scrolls offscreen Back into view for click', observations }, null, 2) + '\n');
} finally {
  await browser.close();
}
