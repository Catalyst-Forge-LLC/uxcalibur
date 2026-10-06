# Developer release verification

Published: **uxcalibur 0.1.0**, MIT. npm, public source and Pages origin are live and verified.

The authored skill is six files, including the MIT notice, with three resolving method references. The npm tarball contains exactly 11 files: package metadata, README/license, two compiled installer modules, and the six authored skill files. It has no dependencies or lifecycle scripts.

`pnpm package:check` installs the actual tarball through pnpm and exercises its executable. It verifies personal and project layouts for Codex/Claude Code/Cursor, paths with spaces, repeated installation, managed upgrade, unmanaged/edited-copy refusal, forced preservation, nested-target backups outside discovery, unusual filenames, symlink refusal, and invalid options. Independent review also exercises rollback after a staged rename failure and the Windows package-manager executable shim.

`pnpm verify` passes fresh-copy/reference checks, strict types, production fixture build, 12 current Chromium cases, and four intended continuity failures against pinned commit `e9e9b3c53dfca371de1b4ed52094fe2cefde4810`. These demonstrate behavior for the synthetic task; customer outcome improvement is not measured.

The existing personal Codex installation is updated with a preserved backup. Its runtime use has been exercised. Claude Code and Cursor filesystem installations are verified; their actual model invocation is not independently tested. Linux/macOS installer execution is not claimed from Windows checks.

Second method validation uses read-only LocalHelm source and rendered UI for a bounded operator flow. Focused and explicit detailed-spec reports remain private in `.artifacts/localhelm-validation`; public evidence uses the synthetic review inbox. Four evidence-backed cuts map to four flow/packet contracts and 18 acceptance cases, all Not started/Not run. Artifact link, contract, status, and ignored-destination checks pass. No LocalHelm changes, write actions, or app-side model requests occurred. This validates report contracts and scope discipline, not the effect of unimplemented recommendations.

Two demonstrated method clarifications are incorporated: check plan/review entry-point effects before read-only interaction, and record/minimize private evidence with an explicit destination. The final distributed method distinguishes those checks from repeated approval for already authorized actions.

FilePress desktop/narrow rendering, links/resources, keyboard focus, no-JavaScript content, canonical metadata, 404, and feeds are checked separately. Live deployment results and the remaining domain step are recorded below.

Machine receipts are ignored under `.artifacts/`; selected public summaries are retained here. The first fixture proof keeps its historical five-file skill receipts; the later MIT notice and installer distribution do not rewrite that history.

Final reviewed candidate tarball SHA-256: `d8da5743b545034c7b86fe4f99ceaade97cbca3f1ccfa24360cbd5461ed340b2`. `pnpm verify:release` passes; the subsequent method wording corrections pass fresh-copy/reference validation, the skill-creator validator, and packed install/update checks. Site QA covers 12 desktop/narrow states. Publication and live checks are complete below.

## Public launch

Verified 2026-10-06T03:30:24.895Z:

- [npm uxcalibur 0.1.0](https://www.npmjs.com/package/uxcalibur/v/0.1.0): registry metadata and downloaded tarball match the verified candidate byte-for-byte, including SHA-512 integrity and SHA-256 `d8da5743b545034c7b86fe4f99ceaade97cbca3f1ccfa24360cbd5461ed340b2`. Actual npx installs from the registry into an isolated project succeed for all three hosts and match all six source files.
- [Public source](https://github.com/Catalyst-Forge-LLC/uxcalibur) and [v0.1.0](https://github.com/Catalyst-Forge-LLC/uxcalibur/tree/v0.1.0): release commit `306e996283828b275d9417028267c37038311b24`. Anonymous tagged-source retrieval returns the exact SKILL.md. Committed history and staged release contents were scanned for common secret token/key patterns; no matches. Ignored private validation data was excluded.
- [Cloudflare Pages](https://uxcalibur-dev.pages.dev), immutable deployment [0997a66b](https://0997a66b.uxcalibur-dev.pages.dev): Wrangler 4.120.1 uploaded 76 files plus headers/redirects to the locally verified account, project `uxcalibur-dev`, production branch `main`. Six content pages, resources/feed/sitemap/robots, security headers, four redirects and custom 404 pass live checks. Twelve desktop/narrow browser states load without failed resources, errors or horizontal overflow; canonical metadata points to uxcalibur.dev.

The owner must attach **uxcalibur.dev** to the Pages project. The custom domain is not yet reachable; DNS/TLS checks on that domain remain pending owner setup. SaaS remains deferred.

The existing personal Codex installation matches all six final source files; prior versions remain backed up outside skill discovery. Actual Claude Code/Cursor model invocation, other browser engines, screen readers, touch, and Linux/macOS execution remain unverified.

Local launch observations: the bare Windows `npx` command resolved to an inert system32 file, so registry smoke tests used the actual Node.js `npx.cmd` executable. No system PATH/file was changed. Playwright's browser cache environment must be set before importing Playwright; the corrected live run uses the existing pinned workspace browser. These environment observations do not alter the published package.

## Development dependency follow-up

GitHub's post-launch scan identified development-tool advisories. The private root now pins Wrangler **4.147.0**, whose Miniflare resolves patched **undici 7.29.1** and **sharp 0.35.4**. The site's narrow override resolves **cookie 0.7.2**, retaining FilePress 0.1.50 and SvelteKit 2.70.3. These are compatible tooling/security updates, independently reviewed; the public npm tarball remains byte-for-byte unchanged. The developer checkout now requires Node 22.12+, while the released installer retains Node 20.19+.

Current pnpm audits: **root 0 advisories; site 1 moderate, 0 high/critical**. The remaining [sprintf-js advisory](https://github.com/advisories/GHSA-hp3w-g68c-fv3c) has no patched release. It is in the gray-matter → js-yaml → argparse build CLI chain, excluded from the npm skill package and served static output. Source inspection indicates the formatter is imported by js-yaml's separate CLI, rather than its YAML library used by FilePress; this is a scoped inference, not a blanket guarantee for arbitrary CLI use. Build only trusted repository content.

`pnpm verify:release` passes after these changes, including the 12 fixture checks, baseline proof, identical tarball install checks, Svelte diagnostics and six-page static build. Site QA passes all 12 desktop/narrow states. One check-time Vite module transport timeout caused FilePress to continue its diagnostic check with defaults; the subsequent production build and site-specific canonical/page/link checks loaded and verified the intended configuration. The patched build is being refreshed on Pages, followed by live verification.
