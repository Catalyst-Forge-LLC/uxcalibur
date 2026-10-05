# UXcalibur

**Pull a usable interface out of the mess.** Help users accomplish goals or improve outcomes through a few evidence-backed, implementable changes. Choose which aspects to focus on or exclude.

The current delivery is a reusable coding-agent skill in [skills/uxcalibur](skills/uxcalibur/SKILL.md) and a private local proof harness. The agent performs the analysis using its configured model and tools. A local fixture does not imply that the agent's processing is offline; use only evidence you authorize your host to process.

## Use the method

An agent that can read this checkout can use the repository version directly:

```text
Use skills/uxcalibur/SKILL.md to review this app.
Outcome: [what I want to accomplish or improve].
Scope: [app and flow or bounded aspect].
Focus on: [aspects]. Exclude: [aspects].
Success or improvement criteria: [observable results].
Evidence available: [source, running UI, screenshots, or other artifacts].
Return a ranked cut list with evidence, supporting contracts, acceptance checks,
confidence, and verification limits. This request is for a report.
```

For a normal personal skill installation, copy the entire `skills/uxcalibur` folder into your agent's documented skill directory, including its references and `agents/` metadata. Then invoke `$uxcalibur` with the same outcome and scope. Installation locations depend on the host. This checkout's verification uses a fresh isolated copy without modifying a personal installation.

Focused pass is the default. Ask explicitly for a detailed upgrade specification to include full flow/state/data contracts and tracked implementation packets. Authorize implementation when you want the selected changes applied. A report request does not authorize publication or deployment.

## Run the local proof

Requires Node 20.19+ or 22.12+, pnpm 10, and the pinned Chromium test browser. On Windows, `setup.bat` installs development dependencies and the browser, and `run.bat` starts the fixture. macOS/Linux equivalents are `setup.sh` and `run.sh`.

```sh
pnpm install --frozen-lockfile
pnpm test:e2e:install
pnpm dev
```

The synthetic review inbox runs at <http://127.0.0.1:5191>. Its [task and data contract](fixtures/review-inbox/README.md) cover finding a known note, reading its content, and returning to continue reviewing. `pnpm status` checks the local server.

The [actual scoped report](examples/review-inbox/report.md) ranks two cuts. The first is implemented: app/browser return restores the originating row, keyboard focus, query, and scroll position, with correct history and safe direct-link recovery. The second, keeping return visible while reading, remains unimplemented. See the [invocation](examples/review-inbox/invocation.md) and [verification evidence](examples/review-inbox/verification.md).

`pnpm verify` validates a fresh isolated skill copy and all method references, checks types, builds the fixture, runs 12 rendered Chromium checks, and replays the preserved baseline against four targeted checks. Those four must fail at the intended continuity assertion before the cut; unexpected failures fail verification. Each browser run owns an isolated local server and port. The verifier needs Git and the baseline commit in the checkout's history. `pnpm test` runs the current built fixture; use `pnpm build` after source changes, or run the complete verifier.

`pnpm skill:copy` validates a fresh isolated skill copy. Browser/dependency caches, rerun evidence, and temporary copies stay out of Git. Only Windows/Chromium execution is verified here; the shell wrappers are provided for other platforms without a runtime claim.

The repository remains private and the development package is marked `private`. The UXcalibur license and public distribution are later decisions; no analyzer CLI or hosted service is shipped here. ForgeTrail's own license is scoped to `.forgetrail/`.
