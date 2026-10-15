---
format_version: 0.1.0
id: session-executable-repair-20261014
kind: session
title: Repair npm executable publication and unify the README
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
  session_id: session-executable-repair-20261014
  accomplished:
    - Inspected registry metadata and the published archive; the wrong development package has no executable.
    - Made root package.json the public manifest and version with a prepack build and explicit file allowlist.
    - Packed that exact root, installed the archive, and verified executable resolution and twelve installation presets.
    - Unified GitHub and npm README around the product, installation, use, and shape/refine/hone.
    - Moved development/release detail into dedicated guides and aligned site checks and labels.
  left_off: Corrected 0.1.2 candidate prepared locally. No publication, registry change, push, deployment, installed-skill update, or phase transition.
  next_steps:
    - Publish the corrected candidate through the named LocalHelm plan or release runbook.
    - Check registry archive, executable installation, and README after publication.
    - Continue the broader LocalHelm review and recovery improvements.
---
