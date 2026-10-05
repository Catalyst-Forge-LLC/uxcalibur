# Review inbox fixture

Synthetic local application for a UXcalibur pass. It is a target application, not a UXcalibur product interface.

Task: search for **Orchard**, open **Orchard handoff, note-049**, identify the handoff owner/action in the long note, and return to continue reviewing the same results. Focus on accomplishing that job and preserving navigation context. Exclude visual branding, new note editing/storage, and service/backend work.

Data: 72 deterministic fictional records. Stable IDs distinguish the duplicate `Orchard handoff` titles (`note-025` and `note-049`). All search terms must match literal case-insensitive substrings somewhere across title, summary, and body; all records are searched and results retain fixture order. An empty search shows all 72 records; a count describes the complete local result set.

Query and selected detail ID are URL state. There are no network data requests, edits, accounts, or durable drafts. The fixture tests an in-session job; any refresh/restart guarantee needs separate evidence.

Start from the repository root with `pnpm dev`. Source is in `src/`; the actual scoped report and before/after evidence will be saved under `examples/review-inbox/`.
