# UXcalibur — first developer proof

**Status:** Locked. Owner approved the recommended initial build on 2026-10-05.

**Last updated:** 2026-10-05

**Archetype:** Product, based on the developer and operated-service audiences in [GENESIS.md](../GENESIS.md).
**Recommended first delivery:** Skill-only proof with one synthetic flow and one verified implemented cut. A CLI is a later decision.

Read sections 1–4 for the proposed scope, section 8 for decisions, and sections 11–12 for the build and acceptance plan. Project phase and decision status live in `appledger/`; this draft does not supersede the genesis direction.

## 1. Problem and outcome

UXcalibur helps people accomplish their chosen job or improve its outcome through a few justified interface changes. The user can specify the aspects to focus on and the aspects to exclude. It starts with actual evidence, identifies obstacles, missing support, or improvement opportunities and their supporting implementation contracts, and returns a ranked cut list with checks matched to the intended outcome. Detailed upgrade specifications remain available when explicitly requested.

The first useful delivery should demonstrate the method already present in this repo: a developer invokes the repository skill against a running local fixture, gets an actionable report, implements a justified cut, and verifies the changed interaction. This is a proof of actionability on a synthetic example. It does not establish improved customer completion, conversion, or general accuracy.

Done for this slice means a fresh agent can follow the documented invocation, inspect the same fixture and evidence, understand the report, and reproduce the before/after check. Packaging a public release is a subsequent milestone with a license decision.

## 2. Users and hero flow

**Primary user:** An engineer with a coding agent and access to their application's source and running interface.

**UXcalibur hero flow:** Choose the app and bounded flow or aspect → state the intended outcome, focus areas, exclusions, success or improvement criteria, and available evidence → invoke the versioned skill → inspect relevant source and rendered behavior → receive ranked cuts within that scope → implement the selected cut within authorized scope → run its acceptance checks → save evidence and status.

**Proposed demonstration:** A local synthetic review inbox. The person searches for a known note, opens a long note, reads it, and returns to the same results to continue browsing. Completion means the correct stable note ID was opened and useful search/list context survives return. The fixture is the subject being reviewed; it is not a UXcalibur dashboard.

Define the task and data before auditing. Do not pre-fill a desired cut list or require a fixed number of findings. The analysis can discover no actionable cut; record that outcome rather than manufacture one. If that happens, review the fixture choice before claiming the proof is complete.

Secondary coverage within the same flow: keyboard use, duplicate display titles, long content, empty/no-match recovery, narrow viewport, and browser Back/Forward. Detailed-spec mode must remain an explicit request and must still resolve its reference files, but a whole-app spec is outside this proof.

## 3. Constraints and v1 boundaries

- Keep the supplied genesis direction and existing skill contents as the baseline.
- Treat accomplishment, result quality, and other user-selected improvement criteria as valid outcomes alongside effort. Carry explicit focus areas and exclusions into inspection, ranking, recommendations, and implementation; name conflicts with necessary dependencies rather than silently expanding scope.
- Use only synthetic fixture data. DictaWhisper's spec is an origin/reference, not customer data to copy into this repository.
- Run the fixture locally. No account, database service, analytics, payment system, or hosted analyzer is needed for this proof.
- The user's coding agent performs the analysis. Its provider, credentials, permissions, and data processing are configured by the user/host. Describe those boundaries in the usage instructions; do not promise all analysis is offline simply because the fixture is local.
- Changes to the fixture are demonstration implementation, not permission to modify arbitrary apps.
- No deadline, price amount, budget, DNS provider, or service runtime has been supplied.
- Public license and release approval are separate from approval to build the private proof.

## 4. Stack, tooling, and folder shape

| Area | Choice | Status | Why |
| --- | --- | --- | --- |
| Product method | Markdown skill, YAML agent metadata, Markdown references | Established in genesis | The existing delivery already contains the method |
| Fixture UI | Native HTML/CSS and strict TypeScript with Vite as development/build tooling | Confirmed for this build | Small inspectable browser example; no product framework commitment |
| Fixture data | Immutable local synthetic records with stable IDs | Confirmed for this build | Repeatable checks without customer data or a backend |
| Verification | Focused rendered browser checks with Playwright; source/reference checks using Node | Confirmed for this build | Verify actual history, focus, selection, scrolling, and task behavior |
| Package manager/modules | pnpm; ESM; Node 20+ for development tooling | Confirmed for this build | Match workspace practices and ForgeTrail conventions |
| Project memory | AppLedger and ForgeTrail Lite | Established in genesis; installed during kickoff | Keep phase, decisions, and acceptance evidence across sessions |
| Git host | Catalyst-Forge-LLC/uxcalibur on GitHub | Supplied by owner | Preserve the requested repository |
| npm | `uxcalibur` | Name hold observed at `0.0.0` | No new publication in this kickoff |
| Public sites | FilePress, developer audience first | FilePress established; launch order proposed | Prove the delivery before building public acquisition paths |
| License | Owner decision before distribution | Open | No license is currently present for UXcalibur |

