---
title: See the potential. Design the experience.
description: How UXcalibur guides a coding agent from app assessment to coherent UX design and implementation, at every scale.
order: 4
---

<p class="doc-kicker">The method / shape, refine, hone</p>

<p class="lead">Understand the app as it is. Design the experience it could become. Carry that design through to the details people actually use.</p>

UXcalibur gives your coding agent a reusable method for expert UX work. It combines product understanding, design judgment, source and interface inspection, and implementation guidance. Read the [skill source](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/skills/uxcalibur/SKILL.md) and [full process](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/skills/uxcalibur/references/process.md).

## Understand the product

Inspect what the app does, who uses it, and how its important journeys work. Read the code and product context, and explore the running interface where available. Find its strengths as well as the obstacles and missed opportunities.

Review the mental model, too. Navigation, labels, metaphors, and onboarding teach people what a product is and how to wield it. A confusing product story can need as much design work as a confusing screen.

For a whole-app request, explore the meaningful surfaces and journeys. For a focused request, bring the same depth to that part. You can name priorities or areas to preserve; the agent can infer a useful starting point from the app itself.

## Shape, refine, hone

| Scale | What it can change |
| --- | --- |
| Shape | Product concepts and metaphors, information architecture, navigation, core journeys, action ownership, and substantial layout. |
| Refine | Interaction patterns, visual hierarchy, typography, spacing, content, responsive behavior, and accessibility. |
| Hone | Exact wording, focus, feedback, alignment, transitions, continuity, and loading, empty, or error states. |

These are ways to wield the blade. A prototype may benefit from all three; a mature app may need a focused refinement or a finishing pass. The method chooses the scale that serves the product and your request.

## Design one coherent experience

An expert review does more than list issues. It describes how the upgraded app should work and feel, with concrete choices about structure, journeys, interaction, and visual language.

Group changes around that direction. Explain the important tradeoffs, what deserves preservation, and how the work fits together. Make visual choices specific enough to build: content hierarchy, type roles, spacing, layout, color roles, component states, and responsive behavior.

## Turn direction into execution

Prioritize the work and connect it to the actual codebase. A recommendation should show the current behavior or opportunity, the proposed change, its rationale, affected surfaces, supporting implementation, and checks.

A [detailed upgrade specification](/spec) resolves the full design and behavior, dependencies, implementation packets, and progress tracker. When you ask for implementation, the agent carries that work into code and verifies it.

## Review the experience that ships

Check real journeys and inspect the rendered result at relevant sizes. Review hierarchy, readability, consistency, and detail alongside functional behavior. Counts, progress, persistence, and recovery need actual supporting code.

Keep observation, inference, proposed design, and verified implementation distinct. A polished mockup shows design direction; a passing build shows buildability. Neither establishes measured usability gains.

## A human-guided pass on UXcalibur

This product's own positioning is an example. Its first explanation emphasized “help people accomplish more” and a small list of changes. Human review exposed an unclear product promise and a metaphor that suggested too narrow a tool.

The revised direction makes the capability concrete: elevate an app's UX through expert assessment, design, and execution. The sword-from-the-stone story communicates potential; **shape, refine, hone** explains how to wield the method at different scales. This is a design decision informed by human review, not a measured usability study.

## Inspect what you install

| File | Purpose |
| --- | --- |
| `SKILL.md` | Purpose, assignment selection, design scales, and execution guidance. |
| `references/process.md` | Product understanding, assessment, design, and implementation workflow. |
| `references/spec-contract.md` | Detailed design, flows, packets, acceptance, and tracker contracts. |
| `references/product-brief.md` | Positioning, story, and deliverables. |
| `agents/openai.yaml` | Codex-facing skill metadata. |

The installer distributes the method files. Your coding agent supplies its model, tools, permissions, and data-processing environment. Use app evidence your host is authorized to inspect. A review request produces a review; ask for implementation when you want changes made.

<div class="doc-next"><a href="/install">Draw UXcalibur on your app <span aria-hidden="true">→</span></a><a href="/example">Inspect an implemented change <span aria-hidden="true">→</span></a></div>
