# UXcalibur agent compatibility

UXcalibur is an Agent Skills bundle: `SKILL.md`, relative references, a license, and metadata. The same expert UX method works through the coding agent and model you choose. The installer selects the host's discovery directory; it does not configure a model provider or require an OpenAI runtime. `agents/openai.yaml` supplies optional Codex UI metadata, while the method itself is host-neutral.

## Release boundary

Published npm **0.1.0** has `codex`, `claude`, and `cursor` presets. This **unpublished source candidate** adds Grok/xAI, Gemini CLI, GitHub Copilot, OpenCode, Amp, Cline, Kilo Code, Roo Code, and a shared Agent Skills preset. New preset commands require the source build until a new npm version is published.

From the UXcalibur checkout:

```sh
pnpm package:build
node .artifacts/npm-package/bin/uxcalibur.js --list-agents
```

From the app you want to review, use the absolute path to that built installer:

```sh
node /absolute/path/to/uxcalibur/.artifacts/npm-package/bin/uxcalibur.js install --agent grok --project
```

Omit `--project` for a personal installation. Replace `grok` with a preset below. The installer adds `uxcalibur/` under the listed parent directory. Keep one active copy in your host's discovery paths and reload its skills after installation.

## Host presets

Paths were checked against the linked host documentation on **2026-10-06**. `~` denotes your home directory, including on Windows. These are the selected defaults, not every alias a host supports.

| Host and documentation | Preset | Personal parent | Project parent |
| --- | --- | --- | --- |
| [Codex](https://learn.chatgpt.com/docs/build-skills) | `codex` | `~/.agents/skills` | `.agents/skills` |
| [Claude Code](https://code.claude.com/docs/en/skills) | `claude` | `~/.claude/skills` | `.claude/skills` |
| [Cursor](https://prod.cursor.com/help/customization/skills) | `cursor` | `~/.cursor/skills` | `.cursor/skills` |
| [Grok Build (xAI)](https://docs.x.ai/build/features/skills-plugins-marketplaces) | `grok` | `~/.grok/skills` | `.grok/skills` |
| [Gemini CLI](https://geminicli.com/docs/cli/using-agent-skills/) | `gemini` | `~/.gemini/skills` | `.gemini/skills` |
| [GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills) | `copilot` | `~/.copilot/skills` | `.github/skills` |
| [OpenCode](https://opencode.ai/docs/skills/) | `opencode` | `~/.config/opencode/skills` | `.opencode/skills` |
| [Amp](https://ampcode.com/docs/customize/skills) | `amp` | `~/.config/agents/skills` | `.agents/skills` |
| [Cline](https://docs.cline.bot/customization/skills) | `cline` | `~/.cline/skills` | `.cline/skills` |
| [Kilo Code](https://kilo.ai/docs/customize/skills) | `kilo` | `~/.kilo/skills` | `.kilo/skills` |
| [Roo Code](https://docs.roocode.com/features/skills) | `roo` | `~/.roo/skills` | `.roo/skills` |
| Shared Agent Skills directory | `generic` | `~/.agents/skills` | `.agents/skills` |

Personal OpenCode and Amp installations honor an absolute `XDG_CONFIG_HOME` when set. `--target <parent skills directory>` overrides the default and cannot be combined with `--project`. Local edits and unmanaged copies require `--force`; backups remain outside ancestor `skills` discovery directories. Other skills, agent settings, and provider credentials are untouched.

## Invoke the method

Use `$uxcalibur` in Codex and `/uxcalibur` in Claude Code, Cursor, or Grok Build. For the other hosts, ask naturally:

```text
Use the uxcalibur skill to review this app's UX.
Inspect the codebase and running interface. Propose an exceptional target
experience, a coherent design direction, and prioritized implementation work.
Do not implement yet.
```

Host discovery and tool permissions still apply. Read the host's current documentation for reload commands or skill controls. A chat model needs an agent environment with access to the app and files to carry out this assignment.

## Grok models and other providers

Grok Build can discover the native `.grok/skills` installation. You can also run the method with a Grok model through a compatible host. [OpenCode documents an xAI provider](https://opencode.ai/docs/providers/#xai): connect xAI through `/connect`, choose an available Grok model through `/models`, and use the `opencode` installation. Provider access, authentication, pricing, and tools belong to that host; UXcalibur has no fixed model choice or provider SDK.

The same principle applies to other models exposed by your agent. The skill specifies design and verification work; the host supplies the capabilities to do it. Record unavailable interface access or verification explicitly instead of presenting source inference as exercised behavior.

## Additional agents

For another host that supports Agent Skills, select `generic` if it discovers `.agents/skills`, or use `--target` with its documented parent skills directory. For an agent that can read files without native skill discovery, point it directly at `skills/uxcalibur/SKILL.md` and preserve the relative references. The shared preset does not guarantee discovery in every bot or chat interface.

## Verification

`pnpm package:check` verifies all 12 presets using the packed installer in isolated homes and projects. It covers exact file integrity, personal/project destinations, agent listing, updates, local-edit refusal, preserved backups, custom/nested discovery roots, XDG paths, unsafe links, and invalid options. It does not write personal host settings or use a paid model.

Actual skill invocation has been exercised in Codex. The other hosts' model execution has not been independently exercised here. The documentation supports their discovery layouts, and the installer checks establish placement and safety, not equivalent output quality or measured UX improvement.
