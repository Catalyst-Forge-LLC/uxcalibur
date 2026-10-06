---
name: uxcalibur
license: MIT
description: Elevate an existing app's user experience through expert UX review, design direction, and actionable implementation guidance. Use for whole-app transformations, focused refinements, or precision polish across product structure, user journeys, interaction, visual design, and accessibility.
---

# UXcalibur

Draw out the exceptional experience waiting inside an app. Give the coding agent an expert UX method to recognize the product's potential, design a coherent upgrade, and execute it when requested. Wield the blade at the scale the work needs: broad strokes, thoughtful refinements, and precision honing.

Read [references/process.md](references/process.md) for the review and design process. For an implementation-ready specification, also read [references/spec-contract.md](references/spec-contract.md). For UXcalibur positioning or deliverable selection, read [references/product-brief.md](references/product-brief.md). Preserve accepted decisions and progress evidence when updating a spec.

## Match the assignment

- **App review:** when asked to review an app or codebase broadly, inspect its meaningful surfaces and core journeys. Show the current experience, the proposed design direction, and a prioritized path to that experience. Do not silently reduce a whole-app request to one flow or a small finding quota.
- **Focused refinement or polish:** when the user selects a flow, aspect, or level of change, bring the same design depth to that scope. A mature product may need precision honing rather than structural change.
- **Upgrade specification:** when asked for a detailed plan or implementation-ready spec, resolve the design, flow/state/data contracts, implementation packets, acceptance coverage, and progress tracker.
- **Implementation:** when asked to make the upgrade, carry the authorized design through code and verification. A review request produces the review; it does not itself authorize app changes or publication. Use existing authorization without requiring another ritual approval.

Infer the app's audience, purpose, and important jobs from available evidence. State material assumptions and inspect the breadth the request implies. Distinguish product requirements from an earlier audit's task-specific boundaries; use the current assignment to determine review scope. Optional focus areas and exclusions guide the work when supplied; do not make users fill out an intake form before inspecting an accessible product. Ask only when missing information would materially change a design decision.

## Shape, refine, hone

These are scales of design judgment, not a mandatory sequence or three deliverables:

- **Shape:** product concepts and mental models, information architecture, navigation, core journeys, action ownership, and substantial layout or capability changes. Identify where a coherent redesign can lift the entire experience.
- **Refine:** interaction patterns, visual hierarchy, typography, spacing, content, responsive behavior, accessibility, and useful feedback. Make the product feel intentional and consistent across surfaces.
- **Hone:** precise language, focus and keyboard behavior, alignment, transitions, loading/empty/error states, and small continuity details. Tie polish to the actual experience rather than adding ornament.

Inspect across these scales within the assignment, then choose the changes that serve the product. Preserve effective design. A visual refresh can be the right solution; so can a deeper journey redesign or a targeted finishing pass. Avoid forcing every app into the same aesthetic, layout, or component recipe.

## Define an exceptional target experience

Start the deliverable with a concrete diagnosis and design direction: what the app does, where its experience falls short, and how the upgraded experience should work and feel. Describe recognizable before/after behavior rather than repeating "make it world-class." Explain the important product and visual choices so the implementer can create one coherent experience.

Cover structure and journeys, interaction, visual craft, content, responsive/accessibility behavior, and state/recovery where relevant. Connect recommendations to actual screens, source, or supplied artifacts. Separate observed behavior, inference, proposed design, and unverified assumptions. Expert recommendations can improve a competent interface without pretending every design opportunity is a proven defect.

Assess how the product teaches people what it is and how to use it. Names, labels, metaphors, navigation, and onboarding create its mental model. Reshape confusing concepts when needed, and map the proposed metaphor to real capabilities and controls. Human feedback is useful design evidence; distinguish it from observed runtime behavior and measured usability. A compelling metaphor should clarify the product's range rather than accidentally limit it or require users to learn invented lore.

Prioritize the transformation by user value, design coherence, frequency, dependencies, and risk. Group related changes into a design direction rather than an unrelated heuristic list. Use concrete cuts/refinements with rationale, affected surfaces, proposed behavior/design, supporting work, preservation needs, and observable checks. Give visual direction enough specificity to implement: hierarchy, type roles, spacing rhythm, layout, color roles, states, and platform conventions as appropriate.

A preview can clarify the target experience. Label sample content and proposed behavior. For substantial visual work, inspect representative rendered screens at relevant sizes; source and a passing build do not establish visual quality.

## Carry design through execution

Connect frontend promises to real support: counts, progress, identities, persistence, acknowledged writes, Undo, and capabilities need existing contracts or owned implementation work. Preserve useful architecture, user data, and unrelated changes. A stronger UX does not inherently require a new framework, database, service, or brand.

An implementation-ready spec includes coherent navigation and flow rules, responsive/accessibility behavior, loading/empty/error/recovery states, explicit data/API changes, ordered packets with dependencies and module ownership, acceptance cases, a living tracker, and a copyable starting prompt. Keep proposed implementation separate from verified capability; initialize new packets as Not started unless their outcomes are demonstrated.

During implementation, verify real journeys and render the changed experience. Review composition and detail as well as functional checks. Update the design/spec and progress evidence as necessary; do not call the transformation complete because code builds.

## Evidence and working boundaries

Honor requested focus areas and exclusions throughout inspection and execution. If a supporting change touches an excluded area, explain the dependency and a scoped alternative. Prefer the project's established output locations.

For a read-only review, inspect entry-point side effects before interacting. Opening a plan or review can write activity or request an app-side model draft; its label, `apply:false`, or HTTP method does not establish safety. Use authorized inspection paths and distinguish exercised behavior from source-supported paths. Retain only needed evidence and keep private app content out of public examples or repositories unless publication is authorized.

## Completion

Show the saved deliverable or reviewable implementation, the design direction and highest-impact changes, and verification limits. For a spec, identify the next packet. "World-class" describes the quality ambition; explain what was designed, implemented, and checked. A mockup or build does not prove usability, and predicted user improvements remain predictions until measured.
