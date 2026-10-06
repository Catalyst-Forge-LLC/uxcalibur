#!/usr/bin/env node
import { homedir } from 'node:os';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { agentProfiles, install, isAgent } from '../lib/install.js';
import type { Options } from '../lib/install.js';

const metadata = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as { version: string };
const choices = Object.keys(agentProfiles).join('|');
const usage = `UXcalibur ${metadata.version}
Install the UXcalibur skill for your coding agent.

  uxcalibur install --agent <agent> [--project | --target <skills-dir>] [--force]
  uxcalibur --list-agents
  uxcalibur --version
  uxcalibur --help

Agents: ${choices}
Default: the selected agent's personal skills directory (see --list-agents).
--project  Install under the corresponding directory in the current project.
--target   Use an explicit parent skills directory (including legacy locations).
--force    Back up and replace a modified or unmanaged UXcalibur installation.

The installer copies skill files. Run the audit through your agent afterward.
`;

try {
  const args = process.argv.slice(2);
  if (args.length === 0 || (args.length === 1 && ['--help', '-h'].includes(args[0]!))) console.log(usage);
  else if (args.length === 1 && ['--version', '-v'].includes(args[0]!)) console.log(metadata.version);
  else if (args.length === 1 && args[0] === '--list-agents') {
    console.log('Agent          Personal default                       Project directory');
    for (const [id, profile] of Object.entries(agentProfiles)) console.log(`${id.padEnd(14)} ${('~/' + profile.personal.join('/')).padEnd(38)} ${profile.project.join('/')}`);
    console.log('Each directory receives uxcalibur/. Use --target for custom locations.');
    console.log('OpenCode/Amp honor XDG_CONFIG_HOME for personal configuration paths.');
    console.log('Generic uses the shared Agent Skills directory; discovery depends on the host.');
  }
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
          if (!isAgent(value)) throw new Error(`Choose an agent: ${choices}.`);
          options.agent = value;
          agentSet = true;
        } else options.target = value;
      } else if (flag === '--project') options.project = true;
      else if (flag === '--force') options.force = true;
      else throw new Error(`Unknown option: ${flag}`);
    }
    if (!agentSet) throw new Error(`Choose an agent with --agent ${choices}.`);
    if (options.project && options.target !== undefined) throw new Error('--project and --target cannot be combined.');
    const result = install(options, { home: homedir(), cwd: process.cwd(), configHome: process.env.XDG_CONFIG_HOME, source: fileURLToPath(new URL('../skill/', import.meta.url)), version: metadata.version });
    console.log(`${result.unchanged ? 'Already installed' : 'Installed'} UXcalibur ${metadata.version}: ${result.directory}`);
    if (result.backup) console.log(`Previous installation preserved: ${result.backup}`);
    console.log(`${agentProfiles[options.agent].invocation} Restart or reload skills if needed.`);
  }
} catch (error) {
  console.error(`uxcalibur: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}
