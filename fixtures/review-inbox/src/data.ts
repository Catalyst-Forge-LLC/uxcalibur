export interface Note {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly body: readonly string[];
}

// Synthetic, deterministic records. IDs own identity; titles may repeat.
export const notes: readonly Note[] = Array.from({ length: 72 }, (_, index) => {
  const number = index + 1;
  const topic = index % 3 === 0 ? 'Orchard' : index % 3 === 1 ? 'Harbor' : 'Workshop';
  return {
    id: `note-${String(number).padStart(3, '0')}`,
    title: number === 25 || number === 49 ? 'Orchard handoff' : `${topic} review ${number}`,
    summary: `${topic} team note ${number}: decisions, open questions, and the next handoff.`,
    body: Array.from({ length: number === 49 ? 18 : 5 }, (_, paragraph) =>
      `${topic} note ${number}, section ${paragraph + 1}. ` +
      'The team reviewed the current work and recorded the decision before moving on. ' +
      'The next reviewer should compare the proposed result with the original request, ' +
      'preserve useful context, and identify the remaining question. ' +
      (number === 49 && paragraph === 8
        ? 'The final Orchard handoff owner is Mara; the agreed next action is to review the inventory on Thursday.'
        : 'This record is fictional and contains no customer information.'),
    ),
  };
});

/** All trimmed whitespace-separated terms must match somewhere in title/summary/body.
 * Case-insensitive literal substring matching; full local corpus; stable fixture order.
 */
export function searchNotes(query: string): readonly Note[] {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return notes.filter(note => {
    const text = [note.title, note.summary, ...note.body].join(' ').toLowerCase();
    return terms.every(term => text.includes(term));
  });
}
