# Developer release verification

Release candidate: **uxcalibur 0.1.0**, MIT. Publication checks are pending until their results are recorded below.

The authored skill is six files, including the MIT notice, with three resolving method references. The npm tarball contains exactly 11 files: package metadata, README/license, two compiled installer modules, and the six authored skill files. It has no dependencies or lifecycle scripts.

`pnpm package:check` installs the actual tarball through pnpm and exercises its executable. It verifies personal and project layouts for Codex/Claude Code/Cursor, paths with spaces, repeated installation, managed upgrade, unmanaged/edited-copy refusal, forced preservation, nested-target backups outside discovery, unusual filenames, symlink refusal, and invalid options. Independent review also exercises rollback after a staged rename failure and the Windows package-manager executable shim.

`pnpm verify` passes fresh-copy/reference checks, strict types, production fixture build, 12 current Chromium cases, and four intended continuity failures against pinned commit `e9e9b3c53dfca371de1b4ed52094fe2cefde4810`. These demonstrate behavior for the synthetic task; customer outcome improvement is not measured.

The existing personal Codex installation is updated with a preserved backup. Its runtime use has been exercised. Claude Code and Cursor filesystem installations are verified; their actual model invocation is not independently tested. Linux/macOS installer execution is not claimed from Windows checks.

Second method validation uses read-only LocalHelm source and rendered UI for a bounded operator flow. Focused and explicit detailed-spec reports remain private in `.artifacts/localhelm-validation`; public evidence uses the synthetic review inbox. Four evidence-backed cuts map to four flow/packet contracts and 18 acceptance cases, all Not started/Not run. Artifact link, contract, status, and ignored-destination checks pass. No LocalHelm changes, write actions, or app-side model requests occurred. This validates report contracts and scope discipline, not the effect of unimplemented recommendations.

Two demonstrated method clarifications are incorporated: check plan/review entry-point effects before read-only interaction, and record/minimize private evidence with an explicit destination. The final distributed method distinguishes those checks from repeated approval for already authorized actions.

FilePress desktop/narrow rendering, links/resources, keyboard focus, no-JavaScript content, canonical metadata, 404, and feeds are checked separately. Live deployment results and any remaining domain step will be recorded after publication.

Machine receipts are ignored under `.artifacts/`; selected public summaries are retained here. The first fixture proof keeps its historical five-file skill receipts; the later MIT notice and installer distribution do not rewrite that history.

Final reviewed candidate tarball SHA-256: `d8da5743b545034c7b86fe4f99ceaade97cbca3f1ccfa24360cbd5461ed340b2`. `pnpm verify:release` passes; the subsequent method wording corrections pass fresh-copy/reference validation, the skill-creator validator, and packed install/update checks. Site QA covers 12 desktop/narrow states. Publication is the remaining R4 work.
