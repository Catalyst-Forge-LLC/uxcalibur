# UXcalibur: the analysis process

Turn product evidence into an executable improvement plan. Apply this to web, desktop, mobile, command-line, administrative, and mixed products. Retain requirements depth while changing the product-specific flows, measurements, architecture, examples, and language. The same analysis supports a short focused cut list or an explicitly requested detailed specification; report length is not a measure of analysis quality.

Contents: frame the assignment; gather evidence; audit effort; choose the model; specify flows; connect contracts; package implementation; track delivery; validate the handoff.

## 1. Frame the assignment around real work

Extract scope, goals, frustrations, existing preferences, and constraints. Identify the primary jobs that explain why the product is used. Separate a stated problem from a hypothesis about its cause.

"I cannot see the selected item quickly" establishes delayed useful content. It does not dictate tabs, a sidebar, a modal, or a particular width. "Keep browsing while reading an item" adds continuity. Design for these requirements before choosing components.

Capture context affecting the design: task frequency, data volume, common versus exceptional work, devices/input methods, long-lived work, local/remote boundaries, accessibility, setup, and expert versus first-time use. Infer routine choices from evidence. Ask only for information that changes the outcome and continue independent investigation while waiting.

Use this working statement:

> The user should be able to [primary job] from [starting context], with [continuity/effort requirements], while preserving [important existing capabilities and data].

## 2. Build a capability and evidence map

Read project instructions and existing product/design documents. Inspect implementation, routes, API/schema definitions, tests, help, config, and setup instructions alongside any available running UI. A screenshot is evidence of one state, not the whole product. If evidence is inaccessible, name that limitation.

Inventory relevant surfaces: default/landing/navigation; browse/search/filter/sort; selection/detail/edit; creation/capture/import/submission; background jobs/notifications; organization/saved states/bulk actions; removal/restore/export; first use/preferences/settings; startup/help/diagnostics; permissions and integrations; CLI/API/automation when actually used.

Follow representative operations end to end. Check what success proves, how failure reaches the user, whether writes are acknowledged, what survives restart, and whether client or server owns filtering/scope/sort. Inspect state and integrity before promising an easier interface.

Keep a working evidence ledger:

| Evidence | Source | User effect | Certainty |
| --- | --- | --- | --- |
| Exact behavior, limit, or observation | File/function, route, UI, or supplied artifact | What a person must do or cannot trust | Observed / inferred / unverified |

Make the final audit traceable to these sources. Verify current documentation when needed and use authoritative sources for technical, platform, and accessibility claims. Product dimensions, priorities, and defaults are recommendations rather than research findings. Prefer a few relevant references over a citation collection.

## 3. Audit effort and uncertainty

Explain friction through user consequences: waiting, scrolling, decoding, remembering, repeating, finding controls, reconstructing context, or checking whether something happened.

Investigate delayed useful content from large panels, duplicated framing, metadata, diagnostics, or empty regions. Look for hidden scope, unclear labels/defaults, and redundant constraints. Check for lost selection after filters, hydration, background updates, Back, or resize. Notice accidental actions where one control performs competing jobs.

Inspect fictional certainty: capped counts described as totals, saved work described as completed, and optimistic UI described as acknowledged success. Find silent failures, generic Retry that repeats the wrong stage, and missing interruption behavior. Examine destructive shortcuts, unrecoverable data, expert controls mixed with daily work, and undiscoverable important actions. Separate empty, no-match, offline, unconfigured, and unauthorized states.

Create an audit table with finding, consequence, evidence, correction, and priority. Identify useful baseline behavior and regression risks separately from new capability. Prioritize by user impact, frequency, prerequisite value, and integrity risk; define the priority scale rather than assuming another product's tiers.

For a focused pass, treat the audit as working evidence and publish only the cuts that matter to the chosen completion goal. Buried primary actions, dead ends, guilt-inducing copy, unexplained icons, and flows that lose context are candidates to inspect, not automatic findings. Distinguish an observed obstacle from a hypothesis about abandonment. Quantified completion/conversion claims require actual evidence.

## 4. Choose a coherent product model

Decide information architecture and action ownership before component polish. Define default view, named scopes, primary content, global actions, contextual actions, and exceptional workflows. Give actions predictable homes; add alternate entry points when they shorten a real task.

Use labeled disclosure for optional complexity, with meaningful names, counts, disabled reasons, and contextual help for discoverability. Recover space from duplicated controls and framing before shrinking text or targets. Explain important tradeoffs such as review steps, default scope, or separate detail surfaces. Preserve the user's chosen concepts and capabilities unless a supported reason warrants revision.

For spatial products, specify viewport-based geometry, panes/regions, maximum widths where justified, breakpoints, scroll ownership, content measure, height budgets, and overflow/reflow. Distinguish flexible budgets from hard constraints.

For nonvisual tools, specify equivalent structure: command hierarchy, default/verbose output, progress stream, error remedies, prompts, exit codes, and machine-readable output. Do not impose a browser layout on a CLI.

