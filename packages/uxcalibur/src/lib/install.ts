import { createHash } from 'node:crypto';
import { cpSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';

interface AgentProfile { name: string; personal: readonly string[]; project: readonly string[]; invocation: string }
export const agentProfiles = {
  codex: { name: 'Codex', personal: ['.agents', 'skills'], project: ['.agents', 'skills'], invocation: 'Invoke $uxcalibur in Codex.' },
  claude: { name: 'Claude Code', personal: ['.claude', 'skills'], project: ['.claude', 'skills'], invocation: 'Invoke /uxcalibur in Claude Code.' },
  cursor: { name: 'Cursor', personal: ['.cursor', 'skills'], project: ['.cursor', 'skills'], invocation: 'Invoke /uxcalibur in Cursor.' },
  grok: { name: 'Grok (xAI)', personal: ['.grok', 'skills'], project: ['.grok', 'skills'], invocation: 'Invoke /uxcalibur in Grok.' },
  gemini: { name: 'Gemini CLI', personal: ['.gemini', 'skills'], project: ['.gemini', 'skills'], invocation: 'Ask Gemini CLI to use the uxcalibur skill.' },
  copilot: { name: 'GitHub Copilot', personal: ['.copilot', 'skills'], project: ['.github', 'skills'], invocation: 'Ask GitHub Copilot to use the uxcalibur skill.' },
  opencode: { name: 'OpenCode', personal: ['.config', 'opencode', 'skills'], project: ['.opencode', 'skills'], invocation: 'Ask OpenCode to use the uxcalibur skill with your selected model.' },
  amp: { name: 'Amp', personal: ['.config', 'agents', 'skills'], project: ['.agents', 'skills'], invocation: 'Ask Amp to use the uxcalibur skill.' },
  cline: { name: 'Cline', personal: ['.cline', 'skills'], project: ['.cline', 'skills'], invocation: 'Ask Cline to use the uxcalibur skill.' },
  kilo: { name: 'Kilo Code', personal: ['.kilo', 'skills'], project: ['.kilo', 'skills'], invocation: 'Ask Kilo Code to use the uxcalibur skill.' },
  roo: { name: 'Roo Code', personal: ['.roo', 'skills'], project: ['.roo', 'skills'], invocation: 'Ask Roo Code to use the uxcalibur skill.' },
  generic: { name: 'Shared Agent Skills', personal: ['.agents', 'skills'], project: ['.agents', 'skills'], invocation: 'Ask your agent to read the installed SKILL.md and use UXcalibur.' },
} as const satisfies Record<string, AgentProfile>;
export type Agent = keyof typeof agentProfiles;
export function isAgent(value: string): value is Agent { return Object.hasOwn(agentProfiles, value); }
export interface Options { agent: Agent; project: boolean; target?: string; force: boolean }
interface Receipt { format: 1; name: 'uxcalibur'; version: string; files: Record<string, string> }
const receiptName = '.uxcalibur-install.json';

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

export function skillsDirectory(options: Options, context: { home: string; cwd: string; configHome?: string }): string {
  if (options.target !== undefined) return resolve(context.cwd, options.target);
  if (!isAgent(options.agent)) throw new Error('Choose a supported agent or generic with an explicit --target.');
  const parts = options.project ? agentProfiles[options.agent].project : agentProfiles[options.agent].personal;
  if (!options.project && parts[0] === '.config' && context.configHome) {
    if (!isAbsolute(context.configHome)) throw new Error('XDG_CONFIG_HOME must be absolute; use --target for another location.');
    return join(context.configHome, ...parts.slice(1));
  }
  return join(options.project ? context.cwd : context.home, ...parts);
}

export function install(options: Options, context: { home: string; cwd: string; configHome?: string; source: string; version: string }): { directory: string; unchanged: boolean; backup?: string } {
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
  // skills discovery root in its ancestry, including custom/new hosts.
  let storageParent = dirname(parent);
  let ancestor = parent;
  for (;;) {
    const owner = dirname(ancestor);
    const normalized = ancestor.split(sep).at(-1)?.toLowerCase();
    if (normalized === 'skills') storageParent = owner;
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
