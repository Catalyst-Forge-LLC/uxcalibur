<!--
  Agent protocol based on ForgeTrail Lite v2.2.2.
  © Catalyst Forge, LLC — www.catalystforge.com
  Licensed under Apache License 2.0 (upstream ForgeTrail repo).
-->

# Agent instructions for this repo

This repository uses **ForgeTrail Lite** as its project kickoff and operating protocol. The full protocol is in `.forgetrail/FORGETRAIL_LITE.md` — read it at the start of every fresh session.

## Non-negotiables
- **Phase gates:** pause at every phase transition and wait for explicit user approval before advancing. Current phase lives in `appledger/profiles/forgetrail.yaml`.
- **Phase 1 before code:** do not write project code until `docs/PHASE_1_BRIEF.md` is locked and stack is agreed.
- **Phase 2 = full runnable spine** in one pass (init → deps → data → routes → hero flow end to end). No deferred spine.
- **Log decisions:** every material decision is a decision record in `appledger/` with a one-line rationale.
- **Plain first reply:** first user-facing message after bootstrap is product language, not methodology jargon. See `.forgetrail/FORGETRAIL_LITE.md` §9.
- **Ask questions as numbered lists, one per line.** Never mash multiple questions into a paragraph. See §5.
- **Git commits:** plain `-m` or `-F` at natural stopping points with concise summaries. Verify checks pass before committing. See §8.9.
- **Lists:** numbered = ordered steps or questions, bullets = parallel options, letters (A/B/C) = pick-one. See §8 rule 5.
- **No interactive CLIs** in scripted commands — pass every flag.
- **Five-turn rule:** if a problem has not converged in ~5 turns, propose a different approach, not more patches.

## Conventions
- Package manager: **pnpm**. Add deps with `pnpm add` / `pnpm add -D` — never hand-edit `package.json`, never `npm`/`yarn`.
- Modules: **ESM only** (`"type": "module"`, use `import`/`export`, never `require`).
- Language: **TypeScript** (strict).
- Source control: **git**. Commit at natural stopping points with phase-prefixed messages (`phase-2: …`). Plain `-m` or `-F`; ensure verify checks pass (§8.9).

## Setup is the agent's job
Initial `git init`, `pnpm init` / scaffolder, `pnpm install`, and the initial commit are all done by the agent per `.forgetrail/FORGETRAIL_LITE.md` §4. Do not ask the user to run setup commands by hand. If `git`, **Node.js**, **npm**, or **pnpm** are missing, follow §4.1 preflight (concrete install path; no-git mode for git only — never silently skip).

## Session start
1. Read `appledger/profiles/forgetrail.yaml` and `CONTEXT_PROMPT.md` (if present).
2. Check the current profile phase and the latest session record.
3. Verify `.git/` and `package.json` exist if the phase calls for them; if missing, re-read `.forgetrail/FORGETRAIL_LITE.md` §4 (preflight + ordered actions) and catch up before proceeding. If a decision records that source control is deferred, respect no-git mode and remind the user git is still pending.
4. If the previous session left exit criteria unmet, resume there — do not jump ahead.
