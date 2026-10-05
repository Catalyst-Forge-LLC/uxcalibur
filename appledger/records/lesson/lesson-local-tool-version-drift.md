---
format_version: 0.1.0
id: lesson-local-tool-version-drift
kind: lesson
title: Installed setup commands lagged local workspace tools
record_status: active
created_at: 2026-10-05T20:53:56Z
updated_at: 2026-10-05T20:53:56Z
recorded_by:
  id: codex-kickoff
  type: agent
visibility: internal
relations: []
claims: []
data:
  context: UXcalibur kickoff on 2026-10-05.
  problem: Global commands reported forgetrail 0.5.4 and appledger 0.1.4, while
    current local sources/tools reported 0.5.9 and 0.2.1.
  resolution: Invoked the current workspace ForgeTrail installer and AppLedger
    dist CLI directly. Did not change global installations or add product
    dependencies.
  limits: This observation concerns this workstation and kickoff only. No global
    version policy or package update was performed.
  generalization_status: observed
---

Check which executable a setup command resolves before relying on current startup guidance.
