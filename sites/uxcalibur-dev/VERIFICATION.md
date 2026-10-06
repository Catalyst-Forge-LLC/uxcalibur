# Developer site verification

Verified locally on 2026-10-05 (America/New_York). This is a static FilePress developer website; deployment and custom-domain readiness are separate launch checks.

## Final source and build

From this directory, all commands completed successfully:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm qa
```

The site has its own lockfile and exact published `getfilepress` **0.1.50** dependency. Node **24.17.0**, pnpm **10.30.1**, resolved Vite **8.3.2**, and Chromium **153.0.8010.12** were used. FilePress's Svelte check reported **0 errors and 0 warnings**. The production build emits `build/`, canonical `https://uxcalibur.dev` metadata, RSS, sitemap, robots, custom 404, and default FilePress security headers.

The saved source/build checker validates all six authored pages, installation commands and destinations, proof status/limits, exact engine pin, built local links and anchors, page metadata, sitemap/feed presence, and security-header presence.

## Rendered checks and visual review

The QA runner used the production output served by FilePress's static preview on an ephemeral loopback port. It passed **12 page states**: home, install, example, spec, method, and contribute at **1440×1000** and **390×844**. It checked response status, image decoding, one primary heading, canonical URLs, document overflow, visible first-link keyboard focus, and browser/resource errors. It also verified the narrow evidence disclosure, install content with JavaScript disabled, custom 404, and RSS/sitemap/robots responses.

All 14 full-page/disclosure captures from the first complete pass were visually inspected. The review found heading links inheriting CTA typography on two home sections; the theme now explicitly preserves heading typography. The final pass was rerun after that repair, larger mobile table/code type, a 44px GitHub target, and final PNG/SVG favicon/social assets. Final home desktop/mobile and install/example mobile captures were reinspected. The code-native social PNG was inspected separately.

The final copy review changed the hero to “Help people accomplish more.”, retained “Make the result better, too”, and made Node.js 20.19+ explicit on the installation page. The social card was updated to match. Build and all 12 rendered page states passed again. Home wrapping was visually inspected at desktop and 390px: two lines on desktop and three readable lines on narrow, with no overflow. The updated social card was inspected too.

The ignored receipt and captures are in `.artifacts/qa/`; the runner is retained at `scripts/browser-qa.mjs`. The PNG evidence under `static/evidence/` is copied from the actual synthetic report's preserved before/after captures. No private/customer app evidence is used. K1 stays Verified and K2 stays Not started.

## Engine observations and boundaries

FilePress emits both `/favicon.png` and `/favicon.svg`; both site assets are supplied. The site-owned link checker caught missing favicon references before delivery. No FilePress source was changed.

The published engine prints nonblocking Vite warnings about extensionless imports and future native config loading, Node DEP0190 during a child process invocation, and the expected SvelteKit root override. Its check and build pass. The ephemeral preview prints port `0` when asked to choose a free port; the QA runner uses the server's actual assigned address and completes successfully.

FilePress also emits the duplicate `/home` and unused blog routes in its default sitemap. The site config redirects those aliases and `scripts/finalize-build.mjs` retains only the six intentional content pages in the published sitemap. The built-file checker verifies that six-entry sitemap and all four redirect rules. Local static preview does not apply hosting `_redirects`; live redirects must be checked during deployment.

The generated `.filepress/` directory is ignored. `critical-theme.generated.ts`, `path-mounts.json`, and `redirects.txt` are engine intermediates; authored redirect rules remain in `filepress.config.ts`. Those intermediates and the committed package/lock/config files were checked for local machine paths; none were found.

This establishes these static page and Chromium behaviors, not a complete accessibility audit, screen-reader or real-touch exercise, other browser engines, measured customer efficacy, or actual operation in all three coding-agent runtimes. External source/npm links, release installation, Cloudflare upload, live response headers, and custom-domain DNS/TLS belong to the parent launch verification. Nothing in this subtree publishes, creates Cloudflare resources, or changes domain configuration.

## Security dependency follow-up

The root updated deployment Wrangler to 4.147.0 and the site applies cookie 0.7.2 through a narrow override. FilePress and SvelteKit pins remain unchanged. Production build/content checks and 12-state QA pass again; the npm tarball is unchanged. Root dependency audit is clear; site audit retains one unpatched moderate sprintf-js build CLI advisory, detailed in ../../docs/RELEASE_VERIFICATION.md. One diagnostic config-load transport timeout was observed; the subsequent build verifies the intended custom canonical/pages/links.
