# UXcalibur xFacts labels

[AppFacts](../APP_FACTS.md) describes the skill/installer stack and developer site. [SkillFacts](../skills/uxcalibur/SKILL_FACTS.md) describes the method, provenance, instructional reach, and host boundary. FilePress discovers these labels and displays them on the homepage. Their visual viewers contain public metadata encoded in the link.

These labels describe the current `0.1.0-dev` source revision. npm `0.1.0` remains the published baseline. The installer is dependency-free; site and proof dependencies belong to development. The agent host supplies its model, tools, permissions, and data-processing environment. SkillFacts does not describe that host's privacy policy or guarantee review quality.

The sibling AppFacts and SkillFacts generators scaffolded the labels without a model call. Codex corrected the inferred type, identity, source version, dependencies, and reach against the actual source. A schema check establishes format, not truth or measured UX efficacy.

## Maintain the labels

From this repository, with the sibling projects checked out:

```sh
node ../app-facts/generator/generate_app_facts.js . --check
node --input-type=module -e "import { auditLabels } from '../x-facts/scripts/label-audit.mjs'; const findings = auditLabels(process.cwd()); console.log(findings); process.exitCode = findings.length ? 1 : 0;"
python ../x-facts/scripts/reencode_facts_viewer.py APP_FACTS.md skills/uxcalibur/SKILL_FACTS.md
```

After changing metadata, regenerate the encoded links and update their pointers in the README, site footer, and Catalyst Forge catalog. Build the site and inspect the displayed cards. A release should update the source version and release boundary in both labels before packaging.

The local `.featurefacts/` register is ignored. Its deterministic scan has no confirmed selection, so it publishes no FeatureFacts label. Regenerate that local inventory with `node ../feature-facts/bin/featurefacts.mjs init --root .` and `scan --root .` before the full xFacts audit on a new checkout. CLI scanning does not establish the capabilities of a Markdown method. ToolFacts v0.1 describes MCP servers; UXcalibur's installer is not an MCP server. UXcalibur supplies no model or autonomous agent runtime to label.
