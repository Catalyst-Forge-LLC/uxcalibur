---
format_version: 0.1.0
id: evidence-executable-repair-20261014
kind: evidence
title: Verify the root package executable and public contents
record_status: active
created_at: 2026-10-15T02:36:50Z
updated_at: 2026-10-15T02:36:50Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  evidence_kind: test_run
  repository_id: repo-home
  source: docs/RELEASE_0.1.2.md
  checked_at: 2026-10-15T02:36:50Z
  result: Root-packed candidate has twelve allowed files; executable resolution and all twelve host presets, updates, backups, and error paths pass. Published 0.1.1 was inspected and has 184 files with no bin.
  limitations:
    - Candidate is local and has not been published by this preparation.
    - Other hosts model invocation is not established by installer tests.
---

The final archive hash is in ignored .artifacts/package-verification.json.
Current fixture checks pass twelve cases with four intended baseline failures.
