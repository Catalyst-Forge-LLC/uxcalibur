---
app_facts_version: 0.1.0
name: UXcalibur
type: agent skill / CLI installer
status: active
license: MIT
version: 0.1.0-dev
repository: https://github.com/Catalyst-Forge-LLC/uxcalibur
stack:
  language: Markdown, YAML, TypeScript, JavaScript
  runtime: Node.js 20.19+ (installer); model and tools supplied by the agent host
  site: FilePress 0.1.50; static developer site on Cloudflare Pages
  tooling: pnpm; Node.js 22.12+ for development
key_dependencies:
  - name: getfilepress
    purpose: Developer site build only; absent from the npm installer
    registry: npm
  - name: typescript
    purpose: Installer compilation and private proof harness only
    registry: npm
  - name: "@playwright/test"
    purpose: Private fixture and site verification only
    registry: npm
build:
  package_manager: pnpm
  compile: pnpm package:build
  test: pnpm package:check
  site: pnpm site:check
generated:
  date: 2026-10-06
  generator: appfacts-cli v0.1.0 (scaffold)
  inputs_fingerprint: be1572aa3c621870
credits:
  generated_with: https://appfacts.dev
  built_by: Catalyst Forge — https://www.catalystforge.com/
homepage: https://uxcalibur.dev
services:
  - name: Cloudflare Pages
    role: Hosts the static developer site; no operated UX review service
---

# App Facts: UXcalibur

An expert UX method for coding agents, with a dependency-free npm installer.

**[Open visual label][appfacts-label]**

| Field | Value |
|---|---|
| Type | Agent skill / CLI installer |
| Status | Active, pre-1.0 |
| License | MIT |
| Source version | 0.1.0-dev, an unpublished next-release revision |
| Published baseline | npm uxcalibur 0.1.0 |

## Stack and services

| Layer | Choice |
|---|---|
| Method | Markdown and YAML |
| Installer | TypeScript compiled to JavaScript; Node.js 20.19+ |
| Agent runtime | The host supplies its model, tools, permissions, and data-processing environment |
| Developer site | FilePress 0.1.50; static Cloudflare Pages hosting |
| Development | pnpm; Node.js 22.12+; TypeScript and Playwright |

The published installer has no runtime dependencies, model runtime, telemetry, or automatic audit command. FilePress, TypeScript, and Playwright are development dependencies. Cloudflare serves the developer site; it does not perform UX reviews. The agent host governs any model calls or data disclosure during a review or implementation.

The source candidate adds Grok/xAI and other current Agent Skills hosts, for 12 install presets including a shared directory. The method has no fixed model provider. Published npm 0.1.0 retains the original three presets. [Compatibility and verification limits](docs/AGENT_COMPATIBILITY.md) describe the source build.

## Build and verification

- Package build: `pnpm package:build`
- Packed installation checks: `pnpm package:check`
- Developer site: `pnpm site:check`

The input fingerprint records the generator's scanned inputs. It does not certify these curated claims or measure UX efficacy.

[Developer site](https://uxcalibur.dev) · [Repository](https://github.com/Catalyst-Forge-LLC/uxcalibur)

*Scaffolded with [AppFacts](https://appfacts.dev), then reviewed against the source by Codex for Catalyst Forge. Built by [Catalyst Forge](https://www.catalystforge.com/).*

[appfacts-label]: https://appfacts.dev/v#af1.eNptU11r20AQ_CvLPbVEkWNDH2q9pLiEujjF0ARSSglnaSVdfbo77k5yhPF_764ku2nJk8_7MbMzuzqKTizniTCyQbEUj0-51GrXepGI2DsOyQpNhLBXWsMMVps1KBOi1Bq5iF6xDVyWR9UhRbTK0QTuvF8_jBX5XiyPQktTtYTGGen3hT2YBH58ut8k8EBU33OvXEzgq-zk-KZm35qohsm-2QLT3wEWN-n84xW8uwzxPoOGchqkKSBaqwOE1jmtsIBdD7FGGCXUNjBkUJHx7pTGrccQgADTDzcZsBSVQ4EdauvQA1eCNbDSti1KLT3ClqACe0M8ylSE44xrMrhMt0jniysorT_jNEQtToko0JFNP4_CUFOFsSR-x_yE5ij0-V_aXat0QeS6z0DuAs9fetsMcojx1Q5OyYjJ6wpn3xhxfS6B3DZOaVJHYtgl51UnicR5a0uopTfsA5Nd0G6dlv3Bq6qOs4jhjLmdOkv1Elvyg9GGeTv0qlT5yDEi_SKvu_yi-Q0XPYW_0FbCIOtN_zMwFvgfsRbw-AQeO4UHCOg7OrSBZfCKL8zRpRH0cyMN_fhpO0Q0GoBTAKa65dhI22SB_-XyGulsL-cy5Pg9JWijtW3Qjfdcx-jCcjZrX6bPJyUVLBCdpSbr-1dFlYp1u0tpptlK0ob6EK_vrK_werNZ_YUQpz_ipj3m
