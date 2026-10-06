# UXcalibur developer launch

Status: owner goal recorded; release choices pending. The initial proof is verified. Current phase remains Build while the next milestone is made concrete; this document does not retroactively alter the locked initial-proof brief.

On 2026-10-05 the owner asked to table SaaS, get **uxcalibur.dev** up, and make the skill solid and published to npm. The owner is considering MIT or Apache 2.0 but has not chosen one. No license is applied by this planning update.

## Outcome and boundary

An engineer can discover UXcalibur at uxcalibur.dev, understand its purpose and evidence limits, install the released skill from npm, invoke it for a chosen outcome with focus areas/exclusions, and receive useful, implementable cuts or an explicitly requested detailed specification.

Use the existing method and FilePress direction. Package the method intentionally; the private fixture/test harness, project ledger, local caches, and ForgeTrail workspace do not become skill runtime dependencies. A small installation helper may be justified by the selected hosts. An automatic analyzer or model service remains a separate decision.

SaaS is explicitly deferred. Accounts, billing, repository OAuth, recurring scans, customer intake, and .com/service delivery are outside this developer milestone.

## Release intake

| Choice | Current position | Needed before |
| --- | --- | --- |
| License | Owner considers MIT or Apache 2.0; recommendation MIT, pending answer | Apply license and distribute |
| Supported hosts | Recommendation: verify Codex first, then extend when requested | Design installation/update behavior |
| Real-app validation | App and user outcome pending | Second actual pass; app edits need their own scope |
| Site engine | FilePress, established and retained | Site build |
| Hosting/DNS | Existing account/provider not yet specified | Configure/deploy uxcalibur.dev |
| GitHub visibility | Currently private; recommendation public for developer launch, pending answer | Visibility change and public contribution links |
| npm identity | uxcalibur, supplied name hold | Release package verification and publication |
| Copyright owner | Expected Catalyst Forge, LLC from project context; confirm if different | Final license notice |

MIT permits use, modification, redistribution, and commercial use with its copyright/permission notice retained. [MIT text](https://opensource.org/license/mit). Apache 2.0 additionally supplies an explicit contributor patent license with a termination clause, and has modified-file/attribution/NOTICE redistribution conditions. [Apache 2.0 text, sections 3–4](https://www.apache.org/licenses/LICENSE-2.0). The MIT recommendation is a project choice for a concise permissive skill release, not a claim that either license guarantees protection. The upstream ForgeTrail Apache license remains scoped to its own files.

## Proposed work packets

| Packet | Reviewable result | Acceptance |
| --- | --- | --- |
| R1: Solid skill | Fresh-checkout setup, installed invocation on selected hosts, focused/detailed-spec exercises, second real-app report, corrections supported by evidence | Exact installation/source match; references resolve; actual outputs honor outcome/focus/exclusions; useful contracts and honest verification limits |
| R2: npm package | Versioned skill package, chosen license, clear root README, deliberate included files, installation/update behavior | Inspect packed contents; install from the tarball in an isolated target; verify no fixture/ledger/cache/runtime-model dependency or nonexistent analyzer promise |
| R3: .dev site | Local FilePress site with purpose, install/use, worked example, detailed-spec mode, limits, and contribution path | Rendered desktop/narrow review; functional links; commands match tested package; claims match evidence |
| R4: Launch | Validated package/site published to the confirmed accounts with exact version and accessible URLs recorded | Publication verified, live installation/site checked, release evidence and state saved |

R1–R4 are not reported as implemented. Routine package version, folder layout, site content structure, and test selection can use agent judgment once the substantive choices are resolved. The publication goal is explicit, but deployment credentials/2FA or repository-visibility decisions may still need owner action. Do not expose private application evidence on the public site; keep the existing synthetic example unless separate public-use authorization exists.
