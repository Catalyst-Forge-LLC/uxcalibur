---
skill_facts_version: 0.1.0
name: UXcalibur
developer: Catalyst Forge LLC
version: 0.1.3
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
| Source version | 0.1.2 |
| Status | Preview; check npm for published availability |
| License | MIT |
| Kind | Agent Skills bundle, with 12 installer presets |

## Purpose

Elevate an existing app's user experience through expert UX review, design direction, and actionable implementation guidance.

Review an app broadly, refine a chosen aspect, or hone finishing details. The method produces a coherent design direction and prioritized changes. A detailed specification or implementation follows the user's assignment.

The 0.1.2 installer supports Codex, Claude Code, Cursor, Grok Build (xAI), Gemini CLI, GitHub Copilot, OpenCode, Amp, Cline, Kilo Code, Roo Code, and a shared Agent Skills directory. See the [compatibility guide](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/docs/AGENT_COMPATIBILITY.md) for installation and documented host paths.

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

[skillfacts-label]: https://skillfacts.dev/v#sf1.eNqVU02L2zAQ_StCl1780e0xtxKyEJr2kl1YWJYg2xN7iCwZaexsCPnvfXLa3Rba0J4kPc2Mnt68OetJL-4y7UxPeqEfn2pjuRqDznRDE1k_UAC-NGLsKYq696EltdksETBRiOwdrj8Wd8UnIFGMjBHAEGhiOgKyXJOLqfbX9QPOB3YNDqYlJzGPB7YW6DCGwc9RK0uTEVLGKXrlKOxaZYbhQ1RjpAAMhJhcTUq64Me2u0KiHp_U9dFMNRS5darhQLWAYYZqjTLz3lSWFPeDpR4MTIJUO3JjULJITIKfyKWTXpx19GNIO92JDHFRli1LN1ZF7fvypyb5rEkOTcrx9Yd8pQSisjfsyvmL8f1q_m1lOXZ_U_aSaXZRwjgTjrtApu5mNh1BrYVO9JkaVHIkRx8OwKACpGYBuGdLESWpB47kJj8GFkp1xXubCu4pJA3RieeXTFejayw1OxOE95AJHXw-68EIXtXbL-vNpuib9955SdQv2VvItZklvOIMFyfT2xvBm_Vy9W27uhHxRi-W6AaWePv53-MbyJZX8Mj-n7PiQHVeeycBn7-dNauxu_-8fNj-KRBiUhvAOLVLKJlMwgn3zjuaZyo5enZdEvkFLel8TwMU_MVkb14pMIPICoThYPFzpf90ItLhJFdjpsATW7p8BziYXm0