A preview can clarify selection, disclosure, density, reflow, and state changes. Use representative sample content including difficult cases. Label proposed behavior and disclose verification. A polished preview does not prove real data/runtime support.

## 5. Specify flows, continuity, and recovery

Use the per-flow contract in spec-contract.md. Resolve entry points, defaults, action/outcome, ownership, persistence, and failures. State only the edge cases that change design or implementation, but do not omit the lifecycle of an async or destructive operation.

Resolve selection/result relationships, outside-results selection, and Previous/Next boundaries. Define history push/replace, refresh/deep-link restoration, and what Back must never replay. Define focus for keyboard/pointer/touch, responsive transitions, and closing overlays. Name scroll containers and remembered positions. Specify stale-response handling, retained usable content, and background updates that preserve the current task.

Identify URL, session, preference, saved-record, and server-job state. Separate presentation choices from human decisions.

For discovery, specify filter AND/OR, dates/timezone/precision, scope, global versus candidate-window sort, pagination, count meaning, and no-match recovery. "Supports filtering" is insufficient.

For creation/import, specify draft ownership, submit acknowledgment, per-item outcomes, cancellation/discard, retry, duplicates/conflicts, and navigation/restart persistence. Do not promise durable drafts without storage.

For processing, distinguish saved, queued, running, usable output, failed stage, interrupted, and completed. Use percentages/positions only from actual data. Name recovery after the failed operation and retain already usable output.

For edits/organization/bulk/removal, specify human/model ownership, concurrent writes, identity/bundle integrity, acknowledgment, rollback, restore conflicts, and permanent deletion. Undo must correspond to an actual recoverable operation.

For settings/setup/help, distinguish requested/effective settings, saved/applied/restart, required/optional readiness, disabled reasons, and task-specific remedies. Put developer terminology in diagnostics rather than ordinary controls.

Embed accessibility in real flows: selectable text, native controls, semantics, keyboard patterns, focus visibility, zoom/reflow, target sizes, contrast, reduced motion, and hover/touch equivalents. Cite standards accurately; proposed requirements are not achieved compliance.

## 6. Connect promises to supporting contracts

List current contracts and proposed additions separately. Assign each addition to a packet and identify what cannot be delivered honestly before it exists.

Investigate complete counts/paging, stable identities through moves, job state, capabilities, upload outcomes, acknowledged edits, persistent drafts, and restore manifests where relevant. These are examples to check, not universal features to add.

Use additive types/response shapes when they remove uncertainty. Define field meaning, defaults, precision, source of truth, compatibility, and migration. Preserve old records and callers unless a requested breaking change has a migration plan.

Do not simulate backend guarantees in the frontend or replace adequate architecture as a prerequisite. Preserve established access/path/security rules. Treat external processing and integration destinations as explicit product choices.

## 7. Package implementation into bounded packets

Group by independently demonstrable behavior and dependency chain. Each packet names result, prerequisites, current modules, deliberate new modules, ordered tasks, supporting contracts, acceptance coverage, and definition of done.

Start with foundational state/contracts where later layouts depend on them. Separate enhancements from prerequisites. Split mixed-priority work into a named subpacket when independently deliverable.

Audit dependency directions. An identity migration is not an unnamed prerequisite if the packet creates it. Read-only settings can ship before validated editing without fake inputs. A client OR filter needs an owned server contract, not filtering a capped subset while paging arrives later.

Number acceptance scenarios with trigger, observable outcome, fixture/context, and verification method. Include dense content, stale responses, failed writes, interruption, old data, and preservation risks that apply. Assign packet ownership and explicitly mark shared cases.

Provide a copyable prompt for the starting packet: required reading, preservation, missing prerequisites, meaningful checks, evidence, and progress updates. Respect the authorized scope; do not impose an unnecessary approval loop after every packet.

## 8. Track delivery inside the specification

Use the tracking contract in spec-contract.md. Maintain phase summaries, a packet ledger, dated execution notes, issues, and verification evidence. Stable IDs let later chats, diffs, and commits refer to the same work.

Initialize truthfully: reusable existing pieces do not make the new packet verified. Document the baseline. Record actual changes, decisions, checks, failures, and next action during implementation. Preserve partial work when stopped or scope changes.

Separate Needs review from Verified. A build does not prove acceptance cases. Keep unresolved issues visible when summarizing a phase. Progress is evidence rather than a decorative percentage.

## 9. Validate and present the handoff

Check coverage against the inventory/jobs. Trace meaningful recommendations to flow, supporting contract, packet, acceptance case, and tracking entry. Resolve contradictions, hidden scope, circular prerequisites, and proposed APIs described as existing.

Read as the next implementer: are defaults, combinations, boundaries, failures, source fields, modules, and checks explicit? Fill product-decision gaps rather than adding generic advice.

Verify structure, links, existing paths, new-file labels, example types, and status/evidence consistency. Validate supplied scripts and inspect previews when permitted. Record limits and respect tool/security blocks.

Show the saved spec. Lead with its coverage, key recommendation, review choices, and next packet. Keep conversation concise and implementation depth in the document.
