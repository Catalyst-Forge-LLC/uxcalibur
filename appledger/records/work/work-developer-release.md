---
format_version: 0.1.0
id: work-developer-release
kind: work
title: Solid skill, npm distribution, and uxcalibur.dev launch
record_status: active
created_at: 2026-10-06T02:58:17.004Z
updated_at: 2026-10-06T03:30:24.895Z
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
  status: done
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
      status: met
  verification_refs:
    - evidence-developer-release-candidate
    - evidence-developer-launch-live
---

R1–R4 verified and developer delivery published. Owner attaches canonical domain; SaaS deferred.
