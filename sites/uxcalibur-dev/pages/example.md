---
title: Find. Read. Resume.
description: An actual focused UXcalibur pass on a synthetic review inbox, with a ranked report and reproduced before-and-after continuity checks.
order: 2
---

<p class="doc-kicker">Worked example / synthetic review inbox / 2026-10-05</p>

<p class="lead">Search for a note, read its handoff, and return to the same results to continue reviewing. Finding and reading already worked. Returning broke the continuation.</p>

This is an actual agent-produced focused pass, followed by one implemented and verified cut. The records and app are synthetic. The [full report](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/examples/review-inbox/report.md), [invocation](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/examples/review-inbox/invocation.md), and [verification](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/examples/review-inbox/verification.md) retain the detailed evidence and limits.

## A boundary before a recommendation

| Assignment | Scope |
| --- | --- |
| Job | Search **Orchard**; open **Orchard handoff, note-049**; identify the owner/action; return and continue the same review. |
| Observable result | The correct stable ID, same query and result set, useful list position, and keyboard continuation survive return. |
| Focus | Accomplishment and navigation continuity, including keyboard interaction. |
| Exclusions | Visual branding, editing/storage, backend/service features, unrelated surfaces, and whole-app redesign. |
| Evidence | Rendered Chromium behavior at 1280×800 and 390×844, source inspection, screenshots, and recorded focus/history/scroll state. |

The answer in the long note is **Mara; review the inventory on Thursday**. Both duplicate handoff titles have visible stable IDs. The full local search examines all 72 records and returns 24 Orchard matches in fixture order.

## Two warranted cuts

There was no quota for findings. The report ranked two recommendations by their consequence for this specific job.

<div class="finding"><div class="finding-top"><span>K1 / first</span><span class="status">Verified</span></div><h3>Return to the same review anchor.</h3><p><strong>Observed:</strong> app return and browser Back retain the query and 24 results, but reset the list to the top and leave focus on BODY. The originating note is below the viewport.</p><p><strong>Inferred consequence:</strong> the person must find the note again or remember where review stopped; keyboard continuation restarts at Search.</p><p><strong>Contract:</strong> save the query, originating note ID, list scroll, and page scroll on the correct history entry. Return to that entry, render, focus the row, and restore offsets. A direct detail link without a known origin returns safely to same-query results.</p></div>

<div class="finding"><div class="finding-top"><span>K2 / second</span><span class="status pending">Not started</span></div><h3>Keep return available while reading.</h3><p><strong>Observed:</strong> the existing app return button is above the viewport at the useful reading point and at the note end.</p><p><strong>Proposed:</strong> keep one native Back to results button in a sticky strip without covering content, using K1's shared return transition. Verify visibility and keyboard/pointer behavior at both widths.</p><p>K2 remains unimplemented. It was outside the one-cut implementation proof.</p></div>

## See the return state

The desktop captures show the same search after return. Before, the list starts at its first result. After, note-049 is visible with keyboard focus and the saved position restored.

<div class="comparison"><figure><div class="image-label">Before / baseline return</div><a href="/evidence/before-desktop.png"><img src="/evidence/before-desktop.png" alt="Synthetic review inbox after baseline return: Orchard results start at the top and the originating note-049 is out of view." loading="lazy" width="1280" height="800"></a><figcaption>List 1030 → 0. Focus: BODY.</figcaption></figure><figure><div class="image-label">After / K1 implemented</div><a href="/evidence/after-desktop.png"><img src="/evidence/after-desktop.png" alt="Synthetic review inbox after the implemented return: Orchard handoff note-049 is visible and outlined as the focused row." loading="lazy" width="1280" height="800"></a><figcaption>List 1030 → 1030. Focus: note-049.</figcaption></figure></div>

<details class="narrow-evidence"><summary>Inspect the 390px return captures</summary><div class="comparison narrow"><figure><div class="image-label">Before</div><a href="/evidence/before-narrow.png"><img src="/evidence/before-narrow.png" alt="Narrow synthetic inbox baseline return, reset to the first Orchard results." loading="lazy" width="390" height="844"></a><figcaption>List 2002 → 0; page 9 → 0; BODY focus.</figcaption></figure><figure><div class="image-label">After</div><a href="/evidence/after-narrow.png"><img src="/evidence/after-narrow.png" alt="Narrow synthetic inbox after K1, with note-049 focused in its restored list position." loading="lazy" width="390" height="844"></a><figcaption>List 2002 → 2002; page 9 → 9; note-049 focus.</figcaption></figure></div></details>

## A contract that can be checked

The implementation changes navigation state in `fixtures/review-inbox/src/main.ts`. It preserves the data, styling, and page markup byte for byte against the baseline.

| Case | Expected behavior |
| --- | --- |
| App return | Orchard/24 ordered results remain. note-049 is focused and visible. At unchanged geometry, saved offsets match within 1px. The next Tab reaches note-052. |
| Browser Back / Forward | Back restores the anchor. Forward opens the exact detail at its initial top/heading focus. Back restores the anchor again. |
| History | App return traverses the controlled origin instead of pushing a duplicate list entry. Rapid return activation cannot skip that origin. |
| Pointer / narrow / resize | The same origin ID returns with focus. Unchanged geometry restores offsets; changed geometry clamps and reveals the row without horizontal overflow. |
| Recovery and preservation | Changed queries do not inherit stale anchors. Clear focuses Search. Direct/unknown detail returns safely. Complete AND-term search, counts, stable IDs, order, and no-match recovery remain. |

## Reproduce the proof

Use a full Git checkout, with the preserved baseline commit available, and Node/pnpm. From the repository root:

```sh
pnpm install --frozen-lockfile
pnpm test:e2e:install
pnpm verify
```

The verifier checks a fresh five-file skill installation and three resolved references, TypeScript, the production build, and 12 current browser cases. It reconstructs baseline commit `e9e9b3c53dfca371de1b4ed52094fe2cefde4810` in an isolated temporary directory and runs the same four targeted continuity cases. They must fail at the expected return-context assertions; launch failures, wrong counts, and unexpected failures fail the proof.

The dated run used Windows, Node 24.17.0, pnpm 10.30.1, Playwright 1.63.0, and Chromium 153.0.8010.12. See the retained [current receipt](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/examples/review-inbox/evidence/verification.json) and [baseline receipt](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/examples/review-inbox/evidence/baseline-proof.json).

## What this establishes

The report is actionable and the selected interaction change is reproducible on this synthetic app. Customer completion, conversion, outcome quality, and general method accuracy were not measured. Screen readers, real touch, other browser engines, broader zoom/reflow, and refresh/restart restoration remain unverified. This is in-session continuity.

The invoked method was a fresh isolated copy of the repository skill. Its source digests and evidence locators are retained in the full report. Local fixture hosting does not establish offline analysis: source and evidence processing follow the configured coding-agent host.

<div class="doc-next"><a href="/install">Run a focused pass on your app <span aria-hidden="true">→</span></a><a href="/method">Inspect the method <span aria-hidden="true">→</span></a></div>
