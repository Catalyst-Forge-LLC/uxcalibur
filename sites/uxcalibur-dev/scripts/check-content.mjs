import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const pages = ['home', 'install', 'example', 'spec', 'method', 'contribute'];
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
assert.equal(pkg.devDependencies.getfilepress, '0.1.50', 'Keep the published engine pin exact.');
assert.equal(pkg.private, true, 'The content site must not be an npm release.');
const config = readFileSync(resolve(root, 'filepress.config.ts'), 'utf8');
assert.match(config, /url: 'https:\/\/uxcalibur\.dev'/, 'Use the canonical custom domain.');

const localReferences = text => [...text.matchAll(/(?:href|src)="([^"\s]+)"|\]\(([^\s)]+)\)/g)]
  .map(match => match[1] ?? match[2]).filter(link => link.startsWith('/'));
const sourceTarget = link => {
  const pathname = link.split(/[?#]/)[0];
  if (pathname === '/') return resolve(root, 'pages/home.md');
  const slug = pathname.slice(1);
  return extname(slug) ? resolve(root, 'static', slug) : resolve(root, 'pages', `${slug}.md`);
};

for (const slug of pages) {
  const markdown = readFileSync(resolve(root, 'pages', `${slug}.md`), 'utf8');
  assert.match(markdown, /^---\r?\n[\s\S]*?title: .+[\s\S]*?description: .+[\s\S]*?\r?\n---/);
  for (const link of localReferences(markdown)) assert.ok(existsSync(sourceTarget(link)), `${slug}: missing ${link}`);
}
const install = readFileSync(resolve(root, 'pages/install.md'), 'utf8');
for (const agent of ['codex', 'claude', 'cursor']) assert.ok(install.includes(`npx uxcalibur@0.1.0 install --agent ${agent}`));
for (const path of ['~/.agents/skills/uxcalibur', '~/.claude/skills/uxcalibur', '~/.cursor/skills/uxcalibur']) assert.ok(install.includes(path));
const example = readFileSync(resolve(root, 'pages/example.md'), 'utf8');
assert.ok(example.includes('Not started') && example.includes('Verified'), 'Keep proposed and verified cuts separate.');
assert.ok(example.includes('synthetic') && example.includes('not measured'), 'Keep the proof boundary visible.');

if (process.argv.includes('--build')) {
  const build = resolve(root, 'build');
  const builtPath = pathname => {
    if (pathname === '/') return resolve(build, 'index.html');
    const direct = resolve(build, pathname.slice(1));
    if (existsSync(direct) && extname(direct)) return direct;
    if (existsSync(`${direct}.html`)) return `${direct}.html`;
    return resolve(direct, 'index.html');
  };
  for (const slug of pages) {
    const pathname = slug === 'home' ? '/' : `/${slug}`;
    const html = readFileSync(builtPath(pathname), 'utf8');
    assert.ok(html.includes(`href="https://uxcalibur.dev${pathname === '/' ? '/' : pathname}"`), `${slug}: canonical origin`);
    assert.ok(/<h1\b/.test(html), `${slug}: semantic title`);
    assert.ok(html.includes('name="description"'), `${slug}: search description`);
    for (const match of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
      const link = match[1];
      if (!link.startsWith('/')) continue;
      const [target, fragment] = link.split('#');
      const file = builtPath(target.split('?')[0]);
      assert.ok(existsSync(file), `${slug}: missing built target ${link}`);
      if (fragment && extname(file) === '.html') {
        const destination = readFileSync(file, 'utf8');
        assert.ok(destination.includes(`id="${fragment}"`), `${slug}: missing anchor ${link}`);
      }
    }
  }
  for (const file of ['404.html', 'rss.xml', 'sitemap.xml', 'robots.txt', '_headers']) assert.ok(existsSync(resolve(build, file)), `Missing ${file}`);
  const sitemap = readFileSync(resolve(build, 'sitemap.xml'), 'utf8');
  assert.ok(sitemap.includes('https://uxcalibur.dev/install') && sitemap.includes('https://uxcalibur.dev/example'));
  assert.ok(!sitemap.includes('localhost'), 'No preview origin in sitemap.');
  assert.equal([...sitemap.matchAll(/<loc>/g)].length, pages.length, 'Only intentional content pages are indexed.');
  const redirects = readFileSync(resolve(build, '_redirects'), 'utf8');
  const redirectRules = new Set(redirects.split(/\r?\n/).map(line => line.trim().split(/\s+/).join(' ')));
  for (const rule of ['/home / 301', '/posts /method 301', '/topics /method 301', '/tags /method 301']) assert.ok(redirectRules.has(rule), `Missing redirect ${rule}`);
  const headers = readFileSync(resolve(build, '_headers'), 'utf8');
  assert.ok(headers.includes('Strict-Transport-Security') && headers.includes('frame-ancestors'), 'Keep FilePress security headers.');
  console.log(`Built pages, local links/anchors, metadata, feeds, sitemap, and headers checked (${readdirSync(build).length} root entries).`);
}
console.log(`Content checked: ${pages.length} pages, install contract, exact engine pin, and local evidence links.`);
