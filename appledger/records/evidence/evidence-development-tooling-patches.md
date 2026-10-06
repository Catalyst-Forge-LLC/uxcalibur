---
format_version: 0.1.0
id: evidence-development-tooling-patches
kind: evidence
title: Patched development tooling and refreshed live deployment verified
record_status: active
created_at: 2026-10-06T03:41:26.584Z
updated_at: 2026-10-06T03:41:26.584Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  evidence_kind: test_run
  repository_id: repo-home
  source: docs/RELEASE_VERIFICATION.md
  digest: adb4db570d6ad59ffcd9162538202ad08cec4041ef3e3b5532f38882cd8e0153
  checked_at: 2026-10-06T03:41:26.584Z
  result: Root audit zero; site one moderate and no high/critical advisories. Full
    release gate and 12-state site QA pass, published tarball unchanged,
    refreshed Wrangler4.147 Pages deployment passes 16 HTTP/resource/redirect
    and 12 live browser checks.
  limitations:
    - One upstream sprintf-js build CLI advisory has no patched release;
      documented source-based scope assessment.
    - Owner custom-domain attachment and DNS/TLS checks remain pending.
---

Security fixes are development-only and do not change the distributed skill or installer. Raw receipts remain ignored.
