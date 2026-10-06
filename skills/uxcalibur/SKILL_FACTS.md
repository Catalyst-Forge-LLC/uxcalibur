---
skill_facts_version: 0.1.0
name: UXcalibur
developer: Catalyst Forge LLC
version: 0.1.0-dev
status: preview
license: MIT
kind: agents-skill
purpose: Elevate an existing app's user experience through expert UX review,
  design direction, and actionable implementation guidance.
provenance:
  source: https://github.com/Catalyst-Forge-LLC/uxcalibur/tree/main/skills/uxcalibur
  publisher: Catalyst Forge LLC
instructions_reach:
  shell: implied
  network: explicit
  filesystem: read-write
tools_referenced: []
bundled_artifacts:
  - path: SKILL.md
    kind: other
  - path: agents/openai.yaml
    kind: other
  - path: LICENSE
    kind: other
  - path: references/process.md
    kind: other
  - path: references/product-brief.md
    kind: other
  - path: references/spec-contract.md
    kind: other
  - path: SKILL_FACTS.md
    kind: other
egress:
  telemetry: none
  destinations: []
generated:
  date: 2026-10-06
  generator: skillfacts-from-pack
credits:
  generated_with: https://skillfacts.dev
  built_by: Catalyst Forge LLC - https://www.catalystforge.com/
homepage: https://uxcalibur.dev
repository: https://github.com/Catalyst-Forge-LLC/uxcalibur
---

# Skill Facts: UXcalibur

**[Open visual label][skillfacts-label]**

| Field | Value |
|---|---|
| Developer | Catalyst Forge LLC |
| Source version | 0.1.0-dev, an unpublished next-release revision |
| Status | Preview of the revised source method; npm 0.1.0 remains the published baseline |
| License | MIT |
| Kind | Agent skill, installable into Codex, Claude Code, and Cursor |

## Purpose

Elevate an existing app's user experience through expert UX review, design direction, and actionable implementation guidance.

Review an app broadly, refine a chosen aspect, or hone finishing details. The method produces a coherent design direction and prioritized changes. A detailed specification or implementation follows the user's assignment.

## Provenance

Source: [versioned skill directory](https://github.com/Catalyst-Forge-LLC/uxcalibur/tree/main/skills/uxcalibur). Publisher: Catalyst Forge LLC.

## Instructions reach

| Capability | Reach | Meaning |
|---|---|---|
| Shell | Implied | Running an app and verifying builds or tests can require shell tools |
| Network | Explicit | The method calls for checking current authoritative documentation when needed; a running app may also use the network |
| Filesystem | Read-write | Inspect source, save review/spec deliverables, and edit the app when implementation is requested |

This is instructional reach, not a grant of permissions. The host and user's authorization govern access and actions. A review request does not authorize app changes or publication.

## Tools referenced

No named tool API is required. Use the agent host's available source, browser, shell, and verification tools.

## Bundled artifacts

- `SKILL.md`
- `agents/openai.yaml`
- `LICENSE`
- `references/process.md`
- `references/product-brief.md`
- `references/spec-contract.md`
- `SKILL_FACTS.md`

## Egress

The skill contains instructions and metadata, with no executable runtime or telemetry endpoint. It defines no fixed data destination. The host supplies model processing and tools, and may send reviewed content to its configured providers. These labels do not describe the host's telemetry or privacy policy.

The host paths and installer behavior are checked for all three supported hosts. Actual model invocation was exercised in Codex; Claude Code and Cursor invocation remain unverified. Review output and predicted improvements are not measured usability gains.

*Scaffolded with [SkillFacts](https://skillfacts.dev), then reviewed against the full method by Codex for Catalyst Forge.*

[skillfacts-label]: https://skillfacts.dev/v#sf1.eNqVU02L2zAQ_StCl178sXvNrYQsLE17yS4sLEuQ7Yk9RJaMNHY2hPz3PjlttoU2tCdJTzOjpzdvTnrSi_tMO9OTXujnl9pYrsagM93QRNYPFIAvjRh7jKIefGhJrddLBEwUInuH67vivrjLkQA0ipExAhwCTUwHQJZrcjHV__r4hPOeXYODaclJzOOerQU6jGHwc9TK0mSElHGK3jkKu1aZYfgU1RgpAAMpJleTki74se0ukKjnF3V5NFMNRW6dajhQLWCZoVqjzLw3lSXF_WCpBwOTINWO3BiULBKT4Cdy6aQXJx39GNJOdyJDXJRly9KNVVH7vvypSz7rkkOXcnz_IWEpgajsDbty_mL8uJp_W1mO3d_UPWeaXZQwzoTjNpCpu5lNR1BroRN9pgaVHMnBhz0wqACpWQDu2FJESeqBI7nJD4GFUl3x3qaCOwpJQ3Ti9S3T1egaS83WBOEdZEIHX096MIJX9ebL43pd9M1H77wk6ufsGnJpZgm_OMPF0fT2RvD6cbn6tlndiLjSiyW6gSXefv73-Aay5RU8svvnrDhQndfeScDnb2fNamwfPi-fNn8KhJjUBjBO7RJKJpNwxL3zjua5So6eXZdEfkNLOt_TAAV_MdnVK8VlrAJhOFj8XOk_nYh0OMnVmCnwxJbO3wHHD1_X
