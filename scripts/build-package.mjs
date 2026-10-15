import { chmodSync, cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, renameSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const artifacts = resolve(root, '.artifacts');
mkdirSync(artifacts, { recursive: true });
const transaction = mkdtempSync(join(artifacts, 'npm-build-'));
const target = join(transaction, 'new');
mkdirSync(target, { recursive: true });
const metadata = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
if (metadata.private || metadata.bin?.uxcalibur !== 'dist/bin/uxcalibur.js') throw new Error('The root manifest must declare the public installer.');
const compiled = spawnSync(process.execPath, [join(root, 'node_modules/typescript/bin/tsc'), '-p', 'packages/uxcalibur/tsconfig.json', '--outDir', target], { cwd: root, stdio: 'inherit', windowsHide: true });
if (compiled.status !== 0) process.exit(compiled.status ?? 1);
cpSync(join(root, 'skills/uxcalibur'), join(target, 'skill'), { recursive: true });
if (!existsSync(join(target, 'bin/uxcalibur.js'))) throw new Error('Missing compiled installer.');
chmodSync(join(target, 'bin/uxcalibur.js'), 0o755);
const canonical = join(root, 'dist');
const previous = join(transaction, 'previous');
for (const path of [target, previous]) {
  const local = relative(artifacts, resolve(path));
  if (!local || local.startsWith('..')) throw new Error('Package staging path escapes artifacts.');
}
if (relative(root, canonical) !== 'dist') throw new Error('Installer output must stay in the root dist directory.');
if (existsSync(canonical)) renameSync(canonical, previous);
try { renameSync(target, canonical); }
catch (error) {
  if (existsSync(previous) && !existsSync(canonical)) renameSync(previous, canonical);
  throw error;
}
console.log(`Built UXcalibur ${metadata.version}: ${canonical}`);