AppLedger and ForgeTrail are setup tools, not UXcalibur runtime dependencies. The fixture's development packages do not become requirements for using the skill. Resolve and pin tested package versions during Build, rather than putting guessed versions in this brief.

Proposed Build layout (new paths; none created by this planning document):

```text
skills/uxcalibur/              existing versioned method
fixtures/review-inbox/         synthetic browser UI, typed data, behavior checks
examples/review-inbox/         scoped report, invocation, before/after evidence
scripts/                      small verification helpers, if required
README.md                     actual invocation and limits
CONTEXT_PROMPT.md              approved brief merged into build context
TODO.md                       active delivery checklist
package.json                  private development harness; no analyzer bin
pnpm-lock.yaml                tested development dependencies
```

Keep the fixture test data immutable and its baseline behavior reproducible. Record a baseline commit or immutable baseline artifact before implementing a cut. Prefer one source tree plus a preserved baseline revision over two permanently diverging demo apps.

## 5. Evidence and report model

| Entity | Required content |
| --- | --- |
| Pass | App/flow or aspect boundary, intended outcome, focus areas, exclusions, success or improvement criteria, invocation, method version or source digest, evidence access and limits |
| Observation | Stable evidence ID, source/UI state, reproduction steps, certainty, artifact or source locator |
| Cut | Stable ID, rank and rationale, observed obstacle, likely user consequence, proposed behavior, confidence |
| Implementation contract | Owned files/data behavior, prerequisites, preservation rules, failure/recovery semantics relevant to the cut |
| Acceptance | Stable case ID, fixture/context, action, observable expected result, verification method |
| Tracking | Cut/packet status, dated notes, issues, evidence, and next action |

Use portable Markdown first. A machine-readable report schema and automatic validator are deferred until a real report demonstrates what must be represented. Do not present placeholder observations or sample cuts as an actual audit.

The fixture's `Note` record needs an ID, display title, summary, and body. Include duplicate titles, long text, enough matching rows to require scrolling, and known search terms. Define complete local search semantics (fields, matching, ordering, count meaning) when building the fixture. No remote pagination, edit acknowledgments, persistence, or fake background jobs are required.

For any proposed continuity cut, explicitly define which query, selection ID, focus, history entry, and list scroll position survive which transition. Refresh/restart durability must be either supported and tested or clearly excluded; do not confuse in-session continuity with durable storage.

## 6. Integrations and generation

| System | Use in this slice | Boundary |
| --- | --- | --- |
| Coding-agent host | Executes the skill and inspects authorized evidence | Existing host credentials/tools; no embedded model API or implicit repository upload |
| GitHub | Requested source repository | Private and empty at review; local genesis commit already exists |
| npm registry | Verify the supplied name hold | `0.0.0`, description “Name hold.”, maintainer `acmegeek` observed on 2026-10-05 |
| ForgeTrail / AppLedger | Local kickoff and memory | Used current workspace versions: ForgeTrail `0.5.9`, AppLedger `0.2.1` |
| FilePress | Later public presence | No site scaffold or publication in this slice |

The report is agent-generated using the operator's chosen host. Fixture records are authored synthetic data. No product runtime LLM, build-time model seed, model selection, API key, or Ollama service is proposed. The host's processing boundaries must be documented at invocation.

## 7. Review findings and risks

The current repository contains one clean genesis commit (`d6c2162`), a product direction, and a five-file skill. There is no executable analyzer, package manifest, fixture, demonstrated report, license, or public site. The npm hold and remote repository are setup facts, not shipped developer functionality.

The skill and its references consistently preserve focused-pass default, explicit detailed-spec mode, evidence-grounded findings, state/data contracts, and truthful verification. The most useful next evidence is a real scoped report and changed interaction.

