# UXcalibur field feedback from LaunchCampaign

October 6, 2026. Suggestions for the UXcalibur maintainer to review and fold in. This file is the only UXcalibur change made by the LaunchCampaign agent; no skill, installer, fixture, release, or installed copy was changed.

The method worked particularly well when findings became owned implementation packets with concrete failure and recovery contracts. It led from a cumbersome profile page to in-place editing, safe copy transfer, draft protection, contextual gate work, and later improvements to assignments, copy editing, Runbook progress, diagnostics, and save integrity. These are implementation observations from one app, not measured usability or business results.

## Comparison before recommendations

Compared the installed `C:/Users/acmegeek/.codex/skills/uxcalibur` copy with `skills/uxcalibur`, including SKILL.md and all three references. Also read the repo's current positioning and execution context. Repo HEAD at comparison: `5f01274f094a5cd2711a0393edf209f257c47fb5`.

| File | Installed SHA256 prefix | Repo SHA256 prefix | Material difference |
| --- | --- | --- | --- |
| SKILL.md | A426F3640B09 | 10413F2C79D3 | Installed copy defaults to a focused pass; repo matches broad or focused assignments and explicitly includes conceptual models and visual craft |
| references/process.md | 1110D6513010 | 5185541A0FC9 | Repo adds coherent target experience, shape/refine/hone, composition, and human feedback while retaining state/data/verification discipline |
| references/spec-contract.md | FCC07339F0BC | E9363752516A | Repo adds audience, design direction, visual system and rendered design verification to the deliverable contract |
| references/product-brief.md | AD7F270BEFDE | 2280ECCA5914 | Repo has the current transformation promise and broad review scope; the installed brief has the earlier focused service framing |

The newer source already addresses the main positioning weakness I encountered: the original request was an app review with Profiles as an example, and the initial installed-method pass narrowed to Profiles and adjacent behavior. Keep the newer rule that an example is not automatically a scope exclusion. This feedback does **not** recommend restoring a focused default, a small finding quota, or mandatory approval between already authorized packets. Historical fixture instructions also must not override the current user assignment; the newer source explicitly handles that.

## Additive suggestions, ranked

### 1. Add a small draft-scope inventory example

Observed: protecting the main editor did not protect optional activity notes, selected asks, or preview reasons and confirmations. A page could hold multiple independent drafts; clearing a successful operation must not clear another draft. Canceling one editor must also leave the other draft intact.

Current coverage: [process](../skills/uxcalibur/references/process.md) already asks for ownership, dirty state, continuity, acknowledgment and recovery. The gap is a concrete inventory technique, not a missing principle.

Suggested addition under state/continuity: “Inventory every draft-bearing control, including secondary forms and optional notes. For each scope name its owner, clean baseline, navigation guard, discard boundary, acknowledgment that clears it, and refresh behavior. Exercise two independent drafts together.”

| Scope | Dirty trigger | Acknowledged clear | Refresh / discard |
| --- | --- | --- | --- |
| Record editor | Saved baseline differs | That record's accepted save | Conflict review retains draft; scoped Cancel |
| Activity note + selected target | Typed note or changed selection | That activity's accepted log operation | Preserve on failure; refuse a removed target |
| Preview reason + confirmation | Typed reason/confirmation or changed parameters | Accepted application of the reviewed preview | Retain reason, clear confirmation, fetch new consequences/revision |

Acceptance for a synthetic regression: save scope A while B is dirty; B and its selected target survive. Cancel A, decline navigation, refresh B, and fail its save without losing B. Untouched optional fields cause no warning. Keep this example framework-independent; do not prescribe server drafts or autosave.

### 2. Verify the acknowledgment through the complete visible journey

Observed: local checkboxes, selected controls, and changed URLs could look successful before the canonical data and selected section were refreshed. A tab retained in shallow browser history could be lost on action invalidation. In the next wave, a gate action initially dropped its Return context because a relative form action replaced the query string.

