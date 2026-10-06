---
format_version: 0.1.0
id: work-developer-release
kind: work
title: Solid skill, npm distribution, and uxcalibur.dev launch
record_status: active
created_at: 2026-10-06T02:58:17.004Z
updated_at: 2026-10-06T03:23:46.040Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations:
  - type: depends_on
    target: decision-developer-launch-priority
  - type: affects
    target: app-b7a2d51c-16c3-463f-b3b8-434a18bd2b41
claims: []
data:
  status: in_progress
  objective: Prepare and verify the developer delivery, package the skill for npm
    as uxcalibur, build uxcalibur.dev with FilePress, and complete the requested
    launch using resolved release choices.
  intake: task
  acceptance_criteria:
    - id: R1
      text: Selected-host installation and real method outputs verified with
        outcome/focus/exclusions
      status: met
    - id: R2
      text: Intentional licensed npm package verified through packed install/update
      status: met
    - id: R3
      text: Rendered FilePress .dev site accurately documents and demonstrates
        released delivery
      status: met
    - id: R4
      text: Requested npm/site launch verified and evidence saved
      status: pending
  verification_refs:
    - evidence-developer-release-candidate
---

R1–R3 verified; R4 publication/live verification in progress. Custom domain attachment remains the owner step. SaaS excluded.
