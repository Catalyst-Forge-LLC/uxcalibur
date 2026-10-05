# Review inbox: find, read, resume

Actual focused UXcalibur pass, 2026-10-05. **Restore the originating result row, scroll position, and keyboard focus when returning from a note.** Search and reading work in the baseline; its return breaks continuation. Two cuts are warranted by this flow, ranked by consequence rather than a finding quota. **K1 is implemented and verified; K2 remains Not started.** The audit observations below retain the preserved baseline; [implementation verification](verification.md) records the later change.

## Outcome and boundary

Starting at the local synthetic inbox, search **Orchard**, choose **Orchard handoff, note-049**, identify the owner/action, and resume the same results. The rendered answer in section 9 is **Mara; review the inventory on Thursday**. Success requires the correct stable ID, retained query/result set, the same useful list position, and keyboard continuation from the opened row. Focus: accomplishment and navigation continuity, including keyboard. Excluded: branding, note editing/storage, backend/service features, unrelated surfaces, and whole-app redesign.

The task/data contract is [fixture README](../../fixtures/review-inbox/README.md). This report recommends in-session view state only; refresh/restart durability is outside the claim. No application, test, dependency, skill, or project-state changes were made by this audit; no publication or external contact occurred.

## Evidence and useful baseline behavior

Baseline: **`e9e9b3c53dfca371de1b4ed52094fe2cefde4810`**. Source locators below refer to that revision, using `git show BASELINE:PATH`; links open the working files and may change during later implementation. The three app-source SHA-256 digests match before/after in [raw browser observations](evidence/audit-observations.json). `git diff` for the fixture was empty during the audit.

Playwright 1.63.0 drove Chromium **153.0.8010.12** at `http://127.0.0.1:5191/`, with 1280×800 and 390×844 viewports. The [audit runner](evidence/audit-browser.mjs) recorded URLs, active elements, native key transitions, scroll offsets, bounds, and complete result identities. All eight generated screenshots were inspected using `view_image`. The [pointer supplement](evidence/audit-pointer.json) uses wheel/click; its offscreen Back click includes Playwright's automatic scroll into view and does not prove a visible return control at the reading point.

| Evidence ID / reproduction | Observed behavior | Trace |
| --- | --- | --- |
| E1: search `Orchard` | 24 matches across all 72 records, in fixture order. Both duplicate handoff titles retain note-025/note-049 in visible IDs and button names. | JSON `searched`; [data.ts](../../fixtures/review-inbox/src/data.ts), lines 8–35; [main.ts](../../fixtures/review-inbox/src/main.ts), lines 50–72 |
| E2: focus Search; Tab 18 times; Enter | note-049 has focus at list scrollTop 1030; detail opens at top with heading focus. PageDown exposes Mara/action in section 9. | JSON `keyboard-origin`, `detail-top`, `handoff`; [origin image](evidence/audit-keyboard-origin.png), [answer image](evidence/audit-handoff.png); main.ts 95–113; data.ts 21–22 |
| E3: Ctrl+End; Shift+Tab; Enter on Back | Query and 24 IDs remain; list scrollTop becomes 0; focus becomes BODY; first subsequent Tab goes to Search. note-049 is below the list viewport. | JSON `detail-end`, `keyboard-back-control`, `app-return`, `first-tab-after-return`; [return image](evidence/audit-app-return.png); main.ts 26–49, 99, 116–123 |
| E4: browser Back after app return; Back again; Forward; Back | First Back reopens note-049 because app return pushed a new list entry. The next Back reaches a rebuilt list at 0/BODY. Native return from detail also loses the origin position/focus. | JSON `history-after-app-return` through `browser-return`; [native-return image](evidence/audit-browser-return.png); main.ts 18–23, 116–123 |
| E5: repeat keyboard flow at 390px | Correct ID and answer remain readable without horizontal overflow. Origin list scrollTop 2002, page scrollY 9; return resets both to 0 and focus to BODY. | JSON `narrow-origin`, `narrow-handoff`, `narrow-return`; [narrow origin](evidence/audit-narrow-origin.png), [answer](evidence/audit-narrow-handoff.png), [return](evidence/audit-narrow-return.png) |
| E6: read section 9 or note end | Only app return button is above the article. At the desktop answer it is wholly above the viewport (bottom −559px); at the end, page scrollY is 1685 and no return control is visible. Shift+Tab from the focused heading does reach it and scroll to top. | JSON `handoff`, `detail-end`, `keyboard-back-control`, `narrow-handoff`; [end image](evidence/audit-detail-end.png); main.ts 95–113; [style.css](../../fixtures/review-inbox/src/style.css), line 24 |
| E7: mixed-case/body terms, no match, Clear, invalid ID | `orCHard Mara Thursday` returns only note-049; no-match copy offers recovery; keyboard Clear restores 72 and focuses Search. Unknown ID has honest unavailable copy; return retains Orchard. | JSON `body-and-search` through `invalid-return`; main.ts 54–57, 77–87, 101–109 |
| E8: pointer flow | Wheel to list scrollTop 1200, click note-049, read, click Back: same query returns at list 0/BODY. | [pointer observations](evidence/audit-pointer.json), [runner](evidence/audit-pointer.mjs) |

