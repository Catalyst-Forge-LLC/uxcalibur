// Rasterize the site's code-native vectors for the PNG favicon and social card.
// Uses the same development-only browser as the site's QA runner.
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const site = fileURLToPath(new URL('../', import.meta.url));
const repository = fileURLToPath(new URL('../../../', import.meta.url));
process.env.PLAYWRIGHT_BROWSERS_PATH ??= resolve(repository, '.cache/ms-playwright');
const { chromium } = createRequire(resolve(repository, 'package.json'))('@playwright/test');
const browser = await chromium.launch({ headless: true });
try {
  for (const asset of [{ source: 'social.svg', target: 'social.png', width: 1200, height: 630 }, { source: 'blade.svg', target: 'favicon.png', width: 64, height: 64 }]) {
    const page = await browser.newPage({ viewport: { width: asset.width, height: asset.height }, deviceScaleFactor: 1 });
    const svg = readFileSync(resolve(site, 'static', asset.source), 'utf8');
    await page.setContent(`<style>html,body{margin:0;background:#f5f3eb}svg{display:block;width:100%;height:100%}</style>${svg}`);
    await page.screenshot({ path: resolve(site, 'static', asset.target) });
    await page.close();
    console.log(`Rendered ${asset.source} → ${asset.target}`);
  }
} finally { await browser.close(); }