| Risk | Consequence | Control |
| --- | --- | --- |
| Fixture designed to guarantee a preferred finding | Demonstration becomes circular | Define the task/data first; inspect rendered behavior; retain the baseline and all material observations |
| Source-only or cosmetic conclusions | Advice may not fix the real operation | Follow the flow in the browser; connect each claim to appropriate checks |
| npm wrapper presented as an analyzer | Users expect an unimplemented runtime | Ship the skill proof first; defer a `bin` and analyzer interface |
| Personal installed copy drifts | Report cannot be reproduced from repo | Record method source; test a fresh isolated copy and reference resolution |
| Generalization from one fixture | Quality claim exceeds evidence | Label the example synthetic and record unmeasured efficacy |
| Licensing assumed during setup | Distribution rights remain unclear | Track the owner decision; keep upstream ForgeTrail notices/license separate |
| Two sites and SaaS precede proof | Adds delivery work before value is demonstrated | Defer hosted mechanics and public launch to later milestones |

## 8. Decision log

Decision status here must match the corresponding ledger record.

| ID | Choice | Status / authority |
| --- | --- | --- |
| D1 / `decision-genesis-direction` | UXcalibur naming; focused default; explicit detailed spec; shared method; distinct `.dev` and `.com` audience jobs; ForgeTrail and FilePress direction | Accepted from supplied genesis; not new sign-off on release details |
| D2 / `decision-kickoff-memory` | Commit a self-contained ForgeTrail Lite workspace and AppLedger; root agent entry point; stay in Plan until concrete brief approval | Accepted setup choice within “review and kick it off” |
| D3 / `decision-developer-proof` | Skill-only first delivery; synthetic review inbox; scoped report and one implemented cut; proposed fixture/tool stack and folder shape in section 4 | Accepted on 2026-10-05; recommended initial build authorized |
| D4 / `decision-launch-sequence` | Prove the developer flow first; `.dev` FilePress presence next; service offer later; no SaaS commitment | Accepted on 2026-10-05; recommended initial build authorized |
| D5 / `decision-outcome-and-scope` | Help people accomplish goals or improve outcomes; let the user specify focus areas and exclusions throughout the pass | Accepted from owner clarification on 2026-10-05; does not approve D3/D4 or Build |

The physical site layout can be decided when the site milestone starts. Two separate public sites remain plausible; launch order does not abandon either audience.

## 9. Open questions

| ID | Decision | Resolve by |
| --- | --- | --- |
| Q1 / `question-approve-proof` | Approve or adjust the skill-only slice, fixture flow, development stack, folder shape, and acceptance plan | Before entering Build |
| Q2 / `question-license` | Choose the UXcalibur open-source license and release/distribution route | Before public source distribution or npm release; does not block private proof |
| Q3 / `question-sites-service` | One/two FilePress sites, launch structure, service delivery/pricing, and whether SaaS becomes useful | After developer proof, before the affected milestone |

No architecture questionnaire is needed: the supplied genesis already states the problem, audiences, domains, default output, and future-service direction.

## 10. Explicitly out of scope for the proof

- An automatic analyzer, CLI commands/flags, MCP server, or report SaaS.
- Customer intake, billing, authentication, repository OAuth, recurring scans, telemetry, or service infrastructure.
- Public npm publication, making the private repository public, domain deployment, or marketing claims of measured efficacy.
- Copying the DictaWhisper codebase/data or changing a customer's application.
- A whole-app redesign or detailed-spec example merely to increase output size.

## 11. Delivery packets and first feature batch

These are approved Build work. The packet table is updated with implementation and acceptance evidence as work proceeds.

| Packet | Result | Depends on | State / next action |
| --- | --- | --- | --- |
| P1 | Runnable review-inbox baseline with synthetic data, defined task, meaningful behavior checks, and baseline artifact | Brief approval / Plan-to-Build authorization | Verified baseline; 3 core browser checks pass; continuity acceptance remains pending |
| P2 | Actual focused pass and portable example report with traceable cuts | P1 | In progress; independent pass using a fresh copy of the repository skill |
| P3 | One justified fixture cut implemented and acceptance demonstrated before/after | P2 | Not started; select the cut from evidence, then verify it |
| P4 | Fresh-copy invocation, resolved skill references, honest usage docs, and reproducible verification command | P1–P3 | In progress; fresh copy and usage docs prepared; invocation/complete proof pending |

The runnable spine is the local fixture plus agent invocation and report workflow. Finish these connected steps within the approved Build scope; do not call an empty UI or copied prompt a working proof. Subsequent feature work should come from the proof's issues and evidence before adding a CLI.

Proposed acceptance cases:

