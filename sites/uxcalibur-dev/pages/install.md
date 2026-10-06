---
title: Install. Set a boundary. Run a pass.
description: Install UXcalibur 0.1.0 for Codex, Claude Code, or Cursor, then invoke the skill with an outcome, focus areas, exclusions, and authorized evidence.
order: 1
---

<p class="doc-kicker">Getting started / UXcalibur 0.1.0</p>

<p class="lead">Install the versioned skill and reference files. Then ask your coding agent to inspect a chosen job in your app.</p>

You need **Node.js 20.19+** with npm/npx and a supported coding-agent host. The installer places the method files; your agent runs the review with its configured model, tools, permissions, and evidence access. The app or tool being reviewed stays under your control.

<nav class="page-jumps" aria-label="On this page"><a href="#choose-your-agent">Install</a><a href="#choose-the-installation-scope">Scope</a><a href="#invoke-a-focused-pass">Invoke</a><a href="#update-and-local-edits">Update</a></nav>

## Choose your agent

Use one command for your host. The explicit version makes the installed method reproducible.

### Codex

```sh
npx uxcalibur@0.1.0 install --agent codex
```

The default personal destination is `~/.agents/skills/uxcalibur`. Invoke it in Codex with **`$uxcalibur`**.

### Claude Code

```sh
npx uxcalibur@0.1.0 install --agent claude
```

The default personal destination is `~/.claude/skills/uxcalibur`. Invoke it in Claude Code with **`/uxcalibur`**.

### Cursor

```sh
npx uxcalibur@0.1.0 install --agent cursor
```

The default personal destination is `~/.cursor/skills/uxcalibur`. Invoke it in Cursor with **`/uxcalibur`**.

After installation, reopen or refresh the agent session if its skill list has not updated. Installation and packed-file checks cover these three layouts; the worked audit and interaction proof used Codex. Actual runtime behavior has not been exercised in all three agents.

## Choose the installation scope

Personal installation is the default. For a project-local installation, run from that project's root:

```sh
npx uxcalibur@0.1.0 install --agent codex --project
```

This uses `.agents/skills/uxcalibur` under the current directory. For Claude Code it uses `.claude/skills/uxcalibur`; for Cursor, `.cursor/skills/uxcalibur`. Commit the project copy if you want to share that pinned method with the team and your repository policy permits it.

To select a particular parent skills directory:

```sh
npx uxcalibur@0.1.0 install --agent codex --target ./my-skills
```

The result is `./my-skills/uxcalibur`. `--target` and `--project` are mutually exclusive. A legacy Codex directory can be selected explicitly with `--target ~/.codex/skills`; use an absolute path if your shell does not expand `~`. On Windows, `~` refers to the user's home directory.

## Invoke a focused pass

Give the agent the intended outcome, evidence access, focus areas, exclusions, and a useful check. In Codex:

```text
$uxcalibur
App: the running review inbox and its authorized source in this project.
Outcome: search Orchard, read note-049's handoff, then return and continue
the same review. Success: the correct ID, query/results, useful list
position, and keyboard continuation survive return.
Focus: accomplishment and navigation continuity, including keyboard.
Exclude: branding, note editing/storage, backend/service features,
and unrelated surfaces.
Inspect rendered behavior and source. Produce a short ranked cut list
with evidence, behavior/supporting contracts, preservation rules,
confidence, observable acceptance checks, and verification limits.
Save the report in the project's established docs location.
Do not modify the app.
```

In Claude Code or Cursor, replace the first line with `/uxcalibur`. Adapt the app, source, task, and criteria to your real project; the inbox above is a synthetic illustration. The [actual example invocation and result](/example) show the full evidence trail.

The focused pass is the default. It can return no actionable cuts if the evidence warrants that result. Ask explicitly for a [detailed upgrade specification](/spec) when you need broader flows, implementation packets, and a tracker.

## Review, then implement

A report request authorizes the report and its evidence/tracker. To make changes, follow with a concrete instruction such as:

```text
Implement K1 from [REPORT_PATH] within the accepted scope.
Preserve unrelated work and the report's listed existing capabilities.
Run its acceptance checks, retain evidence and unrun limits,
and update the cut's status. Do not publish or deploy.
```

Choose a cut because it serves the requested outcome. Verify its actual behavior; a build alone does not prove the outcome or all recovery cases.

## Update and local edits

To reinstall a release or update to a later version, run the install command with that explicit version and the same agent/scope. The installer protects locally modified or unmanaged installations. Review those edits before using `--force`, which permits a backup and replacement.

```sh
npx uxcalibur@0.1.0 install --agent codex --force
```

Only use `--force` when replacement is intended. The repository's `skills/uxcalibur/` directory is the method source; personal installed copies are separate. You can inspect the [published package](https://www.npmjs.com/package/uxcalibur) and [source files](https://github.com/Catalyst-Forge-LLC/uxcalibur/tree/main/skills/uxcalibur) before installing.

## Evidence and processing boundaries

Use source, running interfaces, screenshots, logs, and fixtures that you authorize the host to read. UXcalibur does not select a model/provider or change the host's processing rules. Local app hosting does not imply offline analysis. Model processing, credentials, permissions, and available tools remain host-controlled.

The installer installs the skill; it does not execute an audit, launch your app, or provide a hosted analyzer. Follow your project's instructions for running the app and handling its data.

<div class="doc-next"><a href="/example">Read the worked example <span aria-hidden="true">→</span></a><a href="/spec">Ask for a detailed specification <span aria-hidden="true">→</span></a></div>
