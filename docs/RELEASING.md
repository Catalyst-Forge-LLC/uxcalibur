# Release UXcalibur

The root package is a private developer harness. Publish only the generated, verified skill package. Node 20.19+ and pnpm 10 are required; Windows execution is verified. No runtime dependency is needed by the installer.

1. Update the version in `packages/uxcalibur/release.json`, installation examples in package/site docs, and any changed skill instructions. Add dependencies with pnpm. Keep skill source under `skills/uxcalibur`.
2. Install root and site dependencies with `pnpm install --frozen-lockfile` and `pnpm --dir sites/uxcalibur-dev install --frozen-lockfile`. Install the pinned browser with `pnpm test:e2e:install` when needed.
3. Run `pnpm verify:release`. Run `pnpm --dir sites/uxcalibur-dev qa` for saved desktop/narrow browser checks and inspect screenshots. Check the current independent review, private validation limits, and public contents.
4. Commit the verified source and record the release commit. `pnpm package:check` produces `.artifacts/uxcalibur-VERSION.tgz` and `.artifacts/package-verification.json`, including its SHA-256. Its exact allowed file list excludes fixtures, ledger, caches, and customer evidence. Historical fixture proof receipts remain tied to their original source version.
5. With publication authorization and npm authentication, publish the verified tarball with `pnpm publish .artifacts/uxcalibur-VERSION.tgz --access public --no-git-checks`. Confirm the npm version and integrity, then install from the registry into an isolated workspace and compare the resulting skill/installer.
6. With GitHub authorization, verify the exact remote and intended visibility, push the commit and release tag. Current launch authorization explicitly includes a public repository.
7. Verify Wrangler identity and existing Pages project before deploying. Project: `uxcalibur-dev`, production branch `main`. From the root run `pnpm deploy:site --commit-hash RELEASE_SHA --commit-dirty=false`. This invokes the project-local Wrangler directly and avoids Windows executable-shim discovery issues. No provider or account change is implicit.
8. Check the Pages origin's HTML, static assets, feed, sitemap, headers, narrow/desktop rendering, and navigation. The owner connects `uxcalibur.dev` in Cloudflare after publication; then repeat live checks on the canonical domain.

The site is static FilePress content. It uses `getfilepress` 0.1.50; deployment uses Wrangler 4.120.1. SaaS and service mechanics remain outside this release. LocalHelm raw reports/screenshots are ignored under `.artifacts/localhelm-validation` and must never be included in the public site, npm tarball, or Git history. Public examples use the synthetic fixture.

The installer detects local modifications and requires `--force` before replacing them. Backups remain outside recognized host skill-discovery roots. Preserve its printed backup path when upgrading a personal copy. Legacy Codex installs can be updated with an explicit `--target`; avoid introducing a second copy under a new discovery path.

On this Windows workstation, an inert system32 file shadows bare `npx`. The release was tested with the actual Node.js executable, for example `& "C:\Program Files\nodejs\npx.cmd" --yes uxcalibur@0.1.0 install --agent codex`. This is a local shell-path issue; the system file and PATH were not changed. Set `PLAYWRIGHT_BROWSERS_PATH` before importing Playwright when reusing the workspace browser cache.
