---
format_version: 0.1.0
id: evidence-release-0.1.1-20261014
kind: evidence
title: UXcalibur 0.1.1 package preparation checks
record_status: active
created_at: 2026-10-15T00:45:34Z
updated_at: 2026-10-15T00:54:05Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  evidence_kind: test_run
  repository_id: repo-home
  source: packages/uxcalibur/release.json
  digest: c0aeb19a859a4f2b95f49810b1f6cccab8bb7a0417c844bb592da66ceb59450f
  checked_at: 2026-10-15T00:54:05Z
  result: The release manifest and verified tarball are 0.1.1. The package has
    twelve intentional files and no runtime dependencies. Packed installation,
    update, backup, refusal, and path checks pass for twelve host presets.
    Twelve rendered fixture cases pass; the baseline fails at the four intended
    continuity assertions. Full release verification, site content/build,
    twelve desktop/mobile page states, label freshness/audit, and exact tarball
    publication dry-run passed. AppLedger check passed with zero errors.
  limitations:
    - Prepared locally; no npm publication, Git push, or site deployment.
    - Installer checks do not establish model execution or UX quality in every host.
    - LocalHelm's generated-package support is pending; its enrolled root skips as private.
---

Final verified archive SHA-256:
`61e95c0a12f673f347cc170ef94def4abd12f01f3c31e712d93d059463298c8c`.
The final archive receipt is `.artifacts/package-verification.json`; the full
verification and remaining publication boundary are recorded in
`docs/RELEASE_0.1.1.md`. Source and browser install-command checks now read the
authoritative release version instead of pinning the old 0.1.0 literal.

Installation screenshots were inspected at 1440px and 390px. The site builds
with six routes, valid local links/anchors, canonical metadata, feed, sitemap,
and headers. Existing FilePress/Vite tool warnings remain; rendered QA reports
no failed resources, page errors, or document overflow. AppLedger's older
site-Ship decision was normalized to its schema without changing the accepted
choice; historical freshness/native-binding warnings remain.

The npm registry showed latest 0.1.0 and no 0.1.1 during preparation. LocalHelm's
read-only Publish plan returned `skip: private`, accurately reflecting its root
manifest but not the generated release. See `.artifacts/localhelm-release-plan-0.1.1.json`.
