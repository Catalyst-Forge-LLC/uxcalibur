# Executable repair release

Candidate: **uxcalibur 0.1.2**. Prepared locally; publication, push, and deployment are separate actions.

## What went wrong

The registry's `0.1.1` archive was inspected on 2026-10-15 UTC. It contains 184 files from the development checkout and its manifest has no `bin`. Consequently `npx uxcalibur@0.1.1 install …` cannot find an executable. The previously verified twelve-file installer archive was a different artifact and was not the archive published to npm. The split between the enrolled root and generated release package made the wrong publication possible.

Published archive: `https://registry.npmjs.org/uxcalibur/-/uxcalibur-0.1.1.tgz`, npm SHA-1 `f61fdb83b2cd54d925d83bd714d65c136ed6ffff`. Inspection found repository documents, fixture source, and site source in that archive; those are excluded from the replacement. npm already has this version, so the repair uses a new version.

## Corrected contract

| Field | Value |
| --- | --- |
| Package directory | Repository root, the existing LocalHelm enrollment |
| Manifest and version | Root `package.json` |
| README | Root `README.md`, shared by GitHub and npm |
| Executable | `uxcalibur` → `dist/bin/uxcalibur.js` |
| Build | `pnpm package:build`; automatic through `prepack` |
| Pack/check | `pnpm package:check` |
| Public contents | Manifest, README, license, compiled CLI/library, seven skill files: twelve files total |
| Verified archive and receipt | `.artifacts/uxcalibur-0.1.2.tgz`, `.artifacts/package-verification.json` |

The old release manifest was removed to leave one version source. Development tools remain devDependencies; consumers of the installer need no runtime dependencies. The README now leads with the product, installation, and practical use instead of release bookkeeping.

## Verification and publication

The package check packs the enrolled root with its lifecycle build, compares the exact file list and README/skill source bytes, installs the archive into an isolated project, resolves the `uxcalibur` executable through the package manager, and checks all twelve host presets plus update/backup/error paths. Fixture/baseline and site checks are separate supporting checks; they do not demonstrate other hosts' model invocation.

After the source is committed, refresh UXcalibur in LocalHelm. Expect local `0.1.2` versus npm `0.1.1`, with Publish targeting `uxcalibur@0.1.2` from `uxcalibur`. Read the plan, including any Git push step, before applying it. The [release runbook](RELEASING.md) describes the normal root and verified-tarball alternatives.

After publication, inspect the registry archive's executable and whitelist, run `npx uxcalibur@0.1.2 --version` in an isolated directory, and install the skill into that directory. Check npm's README against the root README. Do not treat a version number alone as proof the package is usable. Registry deprecation of broken `0.1.1` is a separate registry change; it has not been performed by this preparation.
