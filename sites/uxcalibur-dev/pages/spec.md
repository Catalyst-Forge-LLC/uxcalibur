---
title: A plan the implementer can follow.
description: Explicit detailed-spec mode keeps full interaction and supporting contracts, implementation packets, acceptance cases, and progress evidence.
order: 3
---

<p class="doc-kicker">Detailed upgrade specification / explicit mode</p>

<p class="lead">When you need a broader, implementation-ready review, ask for a detailed specification. Keep the evidence and chosen boundary; expand the contracts and delivery plan.</p>

A focused pass is the default. Detailed-spec mode is an explicit request, such as a whole-app upgrade spec or a complete plan for a bounded flow. It retains implementation depth instead of expanding the finding count. See the [full specification contract](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/skills/uxcalibur/references/spec-contract.md).

## Ask for the result and the boundary

This example uses the Codex invocation. In Claude Code or Cursor, start with `/uxcalibur`.

```text
$uxcalibur
Create a detailed upgrade specification for this review inbox.
Outcome: find, read, and resume the same review with reliable context.
Focus: navigation continuity, keyboard interaction, and recovery.
Exclude: branding, note editing/storage, services, and unrelated surfaces.
Inspect the authorized running UI and source. Preserve useful behavior.
Include complete flow and supporting contracts, ordered implementation
packets, acceptance checks, a living tracker, and a starting prompt.
Save it in the project's established docs location. Do not implement yet.
```

This is an invocation template, not a claim that a detailed spec was produced for the example. The [worked proof](/example) used focused mode.

## The handoff has a spine

| Part | What it resolves |
| --- | --- |
| Reading guide and decisions | Intended outcome, focus/exclusions, evidence, current capability, accepted choices, and assumptions. |
| Coherent interaction model | Entry points, useful content, navigation, controls, state ownership, responsive and input behavior. |
| Complete flows | Triggers, defaults, actions, transitions, identity/context, persistence, interruption, and recovery. |
| Supporting contracts | Existing modules and explicit additions; API/data work, compatibility, count/capability semantics. |
| Ordered packets | Independently deliverable work with stable IDs, prerequisites, owned modules, tasks, and acceptance coverage. |
| Living tracker | Phase/packet state, dated notes, issues, evidence, unrun checks, and the next action. |
| Implementation prompt | A copyable starting instruction tied to the next packet, its prerequisites, preservation, and verification. |

## Precision where it changes behavior

An ordinary reversible control needs less detail than an asynchronous or destructive workflow. Resolve the fields that change implementation decisions. For example, “preserve context” must specify which identity, query, focus, history entry, and scroll offsets survive which transition—and whether that persistence is in-session or durable.

A UI promise must have a supporting owner. If a proposed flow needs a missing API, data migration, or service capability, the packet must own it or state a real prerequisite. Existing and proposed modules must be distinguishable.

## Progress stays attached to evidence

| State | Meaning |
| --- | --- |
| Not started | Implementation has not begun. |
| In progress | Work has begun; required acceptance remains unmet. |
| Needs review | A reviewable result exists with checks and limits recorded. |
| Verified | Required acceptance passed; residual nonblocking issues are explicit. |
| Blocked | A concrete dependency, decision, access limit, or defect prevents the next necessary action. |
| Deferred | Outside this wave deliberately, with reason and activation condition. |

A scheduled prerequisite does not alone make later work blocked. Retain dated results and resolved issues, and identify superseded evidence. Never invent owners, dates, percentages, commits, or passed checks.

## Start implementation when authorized

Once the specification is reviewed, an implementation instruction can select one packet:

```text
Implement packet [PACKET_ID] from [SPEC_PATH]. Read its dependencies,
tracker, flow contracts, and acceptance first. Preserve unrelated changes,
user data, and the accepted focus/exclusions. Keep status and evidence
current. Verify the observable cases, record unrun checks and issues,
and identify the next action.
```

The report/spec request itself does not authorize implementation or publication. A preview may clarify the design; acceptance evidence establishes the implemented behavior.

<div class="doc-next"><a href="/install">Install and choose your mode <span aria-hidden="true">→</span></a><a href="/method">Read the shared method <span aria-hidden="true">→</span></a></div>
