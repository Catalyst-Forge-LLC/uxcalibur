# UXcalibur product brief

Status: Product direction and reusable skill draft. A CLI and hosted service have not been implemented by this work.

## Name and promise

**UXcalibur** keeps the Excalibur spelling with **-ur**, not -er or caliber. The sword-in-the-stone idea is the brief: pull a usable interface out of the mess.

The work identifies knots in a real user flow and makes precise cuts. Examples include buried primary actions, dead ends, guilt-inducing copy, unexplained icons, and flows that lose people or their context. A finding needs evidence; these examples are not a generic checklist to report against every app.

## Two domains, two jobs

| Domain | Role | User | Delivery |
| --- | --- | --- | --- |
| uxcalibur.dev | The blade: open source skill or CLI, run locally against the user's own app | Engineers who want to run the analysis themselves | Evidence-backed cuts; optional implementation-ready specification or authorized diff |
| uxcalibur.com | The service: the same method operated for the customer | People buying judgment and a concrete cut list | Fixed price, one app, one flow; punch list or requested PR |

Staging URL, repository, and build are proposed inputs to the service. Specific access, execution, hosting, pricing amounts, and submission mechanisms remain to be designed; do not imply those capabilities exist yet.

## Depth underneath, focused delivery

The default customer output is a narrow, ranked set of changes tied to one flow's completion goal. Do enough analysis to support judgment and implementation. Do not lead with a lengthy heuristic inventory or redesign unrelated surfaces to fill a report.

A focused report contains:

1. App/flow boundary and the observable completion condition.
2. A short ranked cut list; choose the number from impact rather than a quota.
3. For each cut: observed friction and source, likely user consequence, proposed behavior, implementation/data dependency, and acceptance check.
4. Confidence and verification limits, including assumptions and what was not inspected.
5. Current status, notes/issues, and next action for each cut or implementation packet.

When the customer requests a PR, implement only the agreed flow changes and verify them. Explain backend prerequisites instead of simulating guarantees. Do not report an improvement in completion as measured unless there is an actual measurement.

The detailed specification mode remains available by explicit request. It retains full flow/state/data contracts, phase and packet tracking, acceptance coverage, and smaller-model handoff. That mode is suitable for a whole-app upgrade; it is not the default service report.

## Shared method and future implementation

The reusable skill is the current method. A future CLI and service should share its evidence model, cut/packet IDs, acceptance contracts, and progress records. Define the CLI interface and service workflow when their implementation is requested; do not prescribe unbuilt flags, integrations, or hosted architecture as existing behavior.

This brief captures the product direction. Domain deployment, public publishing, commercial checkout, and service delivery are separate work.
