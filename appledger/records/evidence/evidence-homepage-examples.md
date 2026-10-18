---
format_version: 0.1.0
id: evidence-homepage-examples
kind: evidence
title: Familiar homepage before-and-after examples checked
record_status: active
created_at: 2026-10-06T10:44:44.828Z
updated_at: 2026-10-18T20:24:58.803Z
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
  digest: df60c239453434d384168e3f371072bf3b064564d65e13dce12d2f25143be95a
  checked_at: 2026-10-18T20:24:58.803Z
  result: The project-screen example now connects an illustrated before state,
    a specific UXcalibur recommendation, and a proposed design once in the hero.
    The distinct navigation and feedback illustrations remain below. The local
    site build passed its content, link, metadata, sitemap, and header checks.
    The revised example was visually inspected at 1265px and in 390px frames
    (375px content width with scrollbars), with no page or example overflow.
    The example action moves focus to the single worked-example figure.
  limitations:
    - Illustrative designs, not customer case studies or measured gains.
    - Chromium only; no screen-reader or real-device validation.
    - Local preview updated; no public deployment or package change.
---

Owner feedback: the desktop list-scroll example is too technical and specific for the homepage; use immediately understandable and desirable examples. Existing verified proof remains linked at /example. Receipts: sites/uxcalibur-dev/.artifacts/qa/receipt.json and .artifacts/homepage-examples/.

2026-10-18 receipts: catalyst-forge/docs/reviews/evidence/shelf-example-rollout-2026-10-18/uxcalibur-desktop.jpg and uxcalibur-390.jpg. The earlier twelve-page-state suite was not repeated for this homepage-only change.
