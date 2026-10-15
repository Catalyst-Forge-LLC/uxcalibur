# UXcalibur

**Turn rough apps into exceptional experiences.** Give your coding agent an expert UX method to inspect an app, design a coherent upgrade, and carry it through implementation.

Like the sword drawn from the stone, UXcalibur draws out the potential already in your app. It looks beyond surface polish: product structure, navigation, user journeys, interaction, language, visual design, and accessibility all shape the experience.

[Website](https://uxcalibur.dev) · [npm](https://www.npmjs.com/package/uxcalibur) · [Agent compatibility](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/docs/AGENT_COMPATIBILITY.md)

## Install

Requires Node.js 20.19+ and a coding agent. Choose your host:

```sh
npx uxcalibur@latest install --agent codex
npx uxcalibur@latest install --agent claude
npx uxcalibur@latest install --agent cursor
```

The default is a personal installation. Add `--project` to install into the current app's project instead.

UXcalibur also includes presets for **Grok Build (xAI), Gemini CLI, GitHub Copilot, OpenCode, Amp, Cline, Kilo Code, Roo Code**, and shared Agent Skills directories:

```sh
npx uxcalibur@latest --list-agents
npx uxcalibur@latest install --agent grok --project
```

Use `--target <skills-directory>` for a custom location or an existing legacy install. Rerun the installation command to update. If you changed the installed files, `--force` preserves a backup before replacing them. The [installation guide](https://uxcalibur.dev/install) covers destinations and updates; the [compatibility guide](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/docs/AGENT_COMPATIBILITY.md) covers host discovery and invocation.

## Draw UXcalibur

Open your app in your coding agent and invoke `$uxcalibur` in Codex, `/uxcalibur` in Claude Code, Cursor, or Grok Build, or ask your host to use the UXcalibur skill. Reload the agent's skills if it is not yet visible.

Start with a broad assessment:

```text
$uxcalibur Review this app's UX. Inspect the codebase and running interface.
Show me what an exceptional experience could look like, with a coherent
design direction and a prioritized upgrade plan. Do not implement yet.
```

Or give it a concrete assignment:

```text
$uxcalibur Improve onboarding so a new user can reach their first useful
result confidently. Include empty states, errors, and recovery. Implement
the improvements and verify the complete journey.
```

Tell the agent which aspects to focus on or leave alone. You can request a review, a detailed upgrade specification, implementation, or a combination. An agent with access to this checkout can also use `skills/uxcalibur/SKILL.md` directly.

## Shape, refine, hone

The same blade works from broad strokes to precision polish.

| Scale | What UXcalibur improves |
| --- | --- |
| **Shape** | The app's overall structure, concepts, navigation, and core journeys. |
| **Refine** | A feature or flow: clearer choices, stronger hierarchy, smoother interactions, and helpful feedback. |
| **Hone** | The finishing details: wording, spacing, focus, keyboard use, responsive behavior, and recovery. |

A broad review covers meaningful surfaces and core journeys, then proposes a coherent target experience and prioritized changes. A focused assignment brings the same design depth to the chosen area. A detailed specification resolves the design, flow, state, and data contracts into implementation packets and acceptance checks.

## What runs where

UXcalibur is a reusable agent skill. The npm command installs Markdown instructions and references; your agent performs the review and implementation with its configured model, tools, permissions, and app access. The installer has no runtime dependencies, model service, or telemetry.

All twelve installer presets are checked in isolated directories, including updates and backups. Actual host invocation has been exercised in Codex. The [worked example](https://uxcalibur.dev/example) shows a verified interaction improvement on a synthetic app; it does not claim measured customer usability gains.

## Develop and contribute

The checkout includes the skill source, TypeScript installer, synthetic browser proof, and FilePress developer site. See the [development guide](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/docs/DEVELOPMENT.md) to run them, or the [release guide](https://github.com/Catalyst-Forge-LLC/uxcalibur/blob/main/docs/RELEASING.md) to prepare a package. Report issues and contribute through [GitHub](https://github.com/Catalyst-Forge-LLC/uxcalibur).

MIT © 2026 Catalyst Forge, LLC. Attributed ForgeTrail materials retain Apache-2.0.

<!-- xfacts-label -->
## xFacts label

- **AppFacts:** [visual label](https://appfacts.dev/v#af1.eNptU11r20AQ_CvLPbVEkWNDH2q9pLiEujjF0ARSSglnaSVdfbo77k5yhPF_764ku2nJk8_7MbMzuzqKTizniTCyQbEUj0-51GrXepGI2DsOyQpNhLBXWsMMVps1KBOi1Bq5iF6xDVyWR9UhRbTK0QTuvF8_jBX5XiyPQktTtYTGGen3hT2YBH58ut8k8EBU33OvXEzgq-zk-KZm35qohsm-2QLT3wEWN-n84xW8uwzxPoOGchqkKSBaqwOE1jmtsIBdD7FGGCXUNjBkUJHx7pTGrccQgADTDzcZsBSVQ4EdauvQA1eCNbDSti1KLT3ClqACe0M8ylSE44xrMrhMt0jniysorT_jNEQtToko0JFNP4_CUFOFsSR-x_yE5ij0-V_aXat0QeS6z0DuAs9fetsMcojx1Q5OyYjJ6wpn3xhxfS6B3DZOaVJHYtgl51UnicR5a0uopTfsA5Nd0G6dlv3Bq6qOs4jhjLmdOkv1Elvyg9GGeTv0qlT5yDEi_SKvu_yi-Q0XPYW_0FbCIOtN_zMwFvgfsRbw-AQeO4UHCOg7OrSBZfCKL8zRpRH0cyMN_fhpO0Q0GoBTAKa65dhI22SB_-XyGulsL-cy5Pg9JWijtW3Qjfdcx-jCcjZrX6bPJyUVLBCdpSbr-1dFlYp1u0tpptlK0ob6EK_vrK_werNZ_YUQpz_ipj3m) · [source](APP_FACTS.md)
- **SkillFacts:** [visual label](https://skillfacts.dev/v#sf1.eNqVU02L2zAQ_StCl1780e0xtxKyEJr2kl1YWJYg2xN7iCwZaexsCPnvfXLa3Rba0J4kPc2Mnt68OetJL-4y7UxPeqEfn2pjuRqDznRDE1k_UAC-NGLsKYq696EltdksETBRiOwdrj8Wd8UnIFGMjBHAEGhiOgKyXJOLqfbX9QPOB3YNDqYlJzGPB7YW6DCGwc9RK0uTEVLGKXrlKOxaZYbhQ1RjpAAMhJhcTUq64Me2u0KiHp_U9dFMNRS5darhQLWAYYZqjTLz3lSWFPeDpR4MTIJUO3JjULJITIKfyKWTXpx19GNIO92JDHFRli1LN1ZF7fvypyb5rEkOTcrx9Yd8pQSisjfsyvmL8f1q_m1lOXZ_U_aSaXZRwjgTjrtApu5mNh1BrYVO9JkaVHIkRx8OwKACpGYBuGdLESWpB47kJj8GFkp1xXubCu4pJA3RieeXTFejayw1OxOE95AJHXw-68EIXtXbL-vNpuib9955SdQv2VvItZklvOIMFyfT2xvBm_Vy9W27uhHxRi-W6AaWePv53-MbyJZX8Mj-n7PiQHVeeycBn7-dNauxu_-8fNj-KRBiUhvAOLVLKJlMwgn3zjuaZyo5enZdEvkFLel8TwMU_MVkb14pMIPICoThYPFzpf90ItLhJFdjpsATW7p8BziYXm0) · [source](skills/uxcalibur/SKILL_FACTS.md)
