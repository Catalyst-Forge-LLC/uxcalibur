# UXcalibur

**Turn rough apps into exceptional experiences.** Give your coding agent an expert UX method to assess the app, design a coherent upgrade, and carry it through implementation. Wield it at every scale: **shape, refine, hone**.

UXcalibur ships a reusable coding-agent skill and a small npm installer. The agent performs the analysis using its configured model and tools. Use only evidence you authorize your host to process. The repository also includes a synthetic developer proof and the FilePress developer site.

[npm](https://www.npmjs.com/package/uxcalibur) · [Developer site](https://uxcalibur-dev.pages.dev) · [0.1.1 release preparation](docs/RELEASE_0.1.1.md) · [Initial release evidence](docs/RELEASE_VERIFICATION.md). The commands below target 0.1.1; check npm for published availability. The owner connects uxcalibur.dev to the Pages project.

```sh
npx uxcalibur@0.1.1 install --agent codex
npx uxcalibur@0.1.1 install --agent claude
npx uxcalibur@0.1.1 install --agent cursor
```

Add `--project` from the intended project directory for a project installation. Default personal locations are `~/.agents/skills`, `~/.claude/skills`, and `~/.cursor/skills`. `--target` selects another parent skills directory, including legacy Codex `.codex/skills`; it is exclusive with `--project`. Modified/unmanaged installs require `--force`, which preserves a backup and prints its path. See the [package README](packages/uxcalibur/README.md) for installation, update behavior, and host verification limits.

Version 0.1.1 also supports **Grok/xAI, Gemini CLI, GitHub Copilot, OpenCode, Amp, Cline, Kilo Code, and Roo Code**, plus a shared Agent Skills preset:

```sh
npx uxcalibur@0.1.1 --list-agents
npx uxcalibur@0.1.1 install --agent grok --project
```

Before publication, use `pnpm package:build` and `node .artifacts/npm-package/bin/uxcalibur.js --list-agents` from this checkout. See [agent compatibility](docs/AGENT_COMPATIBILITY.md) for local installation commands, host directories, invocation, Grok through OpenCode, and additional agents. The installer and method require no fixed model provider.

## Use the method

An agent that can read this checkout can use the repository version directly:

```text
Use skills/uxcalibur/SKILL.md to elevate this app's UX.
Inspect the codebase and running interface. Show me the experience it could
become, with a coherent design direction and prioritized implementation guidance.
Review product structure, journeys, interaction, visual craft, and details.
Do not implement yet.
```

For a normal personal skill installation, copy the entire `skills/uxcalibur` folder into your agent's documented skill directory, including its references and metadata. Invoke `$uxcalibur` in Codex, `/uxcalibur` in Claude Code, Cursor, or Grok Build, or ask your host to use the UXcalibur skill. `agents/openai.yaml` is optional Codex UI metadata; other hosts use the same method files. This checkout's verification uses a fresh isolated copy without modifying a personal installation.

A broad app review covers meaningful surfaces and core journeys. A focused refinement or precision polish pass brings the same depth to the selected part. Ask for a detailed upgrade specification to resolve design/flow/state/data contracts and tracked implementation packets, or request implementation when you want changes applied.

The sword-from-the-stone story is about drawing out an app's potential. The mark puts the sword in code; **shape, refine, hone** explains how to wield it. See [positioning and the human-guided pass](docs/POSITIONING.md). Version 0.1.1 carries this revised method; package publication and site deployment are separate operations tracked in the [release preparation](docs/RELEASE_0.1.1.md).

## Run the local proof

The developer checkout requires Node 22.12+, pnpm 10, and the pinned Chromium test browser. The released skill installer supports Node 20.19+. On Windows, `setup.bat` installs development dependencies and the browser, and `run.bat` starts the fixture. macOS/Linux equivalents are `setup.sh` and `run.sh`.

```sh
pnpm install --frozen-lockfile
pnpm test:e2e:install
pnpm dev
```

The synthetic review inbox runs at <http://127.0.0.1:5191>. Its [task and data contract](fixtures/review-inbox/README.md) cover finding a known note, reading its content, and returning to continue reviewing. `pnpm status` checks the local server.

The [actual scoped report](examples/review-inbox/report.md) ranks two cuts. The first is implemented: app/browser return restores the originating row, keyboard focus, query, and scroll position, with correct history and safe direct-link recovery. The second, keeping return visible while reading, remains unimplemented. See the [invocation](examples/review-inbox/invocation.md) and [verification evidence](examples/review-inbox/verification.md).

`pnpm verify` validates a fresh isolated skill copy and all method references, checks types, builds the fixture, runs 12 rendered Chromium checks, and replays the preserved baseline against four targeted checks. Those four must fail at the intended continuity assertion before the cut; unexpected failures fail verification. Each browser run owns an isolated local server and port. The verifier needs Git and the baseline commit in the checkout's history. `pnpm test` runs the current built fixture; use `pnpm build` after source changes, or run the complete verifier.

`pnpm skill:copy` validates a fresh isolated skill copy. Browser/dependency caches, rerun evidence, and temporary copies stay out of Git. Only Windows/Chromium execution is verified here; the shell wrappers are provided for other platforms without a runtime claim.

The root development package is `private`; the deliberate npm release is assembled from `packages/uxcalibur` and `skills/uxcalibur`. `pnpm package:check` builds a clean package, checks exact tar contents, installs the tarball, and verifies all 12 install presets plus upgrade/backup/error paths. These are installer checks; actual host model invocation has been exercised in Codex. `pnpm verify:release` also verifies the proof and builds/checks the FilePress site. Site dependencies use a separate lockfile: `pnpm --dir sites/uxcalibur-dev install --frozen-lockfile`.

UXcalibur is MIT licensed. Attributed ForgeTrail materials retain Apache-2.0. The npm installer has no model runtime, telemetry, or audit execution command. SaaS remains deferred. [Release scope](docs/DEVELOPER_RELEASE_BRIEF.md), [operator runbook](docs/RELEASING.md), and [release verification](docs/RELEASE_VERIFICATION.md) document the developer delivery.

<!-- xfacts-label -->
## xFacts label

- **AppFacts:** [visual label](https://appfacts.dev/v#af1.eNptU11r20AQ_CvLPbVEkWNDH2q9pLiEujjF0ARSSglnaSVdfbo77k5yhPF_764ku2nJk8_7MbMzuzqKTizniTCyQbEUj0-51GrXepGI2DsOyQpNhLBXWsMMVps1KBOi1Bq5iF6xDVyWR9UhRbTK0QTuvF8_jBX5XiyPQktTtYTGGen3hT2YBH58ut8k8EBU33OvXEzgq-zk-KZm35qohsm-2QLT3wEWN-n84xW8uwzxPoOGchqkKSBaqwOE1jmtsIBdD7FGGCXUNjBkUJHx7pTGrccQgADTDzcZsBSVQ4EdauvQA1eCNbDSti1KLT3ClqACe0M8ylSE44xrMrhMt0jniysorT_jNEQtToko0JFNP4_CUFOFsSR-x_yE5ij0-V_aXat0QeS6z0DuAs9fetsMcojx1Q5OyYjJ6wpn3xhxfS6B3DZOaVJHYtgl51UnicR5a0uopTfsA5Nd0G6dlv3Bq6qOs4jhjLmdOkv1Elvyg9GGeTv0qlT5yDEi_SKvu_yi-Q0XPYW_0FbCIOtN_zMwFvgfsRbw-AQeO4UHCOg7OrSBZfCKL8zRpRH0cyMN_fhpO0Q0GoBTAKa65dhI22SB_-XyGulsL-cy5Pg9JWijtW3Qjfdcx-jCcjZrX6bPJyUVLBCdpSbr-1dFlYp1u0tpptlK0ob6EK_vrK_werNZ_YUQpz_ipj3m) · [source](APP_FACTS.md)
- **SkillFacts:** [visual label](https://skillfacts.dev/v#sf1.eNqVU02L2zAQ_StCl1780VxzKyELoWkv2YWFZQmyPbGHyJKRxsmGkP_eJ6fNttAN7UnS08zo6c2bsz7o-SzTzvSk5_rpuTaWqzHoTDd0IOsHCsAXRow9RVEPPrSk1usFAg4UInuH68_FrJgBiWJkjACGQAemIyDLNbmYan9bPeK8Z9fgYFpyEvO4Z2uBDmMY_BS1tHQwQso4RW8chV2rzDB8imqMFICBEJOrSUkX_Nh2V0jU07O6PpqphiK3TjUcqBYwzFCtUWbam8qS4n6w1IOBSZBqR24MShaJSfAHcumk52cd_RjSTnciQ5yXZcvSjVVR-778pUk-aZJDk3J8-ylfKYGo7A27cvpifL-afltZjt1Hyl4yzS5KGCfCcRvI1N3EpiOoNdeJPlODSo7k6MMeGFSA1CwAd2wpoiT1wJHc5MfAQqmueG9TwR2FpCE68fKa6Wp0jaVma4LwDjKhgy9nPRjBq3rzdbVeF33z3jsvifolu4Vcm1nCK85wcTK9vRO8Xi2W3zfLOxE3erFEN7DE-8__Gd9AtryCR3b_nBUHqvPaOwn4_P2sSY3tw5fF4-ZvgRCT2gDGqV1CyWQSTrh33tE0U8nRk-uSyK9oSed7GqDgbya7eaXADCIrEIaDxU-V_tOJSIeTXI2ZAk9s6fIDNO5ebA) · [source](skills/uxcalibur/SKILL_FACTS.md)

These labels describe version 0.1.1. See [label scope and maintenance](docs/XFACTS.md) and [release preparation](docs/RELEASE_0.1.1.md) for publication status.
