import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, symlinkSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const pnpm = process.env.npm_execpath;
assert(pnpm, 'Run through pnpm package:check.');
function run(command, args, cwd, expected = 0) {
  const result = spawnSync(command, args, { cwd, encoding: 'utf8', windowsHide: true, timeout: 120000 });
  if (result.error) throw result.error;
  assert.equal(result.status, expected, `${command} ${args.join(' ')}\n${result.stdout}\n${result.stderr}`);
  return result.stdout;
}
run(process.execPath, [join(root, 'scripts/build-package.mjs')], root);
const metadata = JSON.parse(readFileSync(join(root, 'packages/uxcalibur/release.json'), 'utf8'));
const archive = join(root, `.artifacts/uxcalibur-${metadata.version}.tgz`);
run(process.execPath, [pnpm, 'pack', '--out', archive], join(root, '.artifacts/npm-package'));
mkdirSync(join(root, '.tmp'), { recursive: true });
const temp = mkdtempSync(join(root, '.tmp/packed-install-'));
copyFileSync(archive, join(temp, 'archive.tgz'));
const entries = run('tar', ['-tzf', 'archive.tgz'], temp).trim().split(/\r?\n/).filter(name => !name.endsWith('/')).sort();
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(join(directory, entry.name)) : [join(directory, entry.name)]);
}
const expected = ['LICENSE', 'README.md', 'package.json', 'bin/uxcalibur.js', 'lib/install.js', ...files(join(root, 'skills/uxcalibur')).map(path => 'skill/' + relative(join(root, 'skills/uxcalibur'), path).replaceAll('\\', '/'))].map(name => 'package/' + name).sort();
assert.deepEqual(entries, expected, 'Tarball includes exactly the public skill and installer.');
// Install the tarball through the package manager; exercise its installed executable.
writeFileSync(join(temp, 'package.json'), '{"name":"uxcalibur-packed-test","private":true,"type":"module"}\n');
run(process.execPath, [pnpm, 'add', archive, '--ignore-scripts'], temp);
const installedPackage = join(temp, 'node_modules/uxcalibur');
const packed = JSON.parse(readFileSync(join(installedPackage, 'package.json'), 'utf8'));
assert.equal(packed.license, 'MIT');
assert.equal(packed.version, metadata.version);
assert(!packed.dependencies && !packed.devDependencies && !packed.scripts);
for (const path of files(join(root, 'skills/uxcalibur'))) {
  assert.deepEqual(readFileSync(path), readFileSync(join(installedPackage, 'skill', relative(join(root, 'skills/uxcalibur'), path))));
}
const cli = join(installedPackage, 'bin/uxcalibur.js');
assert.equal(run(process.execPath, [cli, '--version'], temp).trim(), metadata.version);
assert.match(run(process.execPath, [cli, '--help'], temp), /--project/);
for (const args of [['audit'], ['install'], ['install', '--agent', 'other'], ['install', '--agent', '__proto__'], ['install', '--agent', 'toString'], ['install', '--agent', 'codex', '--project', '--target', 'skills'], ['install', '--agent', 'codex', '--target'], ['install', '--agent', 'codex', '--project', '--project'], ['install', '--agent', 'codex', '--bogus']]) run(process.execPath, [cli, ...args], temp, 1);
const { install, skillsDirectory } = await import(pathToFileURL(join(installedPackage, 'lib/install.js')).href);
const hosts = {
  codex: ['.agents', '.agents'], claude: ['.claude', '.claude'], cursor: ['.cursor', '.cursor'],
  grok: ['.grok', '.grok'], gemini: ['.gemini', '.gemini'], copilot: ['.copilot', '.github'],
  opencode: [join('.config', 'opencode'), '.opencode'], amp: [join('.config', 'agents'), '.agents'],
  cline: ['.cline', '.cline'], kilo: ['.kilo', '.kilo'], roo: ['.roo', '.roo'], generic: ['.agents', '.agents'],
};
const listed = run(process.execPath, [cli, '--list-agents'], temp);
for (const [agent, [personalFolder, folder]] of Object.entries(hosts)) {
  assert(listed.split(/\r?\n/).some(line => line.startsWith(agent + ' ')), `Listed host: ${agent}`);
  const project = join(temp, 'project with spaces', agent);
  const home = join(temp, 'home with spaces', agent);
  mkdirSync(project, { recursive: true });
  const options = { agent, project: false, force: false };
  assert.equal(skillsDirectory(options, { home, cwd: project }), join(home, personalFolder, 'skills'));
  assert.equal(skillsDirectory({ ...options, project: true }, { home, cwd: project }), join(project, folder, 'skills'));
  const personal = install(options, { home, cwd: project, source: join(installedPackage, 'skill'), version: packed.version });
  assert(existsSync(join(personal.directory, 'SKILL.md')));
  run(process.execPath, [cli, 'install', '--agent', agent, '--project'], project);
  const destination = join(project, folder, 'skills/uxcalibur');
  assert.deepEqual(readFileSync(join(destination, 'SKILL.md')), readFileSync(join(root, 'skills/uxcalibur/SKILL.md')));
  assert.match(run(process.execPath, [cli, 'install', '--agent', agent, '--project'], project), /Already installed/);
  writeFileSync(join(destination, 'local-notes.md'), 'Keep my edits.\n');
  run(process.execPath, [cli, 'install', '--agent', agent, '--project'], project, 1);
  assert.equal(readFileSync(join(destination, 'local-notes.md'), 'utf8'), 'Keep my edits.\n');
  const output = run(process.execPath, [cli, 'install', '--agent', agent, '--project', '--force'], project);
  const backup = output.match(/Previous installation preserved: (.+)/)?.[1];
  assert(backup && !relative(join(project, folder, 'skills'), backup).startsWith('uxcalibur'));
  assert.equal(readFileSync(join(backup, 'local-notes.md'), 'utf8'), 'Keep my edits.\n');
  assert(!existsSync(join(destination, 'local-notes.md')));
  // A complete prior installer version is eligible for an upgrade without --force.
  const priorSkill = join(destination, 'SKILL.md');
  writeFileSync(priorSkill, readFileSync(priorSkill, 'utf8') + '\nPrior version.\n');
  const receiptPath = join(destination, '.uxcalibur-install.json');
  const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
  receipt.version = '0.0.9';
  receipt.files['SKILL.md'] = createHash('sha256').update(readFileSync(priorSkill)).digest('hex');
  writeFileSync(receiptPath, JSON.stringify(receipt));
  assert.match(run(process.execPath, [cli, 'install', '--agent', agent, '--project'], project), /Previous installation preserved/);
  assert.deepEqual(readFileSync(priorSkill), readFileSync(join(root, 'skills/uxcalibur/SKILL.md')));
  writeFileSync(join(destination, '__proto__'), 'Preserve this unusual file.');
  run(process.execPath, [cli, 'install', '--agent', agent, '--project'], project, 1);
  assert.equal(readFileSync(join(destination, '__proto__'), 'utf8'), 'Preserve this unusual file.');
  const nestedParent = join(project, folder, 'skills/team');
  run(process.execPath, [cli, 'install', '--agent', agent, '--target', nestedParent], project);
  writeFileSync(join(nestedParent, 'uxcalibur/local.md'), 'Nested edits.');
  const nestedOutput = run(process.execPath, [cli, 'install', '--agent', agent, '--target', nestedParent, '--force'], project);
  const nestedBackup = nestedOutput.match(/Previous installation preserved: (.+)/)?.[1];
  assert(nestedBackup && relative(join(project, folder, 'skills'), nestedBackup).startsWith('..'), 'Nested backups must be outside the host discovery root.');
  assert.equal(readFileSync(join(nestedBackup, 'local.md'), 'utf8'), 'Nested edits.');
}
const unmanaged = join(temp, 'explicit skills/uxcalibur');
mkdirSync(unmanaged, { recursive: true });
writeFileSync(join(unmanaged, 'SKILL.md'), 'Personal skill.');
run(process.execPath, [cli, 'install', '--agent', 'codex', '--target', dirname(unmanaged)], temp, 1);
assert.equal(readFileSync(join(unmanaged, 'SKILL.md'), 'utf8'), 'Personal skill.');
run(process.execPath, [cli, 'install', '--agent', 'codex', '--target', dirname(unmanaged), '--force'], temp);
const linked = join(temp, 'linked skills');
symlinkSync(dirname(unmanaged), linked, process.platform === 'win32' ? 'junction' : 'dir');
run(process.execPath, [cli, 'install', '--agent', 'codex', '--target', linked, '--force'], temp, 1);
for (const [agent, directory] of [['opencode', 'opencode'], ['amp', 'agents']]) {
  const home = join(temp, 'xdg home');
  const configHome = join(temp, 'custom configuration');
  assert.equal(skillsDirectory({ agent, project: false, force: false }, { home, cwd: temp, configHome }), join(configHome, directory, 'skills'));
  assert.throws(() => skillsDirectory({ agent, project: false, force: false }, { home, cwd: temp, configHome: 'relative' }));
  assert.equal(skillsDirectory({ agent, project: false, force: false, target: 'explicit' }, { home, cwd: temp, configHome: 'relative' }), join(temp, 'explicit'));
}
// Future hosts and nested/mixed discovery roots preserve backups outside all skills trees.
const customRoot = join(temp, 'future agent', '.future', 'skills');
const customParent = join(customRoot, 'team', '.grok', 'skills', 'design');
run(process.execPath, [cli, 'install', '--agent', 'generic', '--target', customParent], temp);
writeFileSync(join(customParent, 'uxcalibur/local.md'), 'Future host local edits.');
const customOutput = run(process.execPath, [cli, 'install', '--agent', 'generic', '--target', customParent, '--force'], temp);
const customBackup = customOutput.match(/Previous installation preserved: (.+)/)?.[1];
assert(customBackup && relative(customRoot, customBackup).startsWith('..'));
assert.equal(readFileSync(join(customBackup, 'local.md'), 'utf8'), 'Future host local edits.');
const receipt = { checkedAt: new Date().toISOString(), version: packed.version, archive, sha256: createHash('sha256').update(readFileSync(archive)).digest('hex'), files: entries, hosts: Object.keys(hosts), checks: ['exact packed contents and source hashes', 'tarball package-manager install', 'all personal and project paths', 'agent listing and rejected prototype keys', 'idempotent install', 'modified/unmanaged refusal including unusual filenames', 'force backup preservation outside native/custom/mixed discovery roots', 'managed upgrade', 'symlink refusal', 'invalid options', 'XDG configuration paths and explicit override'], limitations: ['Host layouts verified in isolated directories; model invocation in new hosts not exercised.'], isolatedInstall: temp };
writeFileSync(join(root, '.artifacts/package-verification.json'), JSON.stringify(receipt, null, 2) + '\n');
console.log(`Verified uxcalibur ${packed.version}: ${entries.length} packed files; ${Object.keys(hosts).length} install presets, update/backup/error paths.\n${archive}`);
