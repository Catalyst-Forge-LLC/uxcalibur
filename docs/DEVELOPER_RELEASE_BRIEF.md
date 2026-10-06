# UXcalibur developer launch

Status: **locked** by the owner's developer-launch request and release-intake answers on 2026-10-05. Initial proof P1–P4 is verified. This bounded milestone does not retroactively change the initial-proof brief.

An engineer can discover UXcalibur, understand its purpose and evidence limits, install the released skill from npm, invoke it for a chosen outcome with focus areas/exclusions, and receive useful cuts or an explicitly requested detailed specification.

## Accepted choices

| Choice | Owner direction |
| --- | --- |
| License | MIT; copyright Catalyst Forge, LLC from project context |
| Hosts | Codex, Claude Code, Cursor |
| Second validation | Read-only LocalHelm pass; owner also independently used the installed skill on launch-campaign |
| Site | FilePress at uxcalibur.dev |
| Hosting | Cloudflare Pages via local Wrangler; owner attaches custom domain after publication |
| GitHub | Public for launch |
| npm | Publish the intentional skill package as uxcalibur |

The owner explicitly requested a solid, published npm skill and the .dev site, then selected the hosts, public repository, and Wrangler publication. These instructions authorize preparation, verification, and publication of this concrete milestone. Authentication or 2FA can still require owner participation if unavailable.

SaaS remains deferred: accounts, billing, repository OAuth, recurring scans, customer intake, and .com/service delivery are excluded. LocalHelm raw evidence stays ignored and private; the public example uses the synthetic review inbox.

## Delivery contracts

The npm package is a dependency-free skill installer with the authored method, references, MIT notices, and usage documentation. It contains no fixtures, ledger, caches, model runtime, telemetry, or automatic analyzer. The root development harness remains private as an npm package.

Command: `npx uxcalibur@0.1.0 install --agent codex|claude|cursor`. Personal defaults: `~/.agents/skills`, `~/.claude/skills`, `~/.cursor/skills`. `--project` uses the corresponding directory under the current project; `--target` selects an explicit parent skills directory and is exclusive with `--project`. Legacy Codex `.codex/skills` is an explicit target. Modified/unmanaged installs require `--force` with a preserved backup outside host discovery. No other skill or agent configuration changes.

Filesystem installation support is checked for three hosts. Actual Codex invocation has been exercised; Claude Code and Cursor model runtime verification is not claimed from file placement. [Codex directories](https://learn.chatgpt.com/docs/build-skills), [Claude Code directories](https://code.claude.com/docs/en/skills), [Cursor directories](https://prod.cursor.com/help/customization/skills).

The FilePress site documents purpose, installation/use, method, synthetic worked example, detailed specification mode, limits, and contribution paths. Canonical URL: https://uxcalibur.dev; initial accessible deployment: its Pages origin until the owner attaches the domain.

## Work packets and acceptance

| Packet | Reviewable result | Acceptance |
| --- | --- | --- |
| R1 | Solid skill and second real-app pass | Exact installation/source match; references resolve; focused/detailed outputs honor outcome/focus/exclusions; useful contracts and honest verification limits |
| R2 | Licensed npm package and installer | Exact packed contents; actual tarball install; selected host paths, repeats, upgrade, edited-copy refusal, backups, invalid paths/arguments |
| R3 | Rendered FilePress site | Desktop/narrow QA; functional internal links; commands match tested package; public claims match evidence |
| R4 | Public developer launch | Public GitHub; exact npm version and live install verified; Pages HTTP/assets checked; evidence and operator instructions saved |

Routine version, layout, site structure, and verification use agent judgment. Packets become met only with evidence. Public distribution excludes private real-app evidence. Upstream ForgeTrail retains Apache-2.0 on its own materials.
