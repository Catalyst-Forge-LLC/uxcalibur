---
format_version: 0.1.0
id: decision-patched-development-tooling
kind: decision
title: "D10: Patch development tooling after observed dependency alerts"
record_status: active
created_at: 2026-10-06T03:38:21.678Z
updated_at: 2026-10-06T03:38:21.678Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  status: accepted
  choice: Pin current patched Wrangler, narrow site cookie override, and truthful
    unpatched build-CLI advisory; keep npm artifact unchanged.
  rationale: Public GitHub scan reported development advisories with available
    compatible fixes; address them without changing the skill runtime or
    FilePress engine.
  authority: Routine security correction within authorized solid developer
    delivery; actual dependency audit and independent review.
  alternatives:
    - Retain vulnerable tooling or change the FilePress/SvelteKit major version.
---

Root toolchain requires Node22.12; installed package remains Node20.19. No SaaS or application redesign introduced.
