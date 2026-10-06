import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// FilePress provides blog routes even when homePage renders a content page.
// This developer site exposes six intentional pages; aliases are redirected
// by its FilePress config. Keep those defaults out of the public sitemap.
const file = fileURLToPath(new URL('../build/sitemap.xml', import.meta.url));
const xml = readFileSync(file, 'utf8');
const publicPaths = ['/', '/install', '/example', '/spec', '/method', '/contribute'];
const entries = [...xml.matchAll(/<url>[\s\S]*?<\/url>/g)].map(match => match[0]);
const selected = publicPaths.map(path => {
  const entry = entries.find(item => item.includes(`<loc>https://uxcalibur.dev${path}</loc>`));
  assert.ok(entry, `FilePress did not emit expected public page ${path}`);
  return entry;
});
writeFileSync(file, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${selected.map(entry => `\t${entry}`).join('\n')}\n</urlset>\n`);
console.log(`Public sitemap finalized: ${selected.length} content pages.`);
