# Verified first cut

On 2026-10-05, the [actual scoped pass](report.md) ranked **K1: return to the same review anchor** first. K1 is implemented in `fixtures/review-inbox/src/main.ts`. K2 remains unimplemented; the approved proof required one justified cut.

The [invocation](invocation.md) asked the agent to focus on accomplishment/navigation continuity, including keyboard, and exclude branding, editing/storage, backend/services, and unrelated surfaces. Both ranked cuts address that focus. Neither introduces an excluded-area dependency. The preserved data, stylesheet, and page markup remain byte-identical to the baseline.

## Reproduce

From a full Git checkout with Node/pnpm and the pinned browser installed:

```sh
pnpm install --frozen-lockfile
pnpm test:e2e:install
pnpm verify
```

The verifier creates and checks a fresh five-file skill copy with three resolved references, checks strict TypeScript, builds the current app, and runs its browser cases on an isolated production preview. It then extracts four fixture files from baseline commit **`e9e9b3c53dfca371de1b4ed52094fe2cefde4810`** into an ignored temporary directory and starts an isolated baseline server. It does not alter the working app or Git state.

The same four `CUT-001` cases represent report cut **K1**, configured in [proof.json](proof.json). On the baseline, all four must fail specifically at the return-context assertion. A launch error, timeout, wrong case count, unexpected assertion, or unexpected pass fails the proof. On the current app, all four pass as part of the full suite. The verifier also checks preservation of data, styling, and page markup.

## Results and contract coverage

Environment: Windows; Node 24.17.0; pnpm 10.30.1; Vite 8.3.2; TypeScript 6.0.3; Playwright 1.63.0; Chromium 153.0.8010.12. Current receipt: [verification.json](evidence/verification.json). Baseline replay receipt: [baseline-proof.json](evidence/baseline-proof.json).

| Check | Result / evidence |
| --- | --- |
| Fresh skill copy, metadata, references | 5 identical files, 3 resolved references. Actual audit used the [original isolated installation](evidence/skill-installation.json); each verifier run validates another fresh copy. |
| Type check / production build | Passed. |
| Current rendered browser cases | 12 passed; zero failed/skipped. Keyboard app return, pointer return, narrow return, browser Back/Forward, search/identity/recovery, query changes, safe direct links, prior history, foreign history fields, resize, and rapid return. |
| Preserved baseline with the same four targeted cases | 4 intended continuity assertion failures; zero unexpected/infrastructure failures. |
| K1-A1/A2/A3 | Query/24 results, note-049 focus, saved offsets, next Tab to note-052; Back/Forward and app return without a duplicate history entry. `tests/continuity.spec.ts` and history case in `tests/inbox.spec.ts`. |
| K1-A4 | Pointer/keyboard, 1280×800 and 390×844; resize while reading reveals the same row within list/page bounds without horizontal overflow. |
| K1-A5/P1 | Direct/unknown detail falls back to same-query results at top/Search. Changed query clears stale anchor; Clear focuses Search. Stable duplicate IDs, ordered complete corpus, literal case-insensitive AND search, accurate counts, and no-match recovery remain. |
| Review finding fixed | Rapid Back double activation now shares one pending traversal; regression remains at Orchard with note-049 focus rather than skipping to Harbor. |

The [after capture](evidence/after-observations.json) repeats the audit's native keyboard origin. Desktop return preserves list scroll **1030 → 1030** and page **0 → 0**; narrow return preserves list **2002 → 2002** and page **9 → 9**. Both restore note-049 focus. Original baseline return was list 0/BODY focus. Both after screenshots were visually inspected.

| View | Baseline return | Implemented return |
| --- | --- | --- |
| Desktop | [baseline screenshot](evidence/audit-app-return.png) | [after screenshot](evidence/after-return-1280.png) |
| Narrow | [baseline screenshot](evidence/audit-narrow-return.png) | [after screenshot](evidence/after-return-390.png) |

Fresh runs produce `.artifacts/test-results.json`, `.artifacts/baseline-results.json`, `.artifacts/baseline-proof.json`, and `.artifacts/skill-installation.json`. These are local rerun artifacts; the checked-in receipts describe the dated proof. `node examples/review-inbox/evidence/after-browser.mjs`, with `pnpm dev` running, captures current desktop/narrow return evidence under `.artifacts/after/`.

## Limits

This proves an actionable report and reproduced interaction change on synthetic data. It does not measure customer completion, conversion, outcome quality, or general method accuracy. Screen readers, real touch, other browser engines, zoom/reflow beyond the tested sizes, and refresh/restart restoration remain unverified. The test host may process authorized source/evidence through its configured provider; local fixture hosting does not establish offline analysis. No public distribution or service is included.
