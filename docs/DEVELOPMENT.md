# Develop UXcalibur

Use Node.js 22.12+, pnpm 10, and the pinned Chromium test browser. The released installer supports Node.js 20.19+.

```sh
pnpm install --frozen-lockfile
pnpm test:e2e:install
pnpm dev
```

The synthetic review inbox runs at <http://127.0.0.1:5191>. Windows wrappers are `setup.bat`, `run.bat`, and `status.bat`; macOS/Linux equivalents are provided. Windows/Chromium execution is verified.

## Source and checks

| Area | Source | Check |
| --- | --- | --- |
| Agent method | `skills/uxcalibur/` | `pnpm skill:check` |
| Installer | `packages/uxcalibur/src/` | `pnpm package:check` |
| Synthetic app | `fixtures/review-inbox/` | `pnpm verify` |
| FilePress site | `sites/uxcalibur-dev/` | `pnpm site:check` |

`pnpm package:build` compiles the CLI and copies the skill into `dist/`. `prepack` runs that build automatically. The root `package.json` owns the public version, executable, and file allowlist; the root README is also npm's README. There is no second generated release manifest.

`pnpm package:check` packs this root, checks the exact allowed files, installs that archive, exercises package-manager executable resolution, and verifies all twelve host presets plus update, backup, and error behavior. It writes the archive and verification receipt under `.artifacts/`.

`pnpm verify` validates an isolated skill copy, checks types, builds the fixture, runs twelve rendered Chromium checks, and replays the preserved baseline against four continuity checks. Those four must fail at the intended assertion. Each run owns an isolated server and port. Git and the baseline commit must be available. See the [fixture contract](../fixtures/review-inbox/README.md), [report](../examples/review-inbox/report.md), and [verification](../examples/review-inbox/verification.md).

The implemented fixture change preserves the originating row, focus, query, and scroll position on return. Keeping return visible during long reading remains proposed. This is interaction proof, not a measured customer outcome.

Install the site's dependencies separately with `pnpm --dir sites/uxcalibur-dev install --frozen-lockfile`. `pnpm verify:release` covers the method, proof, packed installer, and site. Run `pnpm --dir sites/uxcalibur-dev qa` for desktop and narrow browser checks.

Caches, generated output, and temporary skill copies stay out of Git. Keep private app evidence out of public examples and packages.
