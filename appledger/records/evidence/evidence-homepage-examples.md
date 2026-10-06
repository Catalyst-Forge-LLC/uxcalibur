---
format_version: 0.1.0
id: evidence-homepage-examples
kind: evidence
title: Familiar homepage before-and-after examples checked
record_status: active
created_at: 2026-10-06T10:44:44.828Z
updated_at: 2026-10-06T11:09:32.078Z
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
  digest: 73c7eb249348069eafb63f7028262409404bf377e07afe881172faffe0ef6663
  checked_at: 2026-10-06T11:09:32.078Z
  result: Replaced scroll offsets/focus identifiers on the homepage with
    illustrative navigation, visual-hierarchy, and helpful-error examples.
    FilePress production/content/link/metadata checks and 12 desktop/mobile QA
    states pass. Manually inspected the examples at 1440, 768, and 390px;
    illustration alignment corrected and final renders inspected. Rechecked
    after the clearer legend and xFacts presentation; the illustrative examples
    remain unchanged.
  limitations:
    - Illustrative designs, not customer case studies or measured gains.
    - Chromium only; no screen-reader or real-device validation.
    - Local preview updated; no public deployment or package change.
---

Owner feedback: the desktop list-scroll example is too technical and specific for the homepage; use immediately understandable and desirable examples. Existing verified proof remains linked at /example. Receipts: sites/uxcalibur-dev/.artifacts/qa/receipt.json and .artifacts/homepage-examples/.
