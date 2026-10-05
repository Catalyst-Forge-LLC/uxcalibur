---
name: uxcalibur
description: Audit an existing app or tool for friction in a specific user flow and produce a ranked, actionable cut list. When requested, expand into a detailed UX upgrade spec with implementation packets, acceptance criteria, and phase/packet progress, notes, and issues.
---

# UXcalibur

Pull a usable interface out of the mess. Produce a few justified, implementable changes for the user's chosen flow. Retain detailed evidence, behavior, failure handling, dependencies, and verification underneath; do not turn the output into a long generic heuristic dump.

Read [references/process.md](references/process.md) for the analysis process. For a detailed specification, also read [references/spec-contract.md](references/spec-contract.md). For UXcalibur product positioning or deliverable selection, read [references/product-brief.md](references/product-brief.md). When updating a spec, preserve its accepted decisions and progress evidence.

## Choose the deliverable

- **Focused pass (default):** one app, one flow; a ranked cut list of the few changes most likely to improve completion. Show the observed knot, evidence, proposed cut, supporting contract, acceptance check, and confidence for each. Keep analysis deep and the report concise. Select changes by consequence, not a mandatory finding count.
- **Upgrade specification (explicit):** a requested broader or implementation-ready review, such as a whole-app spec. Use the full contracts below and retain implementation detail. This mode preserves the depth of the original workflow.
- **Implementation (when authorized):** apply the agreed cuts/packet and verify them. Produce a reviewable diff or PR as requested; a report request alone does not authorize code changes or publishing.

State the chosen app/flow and its completion condition. If no flow is given, recommend a primary flow from available evidence and make the assumption explicit; ask when the choice materially changes the work. Do not expand a focused pass into a whole-product redesign.

## Scope and outcome

Use the user's requested scope. For a whole-product review, inspect every meaningful surface and supporting workflow, including setup, maintenance, recovery, and integrations where present. For a narrower request, produce the same depth within that scope.

Prefer established documentation/output locations. A focused report leads with the completion goal and ranked cuts; each cut carries enough implementation detail to be actionable. A detailed upgrade spec includes:

- Review decisions and an evidence-grounded current-state audit.
- A coherent navigation model and concrete interaction rules for each relevant flow.
- Responsive/accessibility behavior and honest loading, empty, error, and recovery states.
- Explicit data/API additions and compatibility constraints.
- Ordered implementation packets with dependencies, module ownership, steps, and acceptance coverage.
- A living phase and packet tracker with status, notes, issues, and evidence.
- A copyable implementation prompt and a clear starting packet.

A visual preview can clarify spatial behavior and interaction. It supports the contracts; it does not replace them. Distinguish sample content and unverified behavior from a running implementation.

## Quality rules

1. Begin with user jobs and observed friction; inspect code/interfaces to identify causes. Separate observed behavior, inference, recommendation, and unverified assumptions.
2. Design one coherent model before polishing controls. Optimize common jobs for useful content, continuity, readable language, fewer unnecessary steps, and discoverability.
3. Write flow contracts: trigger, scope, transition, focus/history/scroll behavior, persistence, acknowledgment, interruption, and recovery. Resolve edge behavior that changes implementation decisions.
4. Connect frontend promises to actual supporting contracts. Counts, pagination, progress, persistence, Undo, identities, and capabilities require evidence or explicit implementation work.
5. Preserve existing user data and useful architecture. A UX pass does not inherently require a new framework, database, visual identity, or service.
6. Make packets reviewable within their dependency chain. Avoid circular prerequisites and unspecified shared work. Include supporting server/data work or name its prerequisite.
7. Track proposed implementation separately from pre-existing capability. Initialize new packets as Not started unless specified outcomes are verified. Record partial work without invented percentages.
8. Validate coverage, dependencies, sources, links, example contracts, status consistency, and whether a less capable implementer still has to make a major product decision.

A report/spec request authorizes that deliverable and its tracker. Implement when requested; a favorable review comment does not authorize every proposed bulk job, integration, or deployment. During authorized implementation, update status and evidence as part of the work.

## Completion

Show the saved deliverable, highest-impact changes, and verification limits. For a spec, identify its next packet. Give an invocation when requested. A build or mockup does not prove usability, and a predicted improvement in completion is not a measured result.
