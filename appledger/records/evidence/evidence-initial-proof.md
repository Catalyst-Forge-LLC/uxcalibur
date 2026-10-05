---
format_version: 0.1.0
id: evidence-initial-proof
kind: evidence
title: Verified current app and preserved-baseline proof
record_status: active
created_at: 2026-10-05T23:25:51.187Z
updated_at: 2026-10-05T23:25:51.187Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  evidence_kind: test_run
  repository_id: repo-home
  result: "pnpm verify passed: five-file fresh skill copy and three references, strict
    types/build, 12 current browser cases, and four intended continuity assertion failures
    on the baseline; excluded fixture files preserved."
  source: examples/review-inbox/evidence/verification.json
  digest: 29504f1227a21d8309017145d10a8e676fe890171d38a12fd80f0003e3f51094
  limitations:
    - Synthetic behavior proof; no customer efficacy measurement.
    - Windows/Chromium only; screen readers, real touch, other engines and restart
      continuity unverified.
  checked_at: 2026-10-05T23:25:51.187Z
---

Evidence is retained with the approved initial proof.
