# UXcalibur developer site

Content-only FilePress site for **https://uxcalibur.dev**. The engine is the published `getfilepress` **0.1.50**, pinned exactly with this site's own pnpm lockfile. The product method lives at `../../skills/uxcalibur/`; this tree contains the developer website, not an analyzer or service.

## Local use

Use Node 20.19+ or 22.12+ and pnpm 10.30.1. From this directory:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm preview --port 27779
```

`check` validates the content and FilePress's shared Svelte project. `build` produces `build/` and checks the generated page links/anchors, canonical URLs, descriptions, sitemap, feeds, and security headers. `dev` is the optional FilePress design loop; it is not deployed. No runtime app server or model service is required by this static site.

## Content and evidence

- `pages/` — home, install/use, synthetic worked example, detailed-spec mode, method, and contribution.
- `filepress.config.ts` — canonical origin, identity, navigation, footer.
- `theme.css` — restrained editorial/technical theme using FilePress's stable token/class API.
- `static/` — code-native blade artwork and exact copies of the synthetic proof's before/after PNGs.
- `scripts/check-content.mjs` — portable source/build contract and local-link checks.
- `scripts/finalize-build.mjs` — keeps the public sitemap to the six intentional pages; the config redirects unused blog routes and `/home`.
- `scripts/browser-qa.mjs` — rendered Chromium checks and captures using the full repository's pinned Playwright harness/cache.
- `scripts/render-artwork.mjs` — reproducible PNG favicon/social card rasterization from the code-native SVG source, using the same development browser.

The worked example is the actual dated pass at `../../examples/review-inbox/`. K1 is implemented and verified; K2 stays Not started. The images are synthetic, not customer or private app evidence. The example demonstrates an actionable report and reproduced interaction change, not measured user efficacy.

## Rendered QA

In a full checkout, first install the repository's root dependencies and pinned Chromium using its documented `pnpm test:e2e:install`. Then, from this site:

```sh
pnpm build
pnpm qa
```

The QA runner starts an ephemeral local FilePress production preview, checks all six content routes at desktop and mobile sizes, verifies local requests, images, overflow, semantics, focus, and the evidence disclosure, and writes ignored captures/receipt to `.artifacts/qa/`. Visually inspect the saved PNGs before delivery. The browser harness is development-only and borrowed from the parent repository; it is not required to build/deploy this standalone content site.

## Cloudflare Pages handoff

Publish **`build/`** using Wrangler Pages after the parent repository's release checks. This subtree does not create Cloudflare projects, upload content, or attach a custom domain.

For a Git-connected Pages build, select framework **None**, root directory `sites/uxcalibur-dev`, build command `pnpm install --frozen-lockfile && pnpm build`, output `build`, and a current supported Node LTS. For a CLI upload, run Wrangler against this site's generated `build/` and the confirmed Pages project name. The owner attaches `uxcalibur.dev` after deployment; canonical URLs remain `https://uxcalibur.dev` even when validating the Pages preview origin.

The default FilePress `_headers` are retained. Verify the live home, install/example routes, RSS, six-page sitemap, 404, redirects, and response headers after upload. Pages preview success does not establish custom-domain DNS or TLS readiness. Local FilePress preview does not apply hosting `_redirects`.

## License

UXcalibur source and this site are MIT, copyright Catalyst Forge LLC. FilePress retains its own MIT license in its installed package. See the repository root license for the full UXcalibur terms.