Keep complete local AND-term search across title/summary/body, literal case-insensitive matching, fixture order, truthful counts, stable IDs despite duplicate titles, native buttons, existing focus outline, detail heading focus on initial open, and honest no-match/unavailable recovery. These are existing capabilities, not proposed work.

## 1. K1 — Return to the same review anchor

**Observed obstacle:** E3–E5/E8 lose list position and focused identity on every observed return. The source recreates `.results` on `render()` and stores no origin snapshot; `navigate(null)` additionally pushes another history entry. **Inferred consequence:** continuing requires locating note-049 again or remembering where review stopped; keyboard users restart the sequence at Search. The duplicated title makes preserving the stable ID material. No user completion rate or effort improvement was measured.

**Proposed contract:** Keep URL `q` as query and `note` as detail ID. Before opening a row, save an ephemeral snapshot on the current list history entry: entry key, query, origin note ID, `.results.scrollTop`, and page scrollY. Merge owned state fields rather than overwriting unrelated history state. Open detail with one pushed entry referring to that known origin; focus its heading and start at top as today. On app return from that controlled entry, traverse Back to its origin instead of pushing another list. For a direct/unknown detail entry without a known origin, replace the detail URL with its same-query result URL; never navigate the person out of the app to guess an origin.

After list render, restore query/results and focus the origin row with `preventScroll`, then restore/clamp the saved list/page offsets. The app owns these entries' scroll restoration; prevent native automatic restoration from overwriting it while this route renderer is active. Browser Back uses the same restoration; Forward reopens the exact detail ID at its initial top/heading focus. Returning again restores the list anchor. The list URL has no `note`; its saved origin ID is a review anchor, not a new filter. Initial/direct list entry and changed/cleared query start at top; Clear keeps Search focus. If the saved row no longer matches or state is absent, start at top and focus Search. At a changed viewport, clamp offsets and minimally reveal the origin row if needed, retaining keyboard continuation. This state is navigation context, not a saved note or durable draft.

**Dependencies/preservation:** Own this in `fixtures/review-inbox/src/main.ts` route/navigation/render flow. Use existing immutable Note IDs; no schema, service, framework, dependency, or record migration is needed. Keep search semantics/counts and no-match behavior above. Do not restore a snapshot from a different history entry merely because its query text matches. In-session memory/history state is sufficient; do not promise restart restoration. **Confidence:** high in baseline cause and reproduction; user benefit remains an inference. **Status:** Verified on 2026-10-05. **Evidence:** [K1 acceptance and limits](verification.md). Pending app returns are guarded until history traversal renders, so rapid activation cannot skip the origin.

| Acceptance ID | Trigger / context | Observable expected result / method |
| --- | --- | --- |
| K1-A1 | At 1280×800, reproduce E2, read section 9, return by app button. | Orchard/24 ordered IDs remain; note-049 focused and visible; list/page offsets equal the captured origin within 1px when geometry is unchanged. One Tab focuses note-052. Rendered Playwright check. **Baseline fails** (1030→0; BODY). |
| K1-A2 | Same origin; use native browser Back, Forward, then Back. | Back restores list anchor/focus; Forward opens note-049 at top with heading focus; Back restores anchor again. URL and active-element/scroll assertions. **Baseline list restoration fails.** |
| K1-A3 | Open from a controlled list, activate app return, inspect history. | No extra list entry is pushed; Forward can reopen the detail; ordinary Back follows the prior existing history rather than a newly duplicated detail/list loop. Rendered history traversal and entry/state assertions. **Baseline fails** (E4). |
| K1-A4 | Repeat K1-A1 with mouse wheel/click and at 390×844 by keyboard; also resize while reading. | Same ID is the focused return anchor. At unchanged narrow geometry restore recorded offsets (baseline 2002/9); after resize clamp and reveal the row without horizontal overflow. Baseline fails unchanged-viewport return; resize behavior is unverified. |
| K1-A5 | Change/clear search, then open/return; also load `?q=Orchard&note=unknown` or a direct valid detail without known origin. | Changed query never inherits an old anchor; Clear retains Search focus. Unknown/direct detail returns within app to same-query results at top/Search when no snapshot exists. No fake record/edit state. Rendered fixture recovery check. |
| K1-P1 | Re-run E1/E7 after implementation. | 72 empty-query results; Orchard's 24 ordered IDs including both handoffs; body AND/case search returns note-049; no-match/Clear recovery and exact counts remain. Inspect UI and immutable data diff. |

## 2. K2 — Keep return available while reading

**Observed obstacle:** E6 puts the only app return control offscreen as soon as the useful handoff content is reached. **Inferred consequence:** a person must scroll back to the top, know reverse-Tab behavior, or use browser navigation before resuming. This does not prevent keyboard completion in the observed baseline; it ranks below the lost review anchor.

