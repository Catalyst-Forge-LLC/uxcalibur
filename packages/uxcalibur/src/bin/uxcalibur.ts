#!/usr/bin/env node
import { homedir } from 'node:os';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { install } from '../lib/install.js';
import type { Agent, Options } from '../lib/install.js';

const metadata = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as { version: string };
const usage = `UXcalibur ${metadata.version}
Install the UXcalibur skill for your coding agent.

  uxcalibur install --agent codex|claude|cursor [--project | --target <skills-dir>] [--force]
  uxcalibur --version
  uxcalibur --help

Default: personal ~/.agents/skills, ~/.claude/skills, or ~/.cursor/skills.
--project  Install under the corresponding directory in the current project.
--target   Use an explicit parent skills directory (including legacy locations).
--force    Back up and replace a modified or unmanaged UXcalibur installation.

The installer copies skill files. Run the audit through your agent afterward.
`;

try {
  const args = process.argv.slice(2);
  if (args.length === 0 || (args.length === 1 && ['--help', '-h'].includes(args[0]!))) console.log(usage);
  else if (args.length === 1 && ['--version', '-v'].includes(args[0]!)) console.log(metadata.version);
  else {
    if (args.shift() !== 'install') throw new Error('Expected install, --help, or --version.');
    const options: Options = { agent: 'codex', project: false, force: false };
    const seen = new Set<string>();
    let agentSet = false;
    while (args.length) {
      const flag = args.shift()!;
      if (seen.has(flag)) throw new Error(`Repeated option: ${flag}`);
      seen.add(flag);
      if (flag === '--agent' || flag === '--target') {
        const value = args.shift();
        if (!value || value.startsWith('-')) throw new Error(`${flag} requires a value.`);
        if (flag === '--agent') {
          if (!['codex', 'claude', 'cursor'].includes(value)) throw new Error('Choose codex, claude, or cursor.');
          options.agent = value as Agent;
          agentSet = true;
        } else options.target = value;
      } else if (flag === '--project') options.project = true;
      else if (flag === '--force') options.force = true;
      else throw new Error(`Unknown option: ${flag}`);
    }
    if (!agentSet) throw new Error('Choose an agent with --agent codex|claude|cursor.');
    if (options.project && options.target !== undefined) throw new Error('--project and --target cannot be combined.');
    const result = install(options, { home: homedir(), cwd: process.cwd(), source: fileURLToPath(new URL('../skill/', import.meta.url)), version: metadata.version });
    console.log(`${result.unchanged ? 'Already installed' : 'Installed'} UXcalibur ${metadata.version}: ${result.directory}`);
    if (result.backup) console.log(`Previous installation preserved: ${result.backup}`);
    console.log(options.agent === 'codex' ? 'Invoke $uxcalibur in Codex; restart or reload skills if needed.' : `Invoke /uxcalibur in ${options.agent === 'claude' ? 'Claude Code' : 'Cursor'}; restart or reload skills if needed.`);
  }
} catch (error) {
  console.error(`uxcalibur: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}
