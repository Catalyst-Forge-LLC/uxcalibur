import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { once } from 'node:events';
import { startPreview } from '../node_modules/getfilepress/scripts/preview.mjs';

const site = fileURLToPath(new URL('../', import.meta.url));
const repository = fileURLToPath(new URL('../../../', import.meta.url));
const rootRequire = createRequire(resolve(repository, 'package.json'));
process.env.PLAYWRIGHT_BROWSERS_PATH ??= resolve(repository, '.cache/ms-playwright');
const { chromium } = rootRequire('@playwright/test');
const output = resolve(site, '.artifacts/qa');
mkdirSync(output, { recursive: true });
const server = startPreview(resolve(site, 'build'), 0, '127.0.0.1');
await once(server, 'listening');
const origin = `http://127.0.0.1:${server.address().port}`;
const routes = ['/', '/install', '/example', '/spec', '/method', '/contribute'];
const results = [];
let browser;
try {
  browser = await chromium.launch({ headless: true });
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    const context = await browser.newContext({ viewport, colorScheme: 'light' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()}: ${response.url()}`); });
    for (const route of routes) {
      const response = await page.goto(`${origin}${route}`, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, `${route}: response`);
      await page.evaluate(() => document.fonts.ready);
      await page.locator('img').evaluateAll(async images => {
        for (const img of images) img.loading = 'eager';
        await Promise.all(images.map(img => img.decode()));
      });
      const observation = await page.evaluate(() => ({
        title: document.title,
        headings: document.querySelectorAll('h1').length,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        viewportWidth: document.documentElement.clientWidth,
        contentWidth: document.documentElement.scrollWidth,
        images: [...document.images].map(img => ({ src: img.getAttribute('src'), alt: img.alt, loaded: img.complete && img.naturalWidth > 0 })),
        brokenText: document.body.innerText.includes('undefined'),
      }));
      assert.equal(observation.headings, 1, `${route}: one primary heading`);
      assert.equal(observation.canonical, `https://uxcalibur.dev${route}`, `${route}: canonical`);
      assert.ok(observation.contentWidth <= observation.viewportWidth + 1, `${route} at ${viewport.width}: horizontal overflow`);
      assert.equal(observation.brokenText, false, `${route}: no missing content`);
      for (const img of observation.images) assert.ok(img.loaded, `${route}: image ${img.src}`);
      await page.screenshot({ path: resolve(output, `${route === '/' ? 'home' : route.slice(1)}-${viewport.width}.png`), fullPage: true });
      await page.keyboard.press('Tab');
      const focus = await page.evaluate(() => ({
        tag: document.activeElement?.tagName,
        outlineStyle: getComputedStyle(document.activeElement).outlineStyle,
        outlineWidth: getComputedStyle(document.activeElement).outlineWidth,
      }));
      assert.equal(focus.tag, 'A', `${route}: first keyboard stop is a link`);
      assert.notEqual(focus.outlineStyle, 'none', `${route}: visible keyboard outline`);
      results.push({ route, viewport, ...observation, focus });
    }
    await page.goto(`${origin}/example`, { waitUntil: 'networkidle' });
    const disclosure = page.locator('.narrow-evidence');
    await disclosure.locator('summary').click();
    assert.equal(await disclosure.getAttribute('open'), '');
    await disclosure.locator('img').evaluateAll(async images => Promise.all(images.map(img => img.decode())));
    await disclosure.screenshot({ path: resolve(output, `example-narrow-disclosure-${viewport.width}.png`) });
    assert.deepEqual(errors, [], `${viewport.width}: browser errors or failed resource requests`);
    await context.close();
  }
  const offline = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1280, height: 800 } });
  const staticPage = await offline.newPage();
  assert.equal((await staticPage.goto(`${origin}/install`)).status(), 200);
  assert.ok((await staticPage.locator('main').innerText()).includes('npx uxcalibur@0.1.0 install --agent codex'));
  await offline.close();
  const missing = await fetch(`${origin}/route-that-does-not-exist`);
  assert.equal(missing.status, 404);
  for (const path of ['/rss.xml', '/sitemap.xml', '/robots.txt']) assert.equal((await fetch(`${origin}${path}`)).status, 200);
  const receipt = {
    capturedAt: new Date().toISOString(),
    browser: browser.version(),
    engine: 'getfilepress 0.1.50',
    checks: ['12 desktop/mobile page states', 'loaded images/resources', 'single h1', 'canonical origin', 'document overflow', 'visible keyboard focus', 'narrow evidence disclosure', 'static content with JavaScript disabled', 'custom 404', 'RSS/sitemap/robots'],
    results,
    limits: ['Chromium only', 'No screen-reader or real-touch session', 'Screenshot visual review performed separately', 'External links/public release/custom domain verified by launch owner'],
  };
  writeFileSync(resolve(output, 'receipt.json'), `${JSON.stringify(receipt, null, 2)}\n`);
  console.log(`Rendered QA passed: ${results.length} page states; screenshots and receipt in ${output}`);
} finally {
  await browser?.close();
  await new Promise((resolveClose, reject) => server.close(error => error ? reject(error) : resolveClose()));
}
