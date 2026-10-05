# UXcalibur

Created 2026-10-05. This is a ForgeTrail project at genesis stage, with a reusable skill foundation and a planned FilePress presence. Whether to launch one or two sites remains to be decided.

**Kickoff, 2026-10-05:** ForgeTrail Lite and AppLedger have now been initialized. The [first developer proof brief](docs/PHASE_1_BRIEF.md) proposes a skill-only delivery, one synthetic review-inbox flow, and one verified implemented cut. The brief is draft; release, fixture/tooling, launch order, and the Plan-to-Build transition have not yet been approved. The bootstrap statements below describe the original genesis snapshot; consult `appledger/` for current phase, decisions, and handoff.

**Pull a usable interface out of the mess.**

UXcalibur is the sword-in-the-stone pun. Keep the spelling **UXcalibur**, ending in **-ur** like Excalibur. The name is the brief: find the knots in a real interface and make the few cuts that let people finish what they came to do.

This repository begins with the product direction and a working agent skill. A developer edition, CLI, operated service, and possible SaaS offering can grow from the same method. Their interfaces, commercial terms, and runtime architecture are future decisions rather than capabilities already shipped.

## Why this exists

A capable app can become exhausting as features accumulate. Primary actions disappear below setup panels. Metadata gets priority over the content someone opened. Search results have hidden scope. Selection loses its place after an update. A control uses a mystery icon. An error offers a generic retry that repeats the wrong operation. A flow ends without a clear next step or pressures people with guilt-inducing copy.

UXcalibur should identify those problems in context, explain why they obstruct the chosen job, and propose a concrete change that an engineer can implement and verify. It should keep useful architecture and capabilities while removing unnecessary effort.

The output is judgment supported by evidence. A long checklist of heuristics, a cosmetic redesign, or a list of desirable features is insufficient. A predicted improvement in completion must remain a hypothesis until it has been measured.

## Origin

The method grew out of a detailed UX pass on DictaWhisper. The useful parts were the combination of actual source inspection, user goals, complete interaction rules, backend dependencies, implementation packets, and observable acceptance checks. The process was extracted into a reusable skill without reducing that implementation depth.

The reference upgrade spec in this workspace is `Z:\workspace\dictawhisper\docs\APP_UX_SPEC.md`. It is useful as an example of detailed-spec mode. UXcalibur's default customer report is narrower: one app, one flow, and the few changes that matter. This repository contains the generalized method rather than a copy of a customer's application or private data.

## Two domains, two jobs

| Domain | Purpose | Audience | Main outcome |
| --- | --- | --- | --- |
| **uxcalibur.dev** | The blade: an open source skill and potentially a local CLI/developer edition | Engineers who want to run the method on their own app without waiting for a service | A ranked cut list, with optional detailed spec and authorized implementation |
| **uxcalibur.com** | The service: the same method operated for a customer | People who want judgment and an actionable result without running the analysis themselves | A fixed-price pass for one app and one flow, returned as a punch list or requested PR |

The domains have been acquired. The websites and service have not been built in this bootstrap.

The `.dev` audience should be able to understand the method, inspect its behavior, run it locally, and contribute improvements. The `.com` audience should understand the scope, inputs, deliverable, and next step quickly. Neither site should make the visitor decode the pun to understand the product.

## Developer edition

The existing skill is the first developer-facing form. It works with a coding agent that can inspect the product and relevant artifacts. Its contents are in [skills/uxcalibur](skills/uxcalibur/SKILL.md).

A future CLI could make the method easier to invoke, capture input/scope consistently, and emit portable reports. Define its commands and runtime when implementing it; no CLI commands or flags are promised by this genesis file.

Possible inputs include a local repository, a running app or staging URL, a build, and supplied screenshots or recordings. The available evidence must be stated. Source access supports deeper implementation guidance, while an interface-only review needs to label what it could not inspect.

Local operation should be a real developer option. External model use, credentials, execution, and data handling must be explicit in the chosen implementation. The method must not assume every app uses the same frontend framework or platform.

## Service and possible SaaS

Begin with the operated service proposition: **one app, one flow, fixed price, concrete cuts**. A customer supplies a staging URL, repository, build, or other agreed evidence. UXcalibur returns the few changes most likely to improve that flow's completion, with enough specificity to execute them.

The default delivery can be a punch list. A PR is a separate agreed delivery: implement the scoped changes, preserve unrelated work, verify the result, and describe the evidence and remaining limits. A review request does not automatically authorize edits, publication, or a production deployment.

A SaaS version is a possibility. It might provide guided intake, scoped runs, report review, progress tracking, and authorized repository handoff. Decide whether customers need this after testing the operated service; accounts, recurring scans, billing, and repository access should not become prerequisites of the first useful pass.

The local developer edition and service should share the analysis method, evidence model, cut/packet identifiers, output contracts, and verification rules. Their delivery surfaces and operational boundaries differ. Do not create two unrelated quality standards.

## Output modes

### Focused pass — default

Choose one app and one flow, state its completion condition, and return a short ranked cut list. Choose the number of cuts from impact rather than a quota.

For each cut, include:

- The observed knot and its evidence: the screen/state, source, route, or artifact that supports the finding.
- The likely effect on the person trying to complete the flow, with uncertainty stated.
- The proposed behavior and why it removes effort or confusion.
- The implementation scope, supporting data/API dependency, and important preservation rules.
- An observable acceptance check and meaningful verification method.
- Status, notes/issues, and the next action when implementation is tracked.

