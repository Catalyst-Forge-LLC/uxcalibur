# Release UXcalibur

The root package is a private developer harness. Publish only the generated, verified skill package. The developer checkout/deployment requires Node 22.12+ and pnpm 10; the released installer supports Node 20.19+. Windows execution is verified. No runtime dependency is needed by the installer.

## Package release contract

| Field | Source / target |
| --- | --- |
| Public package | `uxcalibur` |
| Checked-in release sources | `packages/uxcalibur/` and `skills/uxcalibur/` |
| Authoritative version and manifest | `packages/uxcalibur/release.json` |
| npm README source | `packages/uxcalibur/README.md` |
| Build | `pnpm package:build` assembles `.artifacts/npm-package/` |
| Pack and verify | `pnpm package:check` creates `.artifacts/uxcalibur-VERSION.tgz` and checks its installed contents |
| Publish target | The verified `.artifacts/uxcalibur-VERSION.tgz`, never the root harness |

LocalHelm currently reads the enrolled repository root's `package.json`, which
is deliberately private. Its read-only Publish plan skips UXcalibur as `private`;
it does not discover this generated package or its release version. Generated
release-target support in LocalHelm remains pending. Use the explicit tarball
release below until that support is implemented and verified. Do not remove
`private` from the harness or enroll disposable `.artifacts` output as a workaround.
Site Ship and personal skill updates do not publish the npm package.

For the current version and ready-to-run owner command, see [0.1.1 release preparation](RELEASE_0.1.1.md).

## Prepare and release

1. Update the version in `packages/uxcalibur/release.json`, installation examples in package/site docs, and any changed skill instructions. Add dependencies with pnpm. Keep skill source under `skills/uxcalibur`.
2. Install root and site dependencies with `pnpm install --frozen-lockfile` and `pnpm --dir sites/uxcalibur-dev install --frozen-lockfile`. Install the pinned browser with `pnpm test:e2e:install` when needed.
3. Run `pnpm verify:release`. Run `pnpm --dir sites/uxcalibur-dev qa` for saved desktop/narrow browser checks and inspect screenshots. Check the current independent review, private validation limits, and public contents.
4. Commit the verified source and record the release commit. `pnpm package:check` produces `.artifacts/uxcalibur-VERSION.tgz` and `.artifacts/package-verification.json`, including its SHA-256. Its exact allowed file list excludes fixtures, ledger, caches, and customer evidence. Historical fixture proof receipts remain tied to their original source version.
5. With publication authorization and npm authentication, publish the verified tarball with `pnpm publish .artifacts/uxcalibur-VERSION.tgz --access public --no-git-checks`. Confirm the npm version and integrity, then install from the registry into an isolated workspace and compare the resulting skill/installer.
6. With GitHub authorization, verify the exact remote and intended visibility, push the commit and release tag. Current launch authorization explicitly includes a public repository.
7. Verify Wrangler identity and existing Pages project before deploying. Project: `uxcalibur-dev`, production branch `main`. From the root run `pnpm deploy:site --commit-hash RELEASE_SHA --commit-dirty=false`. This invokes the project-local Wrangler directly and avoids Windows executable-shim discovery issues. No provider or account change is implicit.
8. Check the Pages origin's HTML, static assets, feed, sitemap, headers, narrow/desktop rendering, and navigation. The owner connects `uxcalibur.dev` in Cloudflare after publication; then repeat live checks on the canonical domain.

The site is static FilePress content. It uses `getfilepress` 0.1.50; deployment uses Wrangler 4.147.0. The site pins cookie 0.7.2 through a narrow override for an upstream security fix. SaaS and service mechanics remain outside this release. LocalHelm raw reports/screenshots are ignored under `.artifacts/localhelm-validation` and must never be included in the public site, npm tarball, or Git history. Public examples use the synthetic fixture.

The installer detects local modifications and requires `--force` before replacing them. Backups remain outside recognized host skill-discovery roots. Preserve its printed backup path when upgrading a personal copy. Legacy Codex installs can be updated with an explicit `--target`; avoid introducing a second copy under a new discovery path.

On this Windows workstation, an inert system32 file shadows bare `npx`. The release was tested with the actual Node.js executable, for example `& "C:\Program Files\nodejs\npx.cmd" --yes uxcalibur@0.1.0 install --agent codex`. This is a local shell-path issue; the system file and PATH were not changed. Set `PLAYWRIGHT_BROWSERS_PATH` before importing Playwright when reusing the workspace browser cache.
