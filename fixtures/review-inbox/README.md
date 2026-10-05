# Review inbox fixture

Synthetic local application for a UXcalibur pass. It is a target application, not a UXcalibur product interface.

Task: search for **Orchard**, open **Orchard handoff, note-049**, identify the handoff owner/action in the long note, and return to continue reviewing the same results. Focus on accomplishing that job and preserving navigation context. Exclude visual branding, new note editing/storage, and service/backend work.

Data: 72 deterministic fictional records. Stable IDs distinguish the duplicate `Orchard handoff` titles (`note-025` and `note-049`). All search terms must match literal case-insensitive substrings somewhere across title, summary, and body; all records are searched and results retain fixture order. An empty search shows all 72 records; a count describes the complete local result set.

Query and selected detail ID are URL state. An originating list entry holds its in-session row ID and list/page scroll offsets. App return traverses that entry; browser Back restores it and Forward opens the detail at its initial top/heading focus. A changed query clears the anchor. If no known matching origin exists, return replaces the detail with same-query results at top/Search. Resizing clamps and reveals the anchor. Rapid return activations share one pending traversal.

There are no network data requests, edits, accounts, or durable drafts. A fresh document restores URL identity, with no saved review anchor. Refresh/restart continuity is outside the verified contract.

Start from the repository root with `pnpm dev`. Source is in `src/`; see the [actual scoped report](../../examples/review-inbox/report.md) and [before/after verification](../../examples/review-inbox/verification.md).
