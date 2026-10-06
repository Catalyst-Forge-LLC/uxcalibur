---
format_version: 0.1.0
id: decision-genesis-direction
kind: decision
title: "D1: Preserve genesis product direction"
record_status: superseded
created_at: 2026-10-05T20:53:56Z
updated_at: 2026-10-06T10:29:13.425Z
recorded_by:
  id: codex-kickoff
  type: agent
visibility: internal
relations:
  - type: verified_by
    target: evidence-genesis-direction
claims:
  - id: decision-basis
    statement: At kickoff the direction used a focused-pass default and explicit
      detailed-spec mode. D11 supersedes that positioning; naming, shared
      method, ForgeTrail, and FilePress remain current.
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
  status: superseded
  choice: Keep UXcalibur naming, focused-pass default, explicit detailed-spec
    mode, shared method, separate domain audience jobs, ForgeTrail tracking, and
    FilePress site direction.
  rationale: The owner supplied a concrete genesis with these established directions.
  alternatives:
    - A generic heuristic checklist as the default.
    - A new hosted architecture selected during kickoff.
  authority: Supplied GENESIS.md; owner-provided project input
---

This decision records supplied direction or reversible kickoff setup.

See docs/PHASE_1_BRIEF.md section 8.

2026-10-06: D11 supersedes the focused-default positioning and deferred developer-distribution snapshot. This record retains the initial decision as history.