**Proposed contract:** Put the existing labeled **Back to results** button in a sticky strip at the top of the document viewport while detail is open. Keep one native button before the article in DOM/tab order; it invokes the shared K1 return transition. Reserve its normal-flow space and prevent it from covering readable/focused content at desktop and narrow widths. Initial detail entry still focuses the heading; Shift+Tab reaches the return button from that heading. No global shortcut or duplicate return state is required. Unavailable-note recovery uses the same button/handler.

**Dependencies/preservation:** K1 supplies the correct return destination/restoration. Own placement in `style.css` and the existing detail markup in `main.ts`; no data/backend changes. Preserve article text selection, native page scrolling, visible focus, and all 18 paragraphs. **Confidence:** high that the button is offscreen; medium that sticky placement is preferable for this bounded flow without testing with people. **Status:** Not started. **Next action:** apply after K1, then verify the reading point and narrow viewport.

| Acceptance ID | Trigger / context | Observable expected result / method |
| --- | --- | --- |
| K2-A1 | Read section 9 and reach the final paragraph at both audited viewport sizes. | The labeled return control is visible and pointer-reachable without scrolling to top; it does not obscure article text. Screenshot inspection plus bounds assertions. **Baseline fails** at desktop answer/end and narrow answer. |
| K2-A2 | Keyboard open/read/Shift+Tab/Enter; pointer activate sticky return; unknown-ID recovery. | Single return tab stop, visible focus, shared K1 destination/anchor behavior, readable content with no horizontal overflow. Rendered keyboard/pointer checks and K1 regression coverage. Proposed behavior unimplemented. |

## Tracking and verification limits

| Cut | Rank rationale | Implementation | Issue / next check |
| --- | --- | --- | --- |
| K1 | Directly breaks the requested continuation; affects both observed return routes and input methods. | **Verified** | Four intended continuity failures replay on baseline; the same cases pass after. Full current suite: 12 passed. [Evidence](verification.md). |
| K2 | Return is reachable but displaced from the reading point. | **Not started** | Depends on K1's shared return handler; verify sticky visibility without covering content. |

The original audit used source inspection plus headless rendered observation on one synthetic app, with manual image review. It reported both implementations Not started. The later [verification](verification.md) checks K1; K2's proposed acceptance remains unrun. This is not a usability study or measured efficacy result. Browser errors recorded during the primary run: none. Real touch input, screen readers, zoom/reflow beyond the two sizes, other browser engines, refresh/restart durability, and broader external-history edge cases remain unverified. There are no app data requests/edits/jobs to validate in this fixture; no backend guarantees are introduced by either cut.

## Method and invocation provenance

The actual task is preserved in [audit-invocation.txt](evidence/audit-invocation.txt); this report was produced by its invoked audit agent, not copied from a hypothetical report. It used the fresh isolated skill at **`Z:\workspace\uxcalibur\.tmp\skill-install-dakCsP\uxcalibur`**, reading `SKILL.md`, `references/process.md`, and `references/product-brief.md`. Detailed-spec mode was not requested; `spec-contract.md` was retained and hashed, not used to expand the deliverable.

The [retained installation receipt](evidence/skill-installation.json), originally written by `scripts/check-skill.mjs --copy` in `.artifacts/skill-installation.json`, records creation at **2026-10-05T22:56:41.223Z**, source `skills/uxcalibur`, **5 identical files / 3 resolved references**, and that isolated installation path. Later verifier runs replace the ignored receipt with another fresh copy. The audit independently re-hashed all five original source/copy pairs and observed equality. The personal installed skill was not used or changed.

| Relative method file | SHA-256 of both repository and invoked copy |
| --- | --- |
| SKILL.md | `1f79e6d9ec9b44f6e21d35f4ec22d73ff3dd0c3eae60837389cf7fafc941a6d8` |
| references/process.md | `2843813d441d9db13f704051d6ec5b711300f94eaaad888384d113a1e9a45d96` |
| references/product-brief.md | `73ac6378db5c21a018cfa7ff95bef789220aef947fc21b319879e476cc76e8a7` |
| references/spec-contract.md | `fcc07339f0bc90f4623e996d19e881bd667b673e2270437142e2521bbdb9cee7` |
| agents/openai.yaml | `6536898c579932dc425f3015d3cb52a3c47aaedabd627d576c12ea7f1c10d0a4` |

Primary rendered capture: **2026-10-05T23:10:40.502Z–23:10:43.393Z**. The historical runners are `evidence/audit-browser.mjs` and `evidence/audit-pointer.mjs`. Their reruns capture whichever app/source is running into `.artifacts/audit/`; their exit status does not assert a cut passes. Reproduce the actual before/after acceptance with `pnpm verify`, which reconstructs the preserved baseline automatically. Source/UI access was local and synthetic; agent processing follows the configured coding-agent host, so local fixture hosting does not establish fully offline analysis.
