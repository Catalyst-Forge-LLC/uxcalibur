---
format_version: 0.1.0
id: decision-useful-help-coverage-20261023
kind: decision
title: "Prioritize useful guidance and task coverage over brevity"
record_status: active
created_at: 2026-10-23T14:44:20.292Z
updated_at: 2026-10-23T14:44:20.292Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  status: accepted
  choice: Replace removal-first guidance with understanding, successful use, organization before cutting, and verification of supported tasks.
  rationale: The owner reported that the earlier wording prompted excessive cuts to useful examples. Content should be judged by its purpose in context, not its category or length.
  authority: Owner accepted the clarification and requested updates to shared rules and UXcalibur on October 23, 2026.
  alternatives:
    - Keep the earlier removal-first wording and add only a CLI-specific exception.
    - Treat all taglines and repeated labels as noise, or preserve all examples regardless of purpose.
    - Describe useful coverage lost after a change without preserving it or disclosing the proposed tradeoff beforehand.
---

This decision refines the principles recorded in decision-experience-principles-20261022. Historical records remain intact. The source skill and shared workspace instructions now prioritize understanding and successful use, with UX, DX, and AX considered together.

Useful examples, defaults, constraints, edge cases, accessible meaning, and recovery guidance deserve preservation. Long help should be organized and made navigable before reducing its coverage. Taglines and repeated labels can be helpful in context; an example can also be redundant. Word and example counts alone do not demonstrate improvement.

The process and specification contract require identification of supported tasks before content or behavior is removed or replaced, an explicit proposal for material tradeoffs, and verification that the affected tasks remain supported. Capabilities and user data remain intact unless removal is explicitly authorized. Checks stay proportionate; small refinements need no mandatory matrix.

The ollanet reduction from 24 to 8 examples is owner-supplied feedback, not a reproduction performed in this change. This batch updates instructions and the installed skill only; it does not modify ollanet, product runtime behavior, or the website, and does not authorize a release or broader redesign.
