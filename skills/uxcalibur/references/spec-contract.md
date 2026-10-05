# Deliverable and progress contracts

Adapt headings and the number of flows/packets to the product. Depth, behavior, and traceability remain constant.

## Document structure

Start with title, scope, intended outcome, focus areas, exclusions, observable success or improvement criteria, date, review state, implementation state, evidence basis, and reading guide. Distinguish proposals from shipped behavior. Apply those scope boundaries to the contracts, packets, and acceptance coverage.

Include these sections, combining only when detailed behavior remains easy to find:

1. Review decisions: highest-impact defaults, rationale, tradeoffs, unresolved choices.
2. Current capability/friction audit: evidence, consequence, correction, priority, useful baseline.
3. Product structure: surfaces/commands, navigation, action ownership, layout/command hierarchy, launch/reflow.
4. State/continuity: persistence, selection, focus, history/deep links, scroll, async/background changes.
5. Core flows: full contracts for the actual jobs and supporting workflows; separate complex flows.
6. Cross-cutting states: loading/empty/error/disabled/interrupted, recovery, accessibility, language, performance.
7. Data/API/compatibility: existing versus new contracts, ownership, migrations, acknowledgment, integrity.
8. Delivery tracker: phases/packets, status, notes/issues, evidence, next action.
9. Implementation packets: prerequisites, modules, tasks, acceptance ownership, definition of done.
10. Acceptance scenarios: stable IDs, fixtures, triggers, observable outcomes, verification methods.
11. Implementation-model prompt: executable starting prompt with tracking updates.
12. Review guide/sources: important choices, previous specs, architecture to preserve, source references.

A large product can require a substantial document. Do not cut detailed flows to an arbitrary word count or invent features to imitate another spec's length.

## Per-flow contract

An ordinary reversible button needs less exposition than an async or destructive workflow. Resolve the fields that affect implementation:

| Field | Required precision |
| --- | --- |
| Job/entry points | Goal and where the flow starts |
| Defaults | Scope, content, sort/view, configured/unconfigured differences |
| Controls/language | Visible names, essential versus optional controls, input equivalents |
| Action semantics | Exact behavior, combinations, affected items, boundaries/ordering |
| Transition | Pending/acknowledged/failure; usable content; race handling |
| Context | Selection, focus, history, scroll, drafts, background updates |
| Persistence | URL/session/preference/record/job; refresh and restart |
| Recovery | Dismiss/cancel/stop, retries, stale data, conflicts, offline outcomes |
| Supporting contract | Existing API/type/module or explicitly owned addition |
| Verification | Fixture, observable outcome, acceptance IDs |

Measurements/limits need units and rationale. Separate targets from observations. Counts state exact/capped/ranked/partial/unknown semantics. Distinguish processing time, content time, date precision, and inferred provenance when relevant.

## Per-packet contract

Give each packet a stable ID, result-oriented title, phase, priority, prerequisites, and independently deliverable subpackets. Identify existing modules and mark proposed ones as new. Provide ordered tasks linked to relevant flow/data sections. Own required frontend/server/data work and compatibility. Map acceptance cases, meaningful checks, and definition of done. Include a tracker entry with notes/issues/evidence.

Do not make an implementer guess whether a UI task includes a missing API. Replace generic instructions such as "handle errors" with actual controls, outcomes, and recovery.

## Living tracker

Place a compact tracker near the reading guide or before the packets. It is the status authority; link detailed notes/issues rather than creating conflicting status copies.

| State | Meaning |
| --- | --- |
| Not started | No implementation under this packet has begun |
| In progress | Work begun; definition of done unmet |
| Needs review | Reviewable result exists; checks and limits recorded |
| Verified | Required acceptance/checks passed; residual nonblocking issues explicit |
| Blocked | Concrete dependency, decision, access, or defect prevents the next necessary action |
| Deferred | Outside this wave deliberately; reason/activation condition recorded |

A scheduled earlier prerequisite does not alone make a later packet Blocked; use Not started and name the dependency. These document statuses are separate from formal goal-tool states.

