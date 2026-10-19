---
title: Design the upgrade. Build the experience.
description: Turn UX design direction into an executable specification, from product structure and visual craft to flows, implementation packets, and verification.
order: 3
---

<p class="doc-kicker">The design-to-build handoff</p>

<p class="lead">An exceptional experience needs a coherent design and thoughtful execution. A detailed upgrade specification connects the two.</p>

Ask for a detailed specification when you want implementation-ready design and behavior. It can cover a whole-app transformation, a focused refinement, or a precision polish pass. See the [full specification contract](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/skills/uxcalibur/references/spec-contract.md).

## Ask for the experience you want to build

This example uses the Codex invocation. In Claude Code or Cursor, start with `/uxcalibur`.

```text
$uxcalibur
Create a detailed UX upgrade specification for this app.
Inspect its codebase and running interface. Design a coherent target
experience across product structure, core journeys, interaction,
visual design, and the details of use. Preserve what already works.
Include concrete design and behavior, supporting contracts, ordered
implementation packets, acceptance checks, a tracker, and a starting prompt.
Do not implement yet.
```

This is an invocation template, not a claim that a detailed spec was produced for the example. The [worked proof](/example) used focused mode.

## The handoff has a spine

| Part | What it resolves |
| --- | --- |
| Design direction and decisions | Target experience, audience, rationale, evidence, accepted choices, assumptions, and any requested boundaries. |
| Product and visual system | Mental model, navigation, composition, type/spacing/color roles, component states, and responsive interaction. |
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
