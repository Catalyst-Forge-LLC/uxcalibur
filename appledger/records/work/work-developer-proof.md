---
format_version: 0.1.0
id: work-developer-proof
kind: work
title: Build the first developer proof
record_status: active
created_at: 2026-10-05T20:53:56Z
updated_at: 2026-10-05T22:50:42Z
recorded_by:
  id: codex-kickoff
  type: agent
visibility: internal
relations:
  - type: affects
    target: app-b7a2d51c-16c3-463f-b3b8-434a18bd2b41
  - type: depends_on
    target: decision-developer-proof
claims: []
data:
  status: in_progress
  objective: Complete P1-P4 after brief approval and demonstrate one
    evidence-backed implemented cut on the isolated fixture.
  intake: task
  acceptance_criteria:
    - id: A1
      text: Runnable synthetic flow
      status: pending
    - id: A2
      text: Actual scoped report identifies the intended outcome, focus, exclusions,
        criteria, and traceable evidence; recommendations respect that scope.
      status: pending
    - id: A3
      text: Targeted check fails before the cut and passes afterward
      status: pending
    - id: A4
      text: Keyboard/identity/no-match/reflow/history coverage
      status: pending
    - id: A5
      text: Fresh-copy invocation and reference resolution
      status: pending
    - id: A6
      text: Repeatable verifier with honest evidence
      status: pending
    - id: A7
      text: Usage describes real capabilities and processing limits
      status: pending
    - id: A8
      text: An actual pass on a named aspect respects focus and exclusions; necessary
        excluded-area dependencies are stated without silently expanding scope.
      status: pending
  verification_refs: []
---

P1 baseline is verified for its core behavior; P2/P4 are in progress and P3 has not started. The precise acceptance contracts are in docs/PHASE_1_BRIEF.md section 11. Build authorization is explicitly recorded in evidence-build-approval.
