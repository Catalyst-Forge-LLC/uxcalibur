---
format_version: 0.1.0
id: decision-localhelm-site-ship
kind: decision
title: Expose the existing Pages deployment through the site ship script
record_status: active
created_at: 2026-10-06T12:35:00Z
updated_at: 2026-10-06T12:35:00Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  status: accepted
  choice: Add a site-local ship script that builds and validates the site before calling the existing root deploy:site command.
  rationale: LocalHelm/FilePress detects scripts.ship, while UXcalibur only exposed deploy:site at the root. The registered nested site path and name already work.
  authority: Owner reports missing Ship and Today Land actions and asks to resolve the integration.
---

Preserve the confirmed Cloudflare Pages project uxcalibur-dev and branch main. No remote action or phase transition is included.
