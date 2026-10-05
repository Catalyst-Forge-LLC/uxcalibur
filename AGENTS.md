# UXcalibur project

This repository develops UXcalibur. Product direction is in `GENESIS.md`; the versioned method is `skills/uxcalibur/`. Reviewing this project is different from running the skill against a customer's app.

Start each session by reading `appledger/profiles/forgetrail.yaml`, the latest session record, and `docs/PHASE_1_BRIEF.md`. Read `CONTEXT_PROMPT.md` and `TODO.md` when they exist. Follow `.forgetrail/AGENTS.md` and consult `.forgetrail/FORGETRAIL_LITE.md` for the current phase. The ledger is the authority for phase, decisions, questions, and handoffs.

The brief is currently **draft**. Complete authorized planning and setup; obtain explicit approval of the concrete brief before locking it and entering Build. Do not treat a proposed stack, fixture, license, site, or CLI as approved or shipped.

Preserve the spelling **UXcalibur**. Keep the focused pass as the default and detailed specification as an explicit mode. Trace cuts to actual evidence and supporting behavior; never describe a predicted completion improvement as measured.

The repository copy of the skill is the project source. Personal installed copies are separate installations. Keep fixtures synthetic and isolated from customer repositories and data.

Use pnpm for project dependencies, ESM, and strict TypeScript when the approved brief calls for executable code. The skill itself is Markdown/YAML. Do not add ForgeTrail or AppLedger as product runtime dependencies. FilePress is the established site direction; build it when the approved scope includes sites.

Commit verified work at natural stopping points. A git push, npm publication, domain deployment, or message to an external party requires the user's authorization for that action. Cursor hook files are supplied by ForgeTrail; their presence does not establish enforcement in Codex.