| ID | Trigger / context | Observable result / method |
| --- | --- | --- |
| A1 | Fresh local fixture start | Search → correct stable note ID → read long content → return is runnable with synthetic data; rendered browser check |
| A2 | Audit using repository skill | Saved invocation identifies method source, intended outcome, focus areas, exclusions, and success/improvement criteria; report contains only supported observations/recommendations within that scope, dependencies, confidence, acceptance, statuses, and limits; source and rendered evidence review |
| A3 | Selected highest-impact cut | Record exact baseline reproduction and failing targeted check before modification; implement the cut; same check passes afterward without unrelated changes |
| A4 | Keyboard, duplicate titles, no-match recovery, narrow viewport, history navigation | Correct identity and operability remain; chosen cut's focus/scroll/query contract is rendered and checked; unaffected behaviors retain meaningful coverage |
| A5 | Fresh skill copy in an isolated temporary directory | Skill metadata and all referenced files resolve; documented invocation runs the chosen pass against the fixture; personal installation is not silently modified |
| A6 | Verification rerun | One documented project command runs the relevant source/reference and behavior checks; report lists exact environment, results, evidence paths, and unrun checks |
| A7 | Read example as a new user | Understand how to invoke the current skill, what the example proves, host data-processing boundaries, and the explicit detailed-spec alternative; no unbuilt CLI or measured-conversion promise |
| A8 | Request a pass on the same fixture with a named improvement aspect and an excluded aspect | Inspection and ranked cuts follow the selected outcome and focus; excluded recommendations/changes stay out of scope; any necessary dependency conflict is stated. Review an actual scoped report, rather than only checking its headings. |

Do not mandate a specific continuity cut before observing it. If the actual priority differs, update the selected cut's contract and acceptance while preserving the same one-flow boundary. Record inaccessible rendered evidence or failed checks; neither becomes a passed case.

## 12. Handoff and approval

- [x] Existing product direction reviewed; purpose and audiences recorded from genesis.
- [x] ForgeTrail Lite and AppLedger initialized without replacing the skill or genesis.
- [x] Concrete first-delivery recommendation, fixture, folder shape, dependencies, and acceptance drafted.
- [x] Owner approves D3/D4 using the recommended choices.
- [x] Approved commitments recorded as accepted decisions; approval evidence and session handoff updated.
- [x] Brief locked and explicit Plan-to-Build transition recorded.

After approval: read this brief and the ledger; resolve only changed decisions; lock the approved version; record authorization; merge it into `CONTEXT_PROMPT.md`; enter Build; implement P1–P4; record results and remaining limits. Public release still requires the license and publishing decisions.

## 13. Kickoff verification

Setup uses the current local workspace CLIs without adding dependencies to UXcalibur. The globally installed commands were older (`forgetrail 0.5.4`, `appledger 0.1.4`); no global installation was changed.

Kickoff checks on 2026-10-05:

- `node Z:/workspace/appledger/dist/cli.js check --format json`: passed with `ok: true`, zero errors and zero warnings after correcting the evidence digest format to AppLedger's lowercase SHA-256 hex.
- `node Z:/workspace/appledger/dist/cli.js orient --budget 350`: read the recorded purpose, Plan state, proposed decisions, session, and pending approval/acceptance. This is a continuity check, not Build acceptance.
- `node Z:/workspace/appledger/dist/cli.js subjects --format json`: discovery recorded all six label families as `not_applicable`; no label was created. The UXcalibur skill exists, but no SkillFacts subject/label has been declared.
- Node filesystem check resolved all six local Markdown references across genesis, this brief, and the four method documents. Proposed Build paths are not existing-file assertions.
- `git diff --check`: passed. Independent read-only review found no material inconsistency in scope, decision states, acceptance, or the ledger handoff.

No browser fixture, before/after behavior, dependency compatibility, or fresh-install invocation has been verified; those are the proposed Build acceptance cases. Cursor host artifacts are installed; their enforcement in Codex has not been established. Public publication and domain deployment were not performed.

## 14. Owner clarification, 2026-10-05

The owner clarified: “Not just \"easier to finish\", but accomplish or improve. And the user can specify which aspect should be focused on or excluded.” This updates the accepted purpose and scope contract in the genesis, repository skill, and this brief. It does not constitute approval of the proposed first developer slice or a phase transition. The proof now includes A8 to demonstrate respect for a user-selected focus and exclusion.

## 15. Initial build authorization, 2026-10-05

The owner said: “excellent. Proceed and use your leans for the initial build.” This approves the revised brief with the recommended skill-only proof, review-inbox fixture, strict TypeScript/Vite/Playwright development harness, and P1–P4/A1–A8 acceptance. D3/D4 are accepted and the project enters Build. License and public distribution remain deferred.
