# Actual proof invocation

Date: 2026-10-05. Agent host: Codex in this private checkout, using its configured model/tools. The host received only the synthetic fixture and method for this pass. No provider is embedded in UXcalibur.

The skill was copied and structurally validated with `pnpm skill:copy`. The [installation receipt](evidence/skill-installation.json) records the five identical file digests and three resolved reference links. The independent agent read that fresh copy, not the personal installed skill.

Baseline source: `e9e9b3c53dfca371de1b4ed52094fe2cefde4810`. It is a local Git commit; no remote push is required to inspect or replay it.

The independent pass received this request plus only source/interface access and output permissions:

```text
Use the UXcalibur skill from the fresh isolated copy.
App: the running local review inbox at http://127.0.0.1:5191/.
Source: fixtures/review-inbox at the preserved baseline revision.
Outcome: search for Orchard; read Orchard handoff, note-049; identify the
handoff owner and action in the long note; return and continue the same review.
Focus: accomplishment and navigation continuity, including keyboard interaction.
Exclude: visual branding, note editing/storage, backend/service features,
and unrelated surfaces.
Inspect rendered behavior and source. Return the short ranked cuts justified
by evidence, their supporting contracts, preservation/dependencies, confidence,
observable acceptance checks, and verification limits. Do not modify the app.
```

The report is an actual agent-produced artifact. The fixture is synthetic. This demonstration can establish actionable recommendations and reproduced behavior; it does not measure customer completion or general method accuracy.
