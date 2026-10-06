---
format_version: 0.1.0
id: session-localhelm-site-ship-20261006
kind: session
title: Restore LocalHelm Ship and Today Land for the developer site
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
  session_id: session-localhelm-site-ship-20261006
  accomplished:
    - Added scripts.ship in sites/uxcalibur-dev; builds and validates before invoking the existing root deploy:site command.
    - Verified FilePress discovers the nested extra site, selects its ship directory, and computes a deployment fingerprint.
    - Verified LocalHelm siteNeedsLand returns true for the site with its new Ship capability.
    - Site production build, six-page content checks, local links/anchors, metadata, feed, sitemap, and security-header checks passed.
  left_off: Local integration fixed; no deployment, push, publication, or phase transition was performed.
  next_steps:
    - Refresh LocalHelm Sites/Today and review the named Ship or Land plan when deployment is intended.
---

The site name suffix and sites/ nesting were not the cause. Both discovery paths worked; the deployment script was only named deploy:site at the root, so FilePress could not advertise Ship and Today omitted an otherwise current site without a shipable fingerprint.