Lead with the cuts rather than exposing every working note. Keep analysis deep and delivery focused. Buried actions, dead ends, guilt copy, unclear icons, and lost context are examples to inspect; they are not automatic findings in every product.

### Detailed upgrade specification — explicit

When the user asks for a whole-app or implementation-ready spec, retain the full level of detail: audit, information architecture, flow/state contracts, layout/reflow, accessibility, error/recovery, data/API additions, compatibility, phased packets, acceptance scenarios, and a smaller-model implementation prompt.

Include a living phase and packet tracker with status, dependencies, dated notes, issues, and verification evidence. Keep Not started, In progress, Needs review, Verified, Blocked, and Deferred distinct. Existing capabilities do not automatically make a new packet complete.

### Implementation — authorized

Apply the agreed cuts or packet. Verify real behavior rather than simulating counts, progress, persistence, or Undo. Keep a reviewable diff and update the tracker. Expand scope only when the user requests it or an identified prerequisite is necessary and belongs to the approved change.

## Quality standard

Use the actual product and the user's jobs as the starting point. Separate observed behavior, inference, recommendation, and unverified assumption.

Specify continuity as well as controls: scope, selection, focus, history, scroll, drafts, async responses, background updates, and restart behavior where relevant. Useful content should appear promptly, but tighter spacing alone does not establish usability.

Connect frontend promises to supporting contracts. Complete counts, server pagination, stable identities, acknowledged edits, durable drafts, real processing stages, and recoverable removal require actual support or explicitly owned implementation work.

Preserve useful architecture and user data. A UX pass need not replace a framework, database, visual identity, or service. Use terminology and platform conventions appropriate to the audience.

Verification must match the claim. Builds establish that code builds. State/data tests establish their specific invariants. Rendered interaction checks establish layout, focus, scrolling, and input behavior. Completion improvements require measurement. Record inaccessible evidence and unrun checks plainly.

## ForgeTrail project direction

Develop UXcalibur through ForgeTrail, using the project ledger for approved decisions, phase state, issues, lessons, and session handoffs. Keep the product's scope and acceptance evidence understandable across chats.

This genesis is the kickoff input. ForgeTrail installation and AppLedger initialization are the next project's setup work; they were not performed merely by copying this file. In this workspace, ForgeTrail lives at `Z:\workspace\forgetrail`; its package/legacy file names still use `forgetrail`. Read that project's current startup guidance before initializing UXcalibur's ledger.

The first ForgeTrail brief should decide the first useful developer delivery and its test fixture, while retaining the focused-pass default and explicit detailed-spec mode. Avoid deciding a hosted stack, pricing amount, or broad automation roadmap before the first pass is demonstrated.

## FilePress site direction

Use FilePress for the public sites. Its workspace project is `Z:\workspace\filepress`. Site scaffolding, builds, hosting, and domain publication are later work.

Two sites are plausible:

- **Developer site at uxcalibur.dev:** explain the blade, installation/use, sample cuts, detailed-spec mode, method, and contribution path.
- **Service site at uxcalibur.com:** explain the one-flow offer, input/scope, deliverable examples, what a PR includes, and the request/purchase process when implemented.

It may be simpler initially to share a content/design foundation or launch one site first. Preserve the two audience jobs even if the first implementation shares assets. Decide the physical site-folder layout during the project brief; this genesis does not create placeholder sites or assume a deployment platform.

## Initial repository contents

~~~text
GENESIS.md
skills/
  uxcalibur/
    SKILL.md
    agents/openai.yaml
    references/process.md
    references/spec-contract.md
    references/product-brief.md
~~~

The copied skill matches the installed personal skill at `C:\Users\acmegeek\.codex\skills\uxcalibur` at bootstrap. Treat the repository copy as the versioned project source going forward; updating it does not automatically update anyone's installed copy. Define installation/release behavior when packaging is implemented.

## Starting milestones

| Milestone | Initial state | Outcome |
| --- | --- | --- |
| Genesis and skill seed | Complete in this bootstrap | Product direction plus a versioned copy of the method |
| ForgeTrail kickoff | In progress | Ledger initialized; first brief drafted; scope/acceptance approval pending |
| Developer pass proof | Not started | Run a scoped pass against an isolated representative fixture; review the cuts and verify an implemented example |
| Local distribution | Not started | A deliberate installation/release path and open source license decision |
| FilePress presence | Not started | Decide one/two sites and build the corresponding audience paths |
| Operated service pilot | Not started | Test the fixed-scope offer and its deliverable before adding SaaS mechanics |
| SaaS decision | Deferred | Define from evidence gathered through developer use and the service pilot |

## Open decisions for the next chat

1. First developer release: skill-only, a thin CLI, or both; define the smallest useful scope.
2. First demonstration flow and fixture; establish what evidence proves the pass is actionable.
3. Open source license and publishing location.
4. One or two FilePress sites for the first launch, with a clear job for each domain.
5. First service delivery: punch list, implemented PR, or separate offers with explicit scope.
6. Whether and when a SaaS surface adds value beyond the operated service.

Start the next chat by reading this file, the copied skill, and ForgeTrail's current kickoff guidance. Preserve these product decisions, record newly agreed decisions in the ledger, and build the first useful slice.
