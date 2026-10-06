# UXcalibur

**Turn rough apps into exceptional experiences.** Give your coding agent an expert UX method to inspect an app or codebase, design a coherent upgrade, and carry it through implementation. **Shape, refine, hone:** from broad strokes to precision polish.

UXcalibur is a reusable agent skill. The npm command installs its Markdown instructions and references. You supply your agent and app access.

This source README describes the revised next-release method. Published npm 0.1.0 remains unchanged. Use this checkout's `skills/uxcalibur/SKILL.md` to try the revision before it is released.

## Install

Requires Node.js 20.19 or later and a supported coding agent.

```sh
npx uxcalibur@0.1.0 install --agent codex
npx uxcalibur@0.1.0 install --agent claude
npx uxcalibur@0.1.0 install --agent cursor
```

| Host | Personal default | With `--project` |
| --- | --- | --- |
| Codex | `~/.agents/skills/uxcalibur` | `.agents/skills/uxcalibur` |
| Claude Code | `~/.claude/skills/uxcalibur` | `.claude/skills/uxcalibur` |
| Cursor | `~/.cursor/skills/uxcalibur` | `.cursor/skills/uxcalibur` |

Run `--project` from the intended project directory. `--target <parent skills directory>` selects another location and cannot be combined with `--project`. For an existing legacy Codex installation, choose `--target "$HOME/.codex/skills"` explicitly. Keep one copy in your host's discovery paths to avoid duplicate skills.

The installer records file hashes. A repeat install is unchanged; an intact installer-managed version can be upgraded. Local edits, extra files, and unmanaged installations require `--force`, which preserves the previous directory outside the host's skill discovery folder and prints its backup path. Linked installation directories or entries are refused. Restore a backup manually after moving the active copy aside. The installer does not alter other skills or agent settings.

Installation paths and packed file integrity are tested for all three hosts. Agent runtime invocation is verified in Codex; Claude Code and Cursor runtime results have not been independently verified.

Host installation references: [Codex](https://learn.chatgpt.com/docs/build-skills), [Claude Code](https://code.claude.com/docs/en/skills), [Cursor](https://prod.cursor.com/help/customization/skills).

## Use

In Codex, invoke `$uxcalibur`; in Claude Code or Cursor, invoke `/uxcalibur`. Restart or reload your agent's skills if the new skill is not yet visible.

```text
$uxcalibur Review this app's UX. Inspect the codebase and interface,
then propose an exceptional target experience and a prioritized upgrade plan.
Consider product structure, core journeys, interaction, and visual design.
Do not implement yet.
```

A broad request receives an app assessment, coherent design direction, and prioritized implementation guidance. Choose a flow or aspect for a focused refinement, or ask for precision polish. A detailed upgrade specification resolves visual/interaction/state/data contracts, accessibility, recovery, dependencies, and tracked implementation packets.

The sword-from-the-stone story is about elevating the app to its potential. The method also reviews how product concepts, language, metaphors, and onboarding teach people what an app can do and how to use it.

A review produces recommendations. Ask separately for implementation of selected cuts. UXcalibur distinguishes observed evidence, inference, proposed work, and measured results. A passing synthetic fixture demonstrates behavior, not customer usability gains.

The package has no model runtime, telemetry, or automatic audit command. Your agent's normal access and billing apply.

[Method and worked example](https://uxcalibur.dev) · [Source and issues](https://github.com/Catalyst-Forge-LLC/uxcalibur)

## License

MIT © 2026 Catalyst Forge, LLC.
