import { createHash } from 'node:crypto';
import { cpSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';

export type Agent = 'codex' | 'claude' | 'cursor';
export interface Options { agent: Agent; project: boolean; target?: string; force: boolean }
interface Receipt { format: 1; name: 'uxcalibur'; version: string; files: Record<string, string> }
const receiptName = '.uxcalibur-install.json';
const directories: Record<Agent, string> = { codex: '.agents', claude: '.claude', cursor: '.cursor' };

function safeAncestors(path: string): void {
  let current = resolve(path);
  for (;;) {
    if (existsSync(current) || (() => { try { lstatSync(current); return true; } catch { return false; } })()) {
      const stat = lstatSync(current);
      if (stat.isSymbolicLink() || !stat.isDirectory()) throw new Error(`Installation path must contain ordinary directories: ${current}`);
    }
    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
  }
}

function inventory(directory: string, excludeReceipt = false): Record<string, string> {
  const result: Record<string, string> = Object.create(null) as Record<string, string>;
  function visit(current: string): void {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name);
      const stat = lstatSync(full);
      if (stat.isSymbolicLink()) throw new Error(`Refusing a linked installation entry: ${full}`);
      if (stat.isDirectory()) visit(full);
      else if (stat.isFile()) {
        const name = relative(directory, full).split(sep).join('/');
        if (!(excludeReceipt && name === receiptName)) result[name] = createHash('sha256').update(readFileSync(full)).digest('hex');
      } else throw new Error(`Unsupported installation entry: ${full}`);
    }
  }
  visit(directory);
  return result;
}

function equal(a: Record<string, string>, b: Record<string, string>): boolean {
  const keys = Object.keys(a).sort();
  return keys.length === Object.keys(b).length && keys.every(key => a[key] === b[key]);
}

function owned(directory: string, current: Record<string, string>): boolean {
  try {
    const receipt = JSON.parse(readFileSync(join(directory, receiptName), 'utf8')) as Receipt;
    if (receipt.format !== 1 || receipt.name !== 'uxcalibur' || typeof receipt.version !== 'string' || !receipt.files || typeof receipt.files !== 'object' || Array.isArray(receipt.files)) return false;
    if (!Object.keys(receipt.files).every(key => !isAbsolute(key) && !key.includes('\\') && key.split('/').every(part => part && part !== '.' && part !== '..') && /^[a-f0-9]{64}$/.test(receipt.files[key]!))) return false;
    return equal(current, receipt.files);
  } catch { return false; }
}

export function skillsDirectory(options: Options, context: { home: string; cwd: string }): string {
  if (options.target !== undefined) return resolve(context.cwd, options.target);
  return join(options.project ? context.cwd : context.home, directories[options.agent], 'skills');
}

export function install(options: Options, context: { home: string; cwd: string; source: string; version: string }): { directory: string; unchanged: boolean; backup?: string } {
  const parent = skillsDirectory(options, context);
  if (dirname(parent) === parent) throw new Error('Choose a skills directory rather than a filesystem root.');
  const destination = join(parent, 'uxcalibur');
  safeAncestors(destination);
  const sourceFiles = inventory(context.source);
  if (!sourceFiles['SKILL.md'] || !sourceFiles['LICENSE']) throw new Error('The package is missing its licensed skill.');
  const present = existsSync(destination);
  if (present) {
    const existing = inventory(destination, true);
    const managed = owned(destination, existing);
    if (equal(sourceFiles, existing) && managed) return { directory: destination, unchanged: true };
    if (!managed && !options.force) throw new Error(`Existing skill is unmanaged or locally modified: ${destination}\nUse --force to preserve it in a backup and install this version.`);
  }

  // A custom target can be a nested category. Keep backups outside every
  // recognized host discovery root in its ancestry, not just the target.
  let storageParent = dirname(parent);
  let ancestor = parent;
  for (;;) {
    const owner = dirname(ancestor);
    const normalized = ancestor.split(sep).at(-1)?.toLowerCase();
    const host = owner.split(sep).at(-1)?.toLowerCase();
    if (normalized === 'skills' && ['.agents', '.claude', '.cursor', '.codex'].includes(host ?? '')) storageParent = owner;
    if (owner === ancestor) break;
    ancestor = owner;
  }
  const storage = join(storageParent, '.uxcalibur-backups');
  if (storage === parent) throw new Error('The backup directory cannot be an installation target.');
  safeAncestors(storage);
  mkdirSync(storage, { recursive: true });
  const transaction = mkdtempSync(join(storage, 'install-'));
  const staged = join(transaction, 'new');
  cpSync(context.source, staged, { recursive: true, dereference: false });
  if (!equal(sourceFiles, inventory(staged))) throw new Error('Staged skill differs from the package.');
  const receipt: Receipt = { format: 1, name: 'uxcalibur', version: context.version, files: sourceFiles };
  writeFileSync(join(staged, receiptName), JSON.stringify(receipt, null, 2) + '\n');
  mkdirSync(parent, { recursive: true });
  // Check again immediately before moves; never operate on another skill directory.
  safeAncestors(destination);
  safeAncestors(transaction);
  const backup = present ? join(transaction, 'previous') : undefined;
  if (backup) renameSync(destination, backup);
  try { renameSync(staged, destination); }
  catch (error) {
    if (backup && !existsSync(destination)) renameSync(backup, destination);
    throw error;
  }
  return { directory: destination, unchanged: false, ...(backup ? { backup } : {}) };
}
