# UXcalibur 0.1.1 release preparation

> Historical preparation evidence. npm received a different root package without the executable. Use [the repair release](RELEASE_0.1.2.md) and current [release runbook](RELEASING.md).

Prepared on 2026-10-14 for owner publication. npm was checked during preparation:
its latest version was 0.1.0, and 0.1.1 was unused. This document does not claim
0.1.1 has been published. No publication, Git push, site deployment, or personal
skill update is included in this preparation.

## What the package contains

- The revised expert UX method: shape, refine, hone; broad app assessment,
  coherent design direction, and authorized implementation.
- The current npm README with the app-transformation proposition and 0.1.1 commands.
- Twelve host presets, including Grok/xAI and a shared Agent Skills directory.
- MIT license and version-aligned SkillFacts metadata.

The private fixture, ledger, developer site, dependencies, and caches are excluded
from the package. Installer placement and backup behavior are verified in
isolated directories; model invocation has been exercised in Codex, with other
hosts' model execution unverified.

## Version and release target

The authoritative public version is `packages/uxcalibur/release.json`: **0.1.1**.
The root `package.json` is the private development harness; its `0.1.0-dev`
version is intentionally separate. Site package versions are also independent.
See [the package release contract](RELEASING.md#package-release-contract).

The npm README comes from `packages/uxcalibur/README.md`. `pnpm package:build`
creates `.artifacts/npm-package/`. `pnpm package:check` creates and installs the
exact `.artifacts/uxcalibur-0.1.1.tgz`, verifies its contents, and records its
SHA-256 and checks in `.artifacts/package-verification.json`.

## Owner publication

From `Z:/workspace/uxcalibur`, publish the verified archive:

```powershell
pnpm publish .artifacts/uxcalibur-0.1.1.tgz --access public --no-git-checks
```

This command applies the npm publication; run it when you intend to publish.
If the source changes, rerun `pnpm verify:release` and use the rebuilt archive.
After publication, check npm's version, README, and archive integrity, then test
a fresh registry install. Push/tag and site deployment remain separate actions.

## LocalHelm limitation

The enrolled `uxcalibur` row points to the repository root. LocalHelm sees its
private harness and its read-only Publish plan skips with reason `private`.
It does not discover the generated public package; its quiet row is not a
registry-freshness check. Generated release-target support remains pending.
Use the archive command above rather than LocalHelm Publish for this layout.
Do not make the harness public or enroll disposable build output as a workaround.

## Verification

- `pnpm verify:release` passed: seven matching skill files and three resolved
  references, TypeScript/build, twelve rendered fixture cases, four expected
  baseline continuity failures, packed installer checks, and site checks/build.
- Packed verification passed for all twelve host presets, including placement,
  listing, repeat installs, managed upgrades, local-edit refusal, preserved
  backups, custom/nested roots, XDG paths, links, and invalid arguments.
- `pnpm --dir sites/uxcalibur-dev qa` passed twelve page/viewport states at
  1440px and 390px, plus disclosure and JavaScript-disabled checks. Installation
  screenshots were inspected; install commands show 0.1.1 and fit the layout.
- The exact tarball publish command passed with `--dry-run`; this did not
  publish or establish that a future authenticated publication will succeed.
- AppFacts fingerprint freshness and xFacts label audit passed. AppLedger check
  passed with zero errors; historical evidence freshness and the unsupported
  native-label binding remain warnings. The older site-Ship decision's schema
  fields were corrected while preserving its accepted meaning.

Verified archive: `.artifacts/uxcalibur-0.1.1.tgz` (twelve intentional files).
SHA-256:

```text
61e95c0a12f673f347cc170ef94def4abd12f01f3c31e712d93d059463298c8c
```

Local receipts/logs: `.artifacts/package-verification.json`,
`.artifacts/verify-release-0.1.1.log`, `.artifacts/publish-dry-run-0.1.1.log`,
`.artifacts/localhelm-release-plan-0.1.1.json`, and
`sites/uxcalibur-dev/.artifacts/qa/`. These are ignored verification artifacts,
not npm contents. Existing FilePress/Vite tool warnings do not block the passing
build and rendered checks. Publication and registry verification remain pending.
