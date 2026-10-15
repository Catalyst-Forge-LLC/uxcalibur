---
format_version: 0.1.0
id: session-release-0.1.1-20261014
kind: session
title: Prepare UXcalibur 0.1.1 for the owner to publish
record_status: active
created_at: 2026-10-15T00:45:34Z
updated_at: 2026-10-15T00:54:05Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  session_id: session-release-0.1.1-20261014
  accomplished:
    - Checked npm latest 0.1.0 and assigned unused public version 0.1.1.
    - Aligned the package README, install guidance, site examples, and xFacts labels.
    - Changed the site install-command check to read the authoritative release version.
    - Verified all twelve fixture cases, the four expected baseline failures,
      and the packed 0.1.1 installer for all twelve host presets.
    - Recorded the manual release contract and LocalHelm's private-root skip.
    - Passed full release verification, twelve desktop/mobile QA states,
      label freshness/audit, and the exact publication command's dry-run.
    - Corrected the older site-Ship ledger record's schema fields; ledger check has zero errors.
  left_off: Verified 0.1.1 tarball and release documentation are ready for the
    owner to publish after the prepared-release commit.
    No publication, push, deployment, personal install update, or phase transition.
  next_steps:
    - Owner publishes the verified 0.1.1 tarball using docs/RELEASE_0.1.1.md.
    - Verify registry version, README, integrity, and fresh installation after publication.
    - Address generated-package support in LocalHelm as a separate implementation.
---

The root harness remains private at 0.1.0-dev. The public release manifest and
tarball are 0.1.1. Site Ship is separate from npm Publish. The completed
Stabilize phase is preserved; this is a bounded release-preparation batch.