Include:

- Phase table: ID/title, contained packets, state, summary/next milestone, issues.
- Packet table: title link, state, prerequisites, notes/next action, issues, evidence or Not run.
- Execution notes: dated phase/packet changes, decisions, checks/outcomes, remaining work, next action. Preserve earlier results and identify superseded evidence.
- Issue register: stable ID, affected packet/phase, effect/severity, description, state, next action, resolution/evidence. Keep resolved issues with their outcome.

Never invent owners, dates, commits, results, or percentages. Initialize Not started/Not run with actual baseline notes unless evidence establishes otherwise. None recorded means no documented issue, not defect-free. An unvalidated proposal is an assumption/decision, not a proven bug.

### Update protocol

1. Read dependencies, notes/issues, and acceptance before implementation. Confirm prerequisites from evidence.
2. On authorized start, set In progress and add a dated scope/baseline note.
3. Record substantive changes, decisions, failed checks, and persistent defects/dependencies under the affected packet.
4. For a reviewable result, record modules changed, exact check commands/manual scenarios, outcomes, context, evidence paths/commits, and unrun checks. Use Needs review when acceptance remains.
5. Set Verified only when the definition of done is supported. A mockup/build does not verify all interaction/data cases.
6. Recompute phases: Verified when all required packets are Verified; In progress when delivery has begun and remains; Deferred for later waves. Show blocking issues separately without hiding partial progress.
7. Retain unresolved issues and update the next action when handing off. Scope changes revise contracts and acceptance before the tracker claims delivery.

### Initial ledger example

| Packet | Status | Depends on | Notes / next action | Issues | Verification |
| --- | --- | --- | --- | --- | --- |
| UX01 Core state | Not started | None | Inspect state owners; implement scope and continuity | None recorded | Not run |
| UX02 Layout | Not started | UX01 | Preserve existing navigation and stable item identity | None recorded | Not run |
| UX03 Integration | Deferred | UX01; integration agreement | Activate after direction/conflicts are specified | None recorded | Not run |

These are examples, not required packet names or a three-packet limit.

## Acceptance evidence

Each case specifies fixture/context, action, and observed result. Include difficult cases that apply: dense/long content, old data, multiple pages, conflicts, unavailable capabilities, failed writes, stale replies, restart/interruption, keyboard/touch, zoom/reflow.

Unit/integration tests establish state/data behavior; rendered UI checks establish interaction; actual operations may establish platform capabilities. Use meaningful checks and isolated fixtures. Do not make destructive/external experiments on real data a prerequisite of design review.

Performance evidence states environment, data size, cold/warm state, and measured values. Accessibility requirements need corresponding interaction/computed-color checks; mockup semantics alone do not establish application compliance.

## Copyable implementation prompt

~~~text
Implement packet [PACKET_ID] from [SPEC_PATH] in this project.
Read project instructions, dependencies/tracker, relevant interaction/data sections,
and the packet's acceptance scenarios first. Inspect current implementation;
proposed contracts are not existing APIs. Preserve unrelated changes, user data,
and accepted decisions, including the user's focus areas and exclusions.
Use established architecture/conventions.
Set the packet In progress and keep dated notes/issues as work proceeds.
Implement its owned frontend/server/data changes without simulating guarantees.
Record exact unmet prerequisites and partial progress if delivery is blocked.
Run meaningful checks and verify observable acceptance against fixtures.
Record commands, results, evidence, unrun checks, issues, and next action.
Set Needs review or Verified from evidence and update phase status consistently.
Report the reviewable result and concrete limits. Continue within authorized scope.
~~~

## Final quality gate

Every important job within the requested scope has a complete flow; each promise has an owned supporting contract; packets have reachable prerequisite chains; done claims have evidence matched to the chosen accomplishment or improvement criteria. Check that recommendations respect focus areas and exclusions. Verify links/source references and examples. Missing state, recovery, or tracking means the handoff remains incomplete.
