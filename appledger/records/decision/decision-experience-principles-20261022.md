---
format_version: 0.1.0
id: decision-experience-principles-20261022
kind: decision
title: "Preserve useful guidance and consider UX, DX, and AX together"
record_status: active
created_at: 2026-10-22T13:34:15.115Z
updated_at: 2026-10-22T13:34:15.115Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  status: accepted
  choice: Add clarity and joint UX/DX/AX principles to the skill, process, specification handoff, and shared workspace instructions.
  rationale: Remove redundant explanation while preserving necessary guidance, and make consequential experience tradeoffs and preservation checks explicit.
  authority: Owner accepted the refined principles and requested implementation on October 22, 2026.
  alternatives:
    - Remove all helper text and secondary labels regardless of their purpose.
    - Require every change to improve all three experiences equally and promise no breakage.
---

The skill entrypoint contains the approved principles. The process explains the removal test and defines AX as both agents using a product and agents working on its code. Material choices answer three questions: what improves for the user, what becomes easier or harder for developers and agents, and what must remain intact with which checks.

The specification contract and copyable implementation prompt carry those checks into delivery without adding a mandatory scoring matrix. The shared workspace AGENTS.md uses the same principles for general work. Existing capabilities, data, scope, accessible meaning, and useful guidance remain preservation requirements.

This is a bounded guidance update. No runtime change, new review tool, phase transition, release, or automatic expansion of project scope is authorized by these principles.
