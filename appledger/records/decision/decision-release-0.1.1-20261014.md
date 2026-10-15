---
format_version: 0.1.0
id: decision-release-0.1.1-20261014
kind: decision
title: Prepare the public 0.1.1 package for owner publication
record_status: active
created_at: 2026-10-15T00:45:34Z
updated_at: 2026-10-15T00:54:05Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations: []
claims: []
data:
  status: accepted
  choice: Set the public release manifest to 0.1.1, align its README/install
    examples and labels, and prepare the verified tarball for owner publication.
    Keep the private root harness separate. Use the documented manual tarball
    path while generated-package release support in LocalHelm remains pending.
  rationale: The owner requested a version fix so they can publish. npm latest
    is still 0.1.0 and 0.1.1 is unused. LocalHelm reads the private enrolled root
    and cannot infer the separate generated package.
  alternatives:
    - Refactor the existing package layout while changing the release version.
    - Implement generic generated-release support in LocalHelm in this batch.
  authority: user
---

The owner said, “let's fix the version so I can publish it.” This authorizes
release preparation, not agent publication, push, deployment, or a phase change.
The source version is `packages/uxcalibur/release.json`; the npm README comes
from `packages/uxcalibur/README.md`. Build/pack produce only the intentional
public installer and skill. Do not publish or make public the root harness.

The version was checked against the public registry before preparation.
LocalHelm's read-only status/Publish result is retained under
`.artifacts/localhelm-release-plan-0.1.1.json`, with reason `private`. The actual
package release contract and owner command are in `docs/RELEASING.md` and
`docs/RELEASE_0.1.1.md`.
