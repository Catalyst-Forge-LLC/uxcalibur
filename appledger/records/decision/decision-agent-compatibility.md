---
format_version: 0.1.0
id: decision-agent-compatibility
kind: decision
title: "D14: Support Grok/xAI and current Agent Skills hosts"
record_status: active
created_at: 2026-10-06T11:33:01.092Z
updated_at: 2026-10-06T11:33:01.092Z
recorded_by:
  id: codex
  type: agent
visibility: internal
relations:
  - type: verified_by
    target: evidence-agent-compatibility
claims: []
data:
  status: accepted
  choice: "Extend the source installer to twelve presets: Codex, Claude Code,
    Cursor, Grok Build, Gemini CLI, GitHub Copilot, OpenCode, Amp, Cline, Kilo
    Code, Roo Code, and a shared Agent Skills directory. Keep the expert UX
    method model-provider independent. Commit installer, guidance/site, and
    metadata/evidence separately."
  rationale: Documented native discovery paths make the existing bundle usable
    across current coding agents. An explicit target and shared preset
    accommodate additional compatible hosts without guessing undocumented
    directories. Grok models may also be selected through a host such as
    OpenCode with its xAI provider.
  authority: Direct owner instruction in this chat on 2026-10-06 to commit in
    batches and enable Grok/xAI and other recent bots.
  alternatives:
    - Bind the method to one provider SDK or model version.
    - Claim all bots support native discovery or independently tested model
      execution.
    - Publish new presets under the unchanged npm 0.1.0 release.
---

Bounded local next-release work. Published npm/site, personal installations, and lifecycle phase remain the baseline. No publication, deployment, push, or provider credential configuration.
