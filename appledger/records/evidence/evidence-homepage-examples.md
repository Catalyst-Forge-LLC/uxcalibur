---
format_version: 0.1.0
id: evidence-homepage-examples
kind: evidence
title: Familiar homepage before-and-after examples checked
record_status: active
created_at: 2026-10-06T10:44:44.828Z
updated_at: 2026-10-06T10:44:44.828Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  evidence_kind: test_run
  repository_id: repo-home
  source: sites/uxcalibur-dev/pages/home.md
  digest: 0ef20da04a0be251e58f518f2adb0030bb502e14b66caade371e7af5c810618e
  checked_at: 2026-10-06T10:44:44.828Z
  result: Replaced scroll offsets/focus identifiers on the homepage with
    illustrative navigation, visual-hierarchy, and helpful-error examples.
    FilePress production/content/link/metadata checks and 12 desktop/mobile QA
    states pass. Manually inspected the examples at 1440, 768, and 390px;
    illustration alignment corrected and final renders inspected.
  limitations:
    - Illustrative designs, not customer case studies or measured gains.
    - Chromium only; no screen-reader or real-device validation.
    - Local preview updated; no public deployment or package change.
---

Owner feedback: the desktop list-scroll example is too technical and specific for the homepage; use immediately understandable and desirable examples. Existing verified proof remains linked at /example. Receipts: sites/uxcalibur-dev/.artifacts/qa/receipt.json and .artifacts/homepage-examples/.