Current coverage: transition/context/verification in [spec-contract](../skills/uxcalibur/references/spec-contract.md) already requires observable outcomes. Add an example that distinguishes optimistic UI, URL state, rendered state, and acknowledged canonical state.

Suggested acceptance pattern: edit → save → canonical acknowledgment → related record → fix → return → reload/Back. Assert the actual record, selected section/filter, and draft state at the end. Check the destination after a form action as well as after following a link; submit/validate return context explicitly when the action replaces URL parameters.

For automated browser work, wait for a canonical visible outcome rather than a fixed delay or a button that was already present. Keep receipts compact: fixture, initial state, trigger, final rendered/canonical result, and unrun limits. This is useful as a regression fixture and a verification example rather than more top-level SKILL.md text.

### 3. Inspect difficult responsive states and their surrounding layout

Observed: stacking assignment rows fixed their grid, but the surrounding header could still expand the document at 320px. Partial-row errors and inline roster creation also needed verification. A readable empty screen did not prove the active editor fit.

Current coverage: the newer method already makes visual direction and rendered design review explicit. Extend its responsive acceptance examples, preserving that broader ambition.

Suggested fixture coverage: dense content, long labels/URLs, an open editor, a validation error, a pending save, and a related-record return at narrow widths. Compare document scroll width with the available client width; account for the scrollbar. Inspect hierarchy, composition and focus reachability as well as overflow. Record which states were checked instead of claiming whole-app accessibility from a few screenshots.

Acceptance: the controls, error and recovery action remain together and reachable in the difficult state; the parent layout also fits. Any intentionally horizontal data surface needs a deliberate interaction, not accidental page overflow.

### 4. Make rolling implementation findings easy to classify

Observed: new app findings emerged while implementing approved packets. Some were defects in the current implementation and needed fixing immediately; others were worthwhile new product work requiring a later scope decision. Keeping both as undifferentiated “issues” obscures whether the approved wave is actually complete.

Current coverage: the living tracker already retains issues, dates, scope changes, verification and next actions. Add a short classification/example to its update protocol.

Suggested distinction: current-packet defect → resolve or record the unmet acceptance; newly discovered opportunity → proposed packet with evidence and priority; unresolved assumption → decision/verification needed. A separate later-wave state prevents newly proposed work from silently becoming an implementation prerequisite. Do not impose a finding quota or stop an authorized wave for repeated approvals.

Acceptance: the handoff states the current authorized wave, what is verified, its actual limits, and which proposed packets await the owner's decision. A reading guide points to that current status without forcing the next agent to reconstruct it from the whole historical report.

### 5. Make supporting integrity work proportional and explicit

Observed: honest Save/Retry behavior exposed missing server contracts, including stale record checks and multi-file plan/log operations. Those required real integrity work. Atomic replacement of one file did not establish a multi-file transaction or coordination with external writers.

Current coverage: process already says supporting-contract examples are not universal requirements and promises need owned implementation. Preserve that distinction; strengthen the example with a guarantee boundary.

Suggested sentence: “State the smallest supporting contract that makes the requested behavior true, its compatibility cost, and its concurrency/restart limits. Expand a packet only when its accepted promise requires the work; otherwise record the dependency or revise the promise.”

Acceptance: tests can establish rollback/retry behavior under the declared fixture and writer model. The report does not turn those results into a claim of cross-process locking or power-loss durability. A UX pass should not automatically require a journal or database just because it mentions Save.

## Suggested fold-in order

First add the draft-scope matrix and complete-journey example to the references. Then consider a small **synthetic** fixture extension with two independent drafts, a preview refresh, and a specific related-record Return link. The existing precision fixture and newer broad design proof should remain distinct evidence; neither demonstrates every method promise.

No customer YAML, campaign copy, people data, logs, or screenshots are copied into this repo. The maintainer can review local LaunchCampaign evidence in `../launch-campaign/docs/UXCALIBUR_PROFILES.md` (packets A–M, checks and limits) without turning that private implementation material into a distributable fixture. Publishing or packaging this feedback is a separate maintainer decision.
