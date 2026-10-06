---
title: Evidence before a cut.
description: How UXcalibur connects a chosen user outcome to observations, ranked cuts, implementation contracts, and honest verification.
order: 4
---

<p class="doc-kicker">The method / versioned source and references</p>

<p class="lead">Start with what a person needs to accomplish or improve. Follow the actual work. Recommend only what the evidence and requested boundary justify.</p>

UXcalibur is a skill and its supporting references. The installed files guide your coding agent's judgment; the agent supplies the model, evidence access, tools, and permissions. Read the [skill source](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/skills/uxcalibur/SKILL.md) and [full analysis process](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/skills/uxcalibur/references/process.md).

## 1. Frame the work

Choose an app, one flow or bounded aspect, the desired outcome, focus areas, exclusions, and observable criteria. Better outcomes may mean completion, result quality, useful capability, or less effort. A stated problem is evidence of that problem; it does not dictate a particular component or redesign.

> Help the user accomplish [job] or improve [outcome] from [starting context], focusing on [aspects], excluding [aspects], preserving [capabilities/data], and checking [observable criteria].

The boundary carries through inspection, ranking, recommendations, and implementation. If a necessary dependency touches an excluded area, the report should explain the conflict and a scoped alternative or decision.

## 2. Map capability and evidence

Read project instructions and relevant product, source, route, API, schema, test, and setup information. Follow representative operations in the running interface where access permits. Check what success proves, how failure reaches the person, what owns state, and what survives a transition or restart.

| Evidence class | What the report should say |
| --- | --- |
| Observed | What happened, in which state, and how to reproduce it; artifact or source locator. |
| Inferred | The likely consequence or cause, with the evidence and confidence behind it. |
| Proposed | A behavior or supporting contract to implement, clearly separated from existing capability. |
| Unverified | The assumption, inaccessible evidence, or check that remains unrun. |

A screenshot records a state. Source records possible behavior. Neither alone proves a complete operation.

## 3. Rank within the chosen outcome

Look for obstacles, missing support, and opportunities that affect the specified job or improvement. Explain consequences in practical terms: waiting, reconstructing context, decoding language, checking acknowledgment, or repeating work. Preserve useful existing behavior and architecture.

Return the few justified cuts. No fixed count is required, and no actionable finding is a valid result. Rank by consequence and evidence within the selected focus areas. A prediction about improved outcomes stays a prediction until it is measured.

## 4. Resolve the supporting contract

A useful recommendation states more than “make this clearer.” Define the trigger and scope, transitions, affected identity, history/focus/scroll context, persistence, acknowledgment, interruption, and recovery that change implementation decisions.

Connect the interface promise to actual ownership. Counts require count semantics. Undo requires reversibility. Progress requires an observable job. Persistence requires an owned storage contract. Missing API or data work belongs in the packet or in an explicit prerequisite.

## 5. Verify the chosen result

An acceptance check names the fixture/context, action, observable result, and method. Use meaningful unit or integration checks for state/data, rendered checks for interaction, and actual operations when platform capability matters. Preserve unrelated changes and user data.

Track proposed, in-progress, and verified work separately. A passing build or visual preview does not verify every interaction, recovery, or data contract. Keep evidence and unrun checks visible, including failures.

## Two output modes, shared depth

The default [focused pass](/install#invoke-a-focused-pass) is a concise ranked cut list with deep contracts underneath. An explicitly requested [upgrade specification](/spec) retains broader flow, implementation, dependency, and progress detail. Length is not a quality measure.

Implementation is a separate authorized step. A report request authorizes the report, its evidence, and its tracker; it does not automatically authorize code changes, integrations, or publication.

## Inspect what you install

| File | Purpose |
| --- | --- |
| `SKILL.md` | Entry point, scope, deliverable selection, quality rules. |
| `references/process.md` | The analysis process and evidence-to-implementation workflow. |
| `references/spec-contract.md` | Detailed specification, flows, packets, acceptance, and tracker contracts. |
| `references/product-brief.md` | Positioning and deliverable selection. |
| `agents/openai.yaml` | Codex-facing skill metadata. |

The installer distributes this versioned method. Your host's configured model, provider, tools, permissions, and data-processing rules remain in effect. Review what evidence you authorize it to read.

<div class="doc-next"><a href="/example">See the method in an actual pass <span aria-hidden="true">→</span></a><a href="/contribute">Contribute evidence or improvements <span aria-hidden="true">→</span></a></div>
