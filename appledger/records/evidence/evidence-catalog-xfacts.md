---
format_version: 0.1.0
id: evidence-catalog-xfacts
kind: evidence
title: Catalog, source labels, and rendered presentation verified
record_status: active
created_at: 2026-10-06T11:09:32.078Z
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
  source: docs/XFACTS.md
  digest: 95bac2627ef8c14ee1b4258972a0c64ee20e16ea6d3cb6c98fbf55cd7f472f58
  checked_at: 2026-10-06T11:09:32.078Z
  result: Generated and curated AppFacts and SkillFacts with sibling tooling;
    xFacts audit has no findings and AppLedger pinned AppFacts validation
    passes. A fresh seven-file skill copy and twelve-file tarball pass
    installation, update, backup, and error checks for three host layouts.
    FilePress builds and twelve standard rendered page states pass. Additional
    desktop/tablet/mobile checks validate encoded label identity, mirrored URLs,
    full-width story with labels below it, and Catalyst Forge selected catalog
    entry. Catalyst Forge fact/build/draft-exclusion checks pass.
  limitations:
    - Local production builds only; the owner will push/deploy Catalyst Forge.
    - Current source is an unpublished next-release revision; published npm
      0.1.0, live site, and personal skill remain unchanged.
    - Labels validate metadata and structure, not truth, host privacy, review
      quality, or measured user gains.
    - Catalyst Forge reports fourteen pre-existing version warnings for other
      products.
    - Chromium only; no screen-reader or real-device session.
---

Receipts: .artifacts/package-verification.json, .artifacts/xfacts/receipt.json, sites/uxcalibur-dev/.artifacts/qa/receipt.json. Catalyst Forge authoritative sources: src/lib/projects.js and src/lib/product-facts.js; build regenerates tools.json, tools.md, llms.txt, and shelf/feed XML. Local FeatureFacts inventory has no confirmed selection and is ignored.
