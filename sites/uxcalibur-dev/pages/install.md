---
title: Draw UXcalibur on your app.
description: Use UXcalibur with your coding agent, including Grok/xAI and other Agent Skills hosts in the source build. Transform an app, refine its design, or hone the details.
order: 1
---

<p class="doc-kicker">Getting started / an expert UX method for your agent</p>

<p class="lead">Install the skill. Open your project. Ask your agent to bring out the best in its user experience.</p>

You need **Node.js 20.19+** with npm/npx and a supported coding agent. The npm command installs the method files; your agent works with the app and codebase using its configured model and tools.

<nav class="page-jumps" aria-label="On this page"><a href="#choose-your-agent">Install</a><a href="#more-agents-in-the-source-build">More agents</a><a href="#wield-the-skill">Use</a><a href="#choose-the-installation-scope">Installation scope</a><a href="#update-and-local-edits">Update</a></nav>

## Choose your agent

The current published release is **0.1.0**. The revised shape/refine/hone method shown in this local site draft is being prepared for the next release. To use that revision now, point your agent at this checkout's `skills/uxcalibur/SKILL.md`. The commands below install the published version.

### Codex

```sh
npx uxcalibur@0.1.0 install --agent codex
```

The personal destination is `~/.agents/skills/uxcalibur`. Invoke it with **`$uxcalibur`**.

### Claude Code

```sh
npx uxcalibur@0.1.0 install --agent claude
```

The personal destination is `~/.claude/skills/uxcalibur`. Invoke it with **`/uxcalibur`**.

### Cursor

```sh
npx uxcalibur@0.1.0 install --agent cursor
```

The personal destination is `~/.cursor/skills/uxcalibur`. Invoke it with **`/uxcalibur`**.

Refresh or reopen the agent session if the new skill is not visible. Installation and packed-file checks cover all three hosts; actual runtime invocation has been verified in Codex.

## More agents in the source build

Use UXcalibur with **Grok/xAI, Gemini CLI, GitHub Copilot, OpenCode, Amp, Cline, Kilo Code, and Roo Code**. Their presets are in the next-release source candidate, together with a shared Agent Skills preset. They are not yet in npm 0.1.0.

Build the installer from the UXcalibur checkout:

```sh
pnpm package:build
node .artifacts/npm-package/bin/uxcalibur.js --list-agents
```

From the app you want to review, run the built installer using its absolute path:

```sh
node /absolute/path/to/uxcalibur/.artifacts/npm-package/bin/uxcalibur.js install --agent grok --project
```

Replace `grok` with your preset. Omit `--project` for a personal installation.

| Agent | Preset |
| --- | --- |
| Codex | `codex` |
| Claude Code | `claude` |
| Cursor | `cursor` |
| Grok Build (xAI) | `grok` |
| Gemini CLI | `gemini` |
| GitHub Copilot | `copilot` |
| OpenCode | `opencode` |
| Amp | `amp` |
| Cline | `cline` |
| Kilo Code | `kilo` |
| Roo Code | `roo` |
| Shared Agent Skills directory | `generic` |

In Grok Build, invoke `/uxcalibur`. In the other new hosts, ask the agent to use the UXcalibur skill. You can also choose a Grok model through [OpenCode's xAI provider](https://opencode.ai/docs/providers/#xai); use the `opencode` preset for that host.

The [compatibility guide](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/docs/AGENT_COMPATIBILITY.md) lists documented discovery paths, reload guidance, and custom installations. All 12 presets pass installer checks in isolated directories; actual model invocation has been exercised in Codex. Your host supplies the model, tools, and app access.

For another Agent Skills host, use `generic` if it discovers `.agents/skills`, or `--target` with its documented parent skills directory. Agents that can read source files can use `SKILL.md` directly with its references.

## Wield the skill

For a broad app review:

```text
Use skills/uxcalibur/SKILL.md to review this app's UX.
Inspect the codebase and running interface.
Show me the experience it could become, with a coherent design direction
and prioritized changes. Do not implement yet.
```

With the revised skill installed, start that request with `$uxcalibur` in Codex or `/uxcalibur` in Claude Code, Cursor, or Grok Build. In other hosts, ask to use the UXcalibur skill. The agent can infer a starting point from the product; add audience or product context if it will help.

Choose a scale when you have one in mind:

| Request | Example |
| --- | --- |
| Shape | Rethink this app's navigation and core journeys. Propose an expertly designed experience. |
| Refine | Improve this dashboard's interactions, hierarchy, typography, and responsive layout. |
| Hone | Polish this checkout's language, focus, feedback, and error states. Preserve its overall design. |

You can also name a focus or an area to preserve: “Focus on onboarding,” or “Keep the existing branding.” The [method](/method) brings the same design depth to a whole app or a specific part.

## Go from design to implementation

Ask for a [detailed upgrade specification](/spec) when you want complete design/behavior contracts and ordered implementation packets.

To carry a design into code:

```text
Implement the first agreed packet from [SPEC_PATH].
Follow its design direction, dependencies, and acceptance checks.
Inspect the rendered result at desktop and mobile sizes, verify the
affected journeys, and update the implementation tracker.
```

A review request produces the review. You can request design and implementation together when that is the assignment. Publication and deployment follow your project's authorization.

## Choose the installation scope

Personal installation is the default. For a project installation, run from the intended project's root:

```sh
npx uxcalibur@0.1.0 install --agent codex --project
```

Codex uses `.agents/skills/uxcalibur`; Claude Code uses `.claude/skills/uxcalibur`; Cursor uses `.cursor/skills/uxcalibur`. Share the project copy with your team according to repository policy.

To select a particular parent skills directory:

```sh
npx uxcalibur@0.1.0 install --agent codex --target ./my-skills
```

This creates `./my-skills/uxcalibur`. `--target` and `--project` are mutually exclusive. Select a legacy Codex directory with `--target ~/.codex/skills`; use an absolute path if your shell does not expand `~`.

## Update and local edits

Reinstall or upgrade with the explicit release version and the same agent/scope. The installer records hashes and protects modified or unmanaged copies. When you intend to replace one, `--force` preserves a backup and prints its location.

```sh
npx uxcalibur@0.1.0 install --agent codex --force
```

The repository skill is the method source; personal installations are separate. Inspect the [published package](https://www.npmjs.com/package/uxcalibur) and [source](https://github.com/Catalyst-Forge-LLC/uxcalibur/tree/main/skills/uxcalibur) before installing.

## App access and evidence

Use source, interfaces, screenshots, logs, and fixtures your agent is authorized to inspect. Model processing, permissions, billing, and tools remain host-controlled. Local app hosting does not imply offline analysis.

The installer places instructions and references. It does not run an audit, launch your app, or provide a hosted analyzer. Follow the project's existing setup and data-handling rules.

<div class="doc-next"><a href="/method">Explore shape, refine, hone <span aria-hidden="true">→</span></a><a href="/spec">Build from a detailed design plan <span aria-hidden="true">→</span></a></div>
