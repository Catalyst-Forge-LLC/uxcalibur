---
skill_facts_version: 0.1.0
name: UXcalibur
developer: Catalyst Forge LLC
version: 0.1.1
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
  date: 2026-10-14
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
| Source version | 0.1.1 |
| Status | Preview; check npm for published availability |
| License | MIT |
| Kind | Agent Skills bundle, with 12 installer presets |

## Purpose

Elevate an existing app's user experience through expert UX review, design direction, and actionable implementation guidance.

Review an app broadly, refine a chosen aspect, or hone finishing details. The method produces a coherent design direction and prioritized changes. A detailed specification or implementation follows the user's assignment.

The 0.1.1 installer supports Codex, Claude Code, Cursor, Grok Build (xAI), Gemini CLI, GitHub Copilot, OpenCode, Amp, Cline, Kilo Code, Roo Code, and a shared Agent Skills directory. See the [compatibility guide](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/docs/AGENT_COMPATIBILITY.md) for installation and documented host paths.

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

The method is model-provider independent. Grok Build can discover the native skill; Grok models can also run through a compatible host such as OpenCode. Optional `agents/openai.yaml` metadata describes the Codex UI and does not make an OpenAI runtime a requirement.

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

All 12 source install presets pass packed-file, isolated personal/project placement, upgrade, backup, and error-path checks. Actual model invocation was exercised in Codex; other host invocations remain unverified. A shared directory is useful only where the host discovers it. Review output and predicted improvements are not measured usability gains.

*Scaffolded with [SkillFacts](https://skillfacts.dev), then reviewed against the full method by Codex for Catalyst Forge.*

[skillfacts-label]: https://skillfacts.dev/v#sf1.eNqVU02L2zAQ_StCl1780VxzKyELoWkv2YWFZQmyPbGHyJKRxsmGkP_eJ6fNttAN7UnS08zo6c2bsz7o-SzTzvSk5_rpuTaWqzHoTDd0IOsHCsAXRow9RVEPPrSk1usFAg4UInuH68_FrJgBiWJkjACGQAemIyDLNbmYan9bPeK8Z9fgYFpyEvO4Z2uBDmMY_BS1tHQwQso4RW8chV2rzDB8imqMFICBEJOrSUkX_Nh2V0jU07O6PpqphiK3TjUcqBYwzFCtUWbam8qS4n6w1IOBSZBqR24MShaJSfAHcumk52cd_RjSTnciQ5yXZcvSjVVR-778pUk-aZJDk3J8-ylfKYGo7A27cvpifL-afltZjt1Hyl4yzS5KGCfCcRvI1N3EpiOoNdeJPlODSo7k6MMeGFSA1CwAd2wpoiT1wJHc5MfAQqmueG9TwR2FpCE68fKa6Wp0jaVma4LwDjKhgy9nPRjBq3rzdbVeF33z3jsvifolu4Vcm1nCK85wcTK9vRO8Xi2W3zfLOxE3erFEN7DE-8__Gd9AtryCR3b_nBUHqvPaOwn4_P2sSY3tw5fF4-ZvgRCT2gDGqV1CyWQSTrh33tE0U8nRk-uSyK9oSed7GqDgbya7eaXADCIrEIaDxU-V_tOJSIeTXI2ZAk9s6fIDNO5ebA
