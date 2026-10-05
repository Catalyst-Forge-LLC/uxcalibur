---
format_version: 0.1.0
id: lesson-preview-process
kind: lesson
title: Own isolated preview lifecycle for repeatable Windows proof
record_status: active
created_at: 2026-10-05T23:25:51.187Z
updated_at: 2026-10-05T23:25:51.187Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  context: UXcalibur Chromium harness on Windows, Node 24.17.0 and Playwright 1.63.0.
  problem: The Playwright-managed Vite preview sometimes remained running after cases
    passed; the next run failed because its fixed port was occupied.
  resolution: Use a direct owned Node/Vite child on an isolated strict port; wait for
    readiness, run the browser suite with an explicit URL, and terminate the owned server
    in finally. The full verifier exits successfully.
  limits: Observed in this environment; other hosts and failure-process cleanup need their
    own evidence.
  generalization_status: observed
---

This is a local tooling observation, not a general Playwright defect claim.
