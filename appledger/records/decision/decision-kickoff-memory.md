---
format_version: 0.1.0
id: decision-kickoff-memory
kind: decision
title: "D2: Self-contained kickoff memory"
record_status: active
created_at: 2026-10-05T20:53:56Z
updated_at: 2026-10-05T20:53:56Z
recorded_by:
  id: codex-kickoff
  type: agent
visibility: internal
relations:
  - type: verified_by
    target: evidence-genesis-direction
claims:
  - id: decision-basis
    statement: Commit ForgeTrail Lite and AppLedger with a root agent entry point.
      Keep the phase in Plan pending approval of the concrete brief.
    basis: declared
    status: supported
    evidence_refs:
      - evidence-genesis-direction
    scope:
      repository_id: repo-home
      limitations:
        - Acceptance concerns direction/setup only; no implemented developer
          proof.
data:
  status: accepted
  choice: Commit ForgeTrail Lite and AppLedger with a root agent entry point. Keep
    the phase in Plan pending approval of the concrete brief.
  rationale: The genesis requests setup and continuity; local workspace tooling
    provides current offline installation without new runtime dependencies.
  alternatives:
    - Use a full vendored methodology tree.
    - Use only chat history or retired workflow_tracking.json.
  authority: Agent setup choice within the owner request to review and kick off
    the project
---

This decision records supplied direction or reversible kickoff setup.

See docs/PHASE_1_BRIEF.md section 8.
