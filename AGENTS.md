# UXcalibur project

This repository develops UXcalibur. Product direction is in `GENESIS.md`; the versioned method is `skills/uxcalibur/`. Reviewing this project is different from running the skill against a customer's app.

Start each session by reading `appledger/profiles/forgetrail.yaml`, the latest session record, and `docs/PHASE_1_BRIEF.md`. Read `CONTEXT_PROMPT.md` and `TODO.md` when they exist. Follow `.forgetrail/AGENTS.md` and consult `.forgetrail/FORGETRAIL_LITE.md` for the current phase. The ledger is the authority for phase, decisions, questions, and handoffs.

The initial brief and developer release brief are **locked** (2026-10-05). P1–P4/A1–A8 are verified. The owner authorizes the bounded MIT skill/npm, FilePress/Cloudflare Pages, and public GitHub launch for Codex, Claude Code, and Cursor. SaaS remains deferred. Current phase and R1–R4 progress live in the ledger. The owner attaches uxcalibur.dev after Pages publication.

Preserve the spelling **UXcalibur**. Help users accomplish goals or improve outcomes within their requested focus areas and exclusions. Keep the focused pass as the default and detailed specification as an explicit mode. Trace cuts to actual evidence and supporting behavior; never describe a predicted outcome improvement as measured.

The repository copy of the skill is the project source. Personal installed copies are separate installations. Keep fixtures synthetic and isolated from customer repositories and data.

Use pnpm for project dependencies, ESM, and strict TypeScript when the approved brief calls for executable code. The skill itself is Markdown/YAML. Do not add ForgeTrail or AppLedger as product runtime dependencies. FilePress is the established site direction; build it when the approved scope includes sites.

Commit verified work at natural stopping points. A git push, npm publication, domain deployment, or message to an external party requires the user's authorization for that action. Cursor hook files are supplied by ForgeTrail; their presence does not establish enforcement in Codex.
