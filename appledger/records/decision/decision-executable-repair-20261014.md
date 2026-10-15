---
format_version: 0.1.0
id: decision-executable-repair-20261014
kind: decision
title: Use one root package for installer publication
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
  status: accepted
  choice: Make the enrolled root the public installer package with a prepack build and exact file allowlist.
  rationale: The split generated release let LocalHelm publish the development manifest without an executable; one manifest/version/README removes that ambiguity.
  alternatives:
    - Keep a private root and require a manual generated tarball publication.
    - Add generic generated release-target support to LocalHelm before this repair.
  authority: user
---

The user flagged the missing published executable and disjointed README during
the requested LocalHelm friction pass. This is a bounded correction in the
existing completed Stabilize instance. npm publication and registry deprecation
remain separate actions.
