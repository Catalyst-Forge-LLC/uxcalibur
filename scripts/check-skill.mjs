import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseDocument } from 'yaml';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = join(root, 'skills/uxcalibur');
function yaml(text) {
  const document = parseDocument(text, { uniqueKeys: true });
  if (document.errors.length) throw new Error(document.errors.map(error => error.message).join('\n'));
  return document.toJS();
}
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}
function validate(dir) {
  const skill = readFileSync(join(dir, 'SKILL.md'), 'utf8');
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(skill);
  if (!frontmatter) throw new Error('SKILL.md must have frontmatter.');
  const metadata = yaml(frontmatter[1]);
  if (metadata.name !== 'uxcalibur' || typeof metadata.description !== 'string' || !metadata.description.trim()) {
    throw new Error('Skill name and description are required.');
  }
  const agent = yaml(readFileSync(join(dir, 'agents/openai.yaml'), 'utf8'));
  if (!agent.interface.default_prompt.includes('$uxcalibur')) throw new Error('Default prompt must invoke the skill.');
  const length = agent.interface.short_description.length;
  if (length < 25 || length > 64) throw new Error('UI description must contain 25–64 characters.');
  let references = 0;
  for (const path of files(dir).filter(path => path.endsWith('.md'))) {
    for (const match of readFileSync(path, 'utf8').matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0];
      if (!target || /^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
      const resolved = resolve(dirname(path), decodeURIComponent(target));
      if (relative(dir, resolved).startsWith('..') || !existsSync(resolved)) {
        throw new Error(`Missing or escaping skill reference: ${relative(dir, path)} -> ${target}`);
      }
      references++;
    }
  }
  return { references, files: files(dir).map(path => ({
    path: relative(dir, path).replaceAll('\\', '/'),
    sha256: createHash('sha256').update(readFileSync(path)).digest('hex'),
  })).sort((a, b) => a.path.localeCompare(b.path)) };
}
const original = validate(source);
if (process.argv.includes('--copy')) {
  mkdirSync(join(root, '.tmp'), { recursive: true });
  const parent = mkdtempSync(join(root, '.tmp/skill-install-'));
  const installed = join(parent, 'uxcalibur');
  cpSync(source, installed, { recursive: true });
  const copy = validate(installed);
  if (JSON.stringify(original) !== JSON.stringify(copy)) throw new Error('Fresh skill copy differs from the source.');
  mkdirSync(join(root, '.artifacts'), { recursive: true });
  writeFileSync(join(root, '.artifacts/skill-installation.json'), JSON.stringify({ checkedAt: new Date().toISOString(), source: 'skills/uxcalibur', installed, ...copy }, null, 2) + '\n');
  console.log(`Validated ${copy.files.length} identical files and ${copy.references} references in fresh copy: ${installed}`);
} else {
  console.log(`Validated ${original.files.length} skill files and ${original.references} references.`);
}
