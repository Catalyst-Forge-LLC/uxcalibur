import { notes, searchNotes, type Note } from './data';

const root = document.querySelector<HTMLElement>('#app');
if (!root) throw new Error('Review inbox requires #app.');
const app = root;

type ListSnapshot = { noteId: string; scrollTop: number; windowY: number };
type NavigationState =
  | { kind: 'list'; key: string; query: string; snapshot?: ListSnapshot }
  | { kind: 'detail'; key: string; query: string; noteId: string; originKey?: string };
const knownOrigins = new Map<string, string>();
let returning = false;
history.scrollRestoration = 'manual';

function state(): NavigationState | undefined {
  return history.state?.uxcalibur;
}

function replaceState(next: NavigationState, url: URL = new URL(location.href)): void {
  history.replaceState({ ...history.state, uxcalibur: next }, '', url);
}

function freshList(query: string): NavigationState & { kind: 'list' } {
  return { kind: 'list', key: crypto.randomUUID(), query };
}

function element<K extends keyof HTMLElementTagNameMap>(tag: K, text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  return node;
}

function route(): { query: string; noteId: string | null } {
  const params = new URL(location.href).searchParams;
  return { query: params.get('q') ?? '', noteId: params.get('note') };
}

function openNote(noteId: string, list: HTMLElement): void {
  const { query } = route();
  const current = state();
  const origin = current?.kind === 'list' && current.query === query ? current : freshList(query);
  replaceState({ ...origin, snapshot: { noteId, scrollTop: list.scrollTop, windowY: window.scrollY } });
  knownOrigins.set(origin.key, query);
  const url = new URL(location.href);
  url.searchParams.set('note', noteId);
  const next: NavigationState = { kind: 'detail', key: crypto.randomUUID(), query, noteId, originKey: origin.key };
  history.pushState({ ...history.state, uxcalibur: next }, '', url);
  render();
}

function returnToResults(): void {
  if (returning) return;
  const current = state();
  if (current?.kind === 'detail' && current.originKey && knownOrigins.get(current.originKey) === current.query) {
    returning = true;
    const back = app.querySelector<HTMLButtonElement>('.back');
    if (back) back.disabled = true;
    history.back();
    return;
  }
  const url = new URL(location.href);
  url.searchParams.delete('note');
  replaceState(freshList(route().query), url);
  render();
}

function renderList(query: string): void {
  const heading = element('h1', 'Find a note');
  const intro = element('p', 'Search the inbox, read a note, and continue your review.');
  intro.className = 'intro';
  const form = element('form');
  form.setAttribute('role', 'search');
  form.addEventListener('submit', event => event.preventDefault());
  const label = element('label', 'Search notes');
  label.htmlFor = 'search';
  const controls = element('div');
  controls.className = 'search-controls';
  const input = element('input');
  input.id = 'search';
  input.type = 'search';
  input.value = query;
  input.placeholder = 'Title, summary, or note content';
  const clear = element('button', 'Clear search');
  clear.type = 'button';
  const count = element('p');
  count.className = 'result-count';
  count.setAttribute('role', 'status');
  const list = element('ul');
  list.className = 'results';
  list.setAttribute('aria-label', 'Notes');
  function update(): void {
    const matches = searchNotes(input.value);
    count.textContent = `${matches.length} ${matches.length === 1 ? 'note' : 'notes'} · all ${notes.length} records searched`;
    list.replaceChildren();
    if (!matches.length) {
      const empty = element('li', 'No notes match. Change your search or clear it to see all notes.');
      empty.className = 'empty';
      list.append(empty);
    }
    for (const note of matches) {
      const row = element('li');
      const open = element('button');
      open.type = 'button';
      open.className = 'note';
      open.dataset.noteId = note.id;
      open.setAttribute('aria-label', `Open ${note.title}, ${note.id}`);
      const title = element('strong', note.title);
      const id = element('span', note.id);
      id.className = 'note-id';
      const summary = element('span', note.summary);
      summary.className = 'summary';
      open.append(title, id, summary);
      open.addEventListener('click', () => openNote(note.id, list));
      row.append(open);
      list.append(row);
    }
  }
  input.addEventListener('input', () => {
    const url = new URL(location.href);
    if (input.value) url.searchParams.set('q', input.value);
    else url.searchParams.delete('q');
    const current = state();
    const key = current?.key ?? crypto.randomUUID();
    replaceState({ kind: 'list', key, query: input.value }, url);
    knownOrigins.set(key, input.value);
    update();
    list.scrollTop = 0;
    window.scrollTo(0, 0);
  });
  clear.addEventListener('click', () => {
    input.value = '';
    input.dispatchEvent(new Event('input'));
    input.focus();
  });
  controls.append(input, clear);
  form.append(label, controls);
  app.append(heading, intro, form, count, list);
  update();
  const current = state();
  const snapshot = current?.kind === 'list' && current.query === query ? current.snapshot : undefined;
  const anchor = snapshot ? Array.from(list.querySelectorAll<HTMLButtonElement>('button')).find(node => node.dataset.noteId === snapshot.noteId) : undefined;
  if (anchor && snapshot) {
    anchor.focus({ preventScroll: true });
    list.scrollTop = snapshot.scrollTop;
    window.scrollTo(0, snapshot.windowY);
    const rowBounds = anchor.getBoundingClientRect();
    const listBounds = list.getBoundingClientRect();
    if (rowBounds.top < listBounds.top + 1 || rowBounds.bottom > listBounds.bottom - 1 || rowBounds.top < 0 || rowBounds.bottom > innerHeight) {
      anchor.scrollIntoView({ block: 'nearest' });
    }
  } else {
    list.scrollTop = 0;
    window.scrollTo(0, 0);
    input.focus({ preventScroll: true });
  }
}

function renderDetail(note: Note | undefined): void {
  const back = element('button', 'Back to results');
  back.type = 'button';
  back.className = 'back';
  back.addEventListener('click', returnToResults);
  const article = element('article');
  const heading = element('h1', note?.title ?? 'Note unavailable');
  heading.tabIndex = -1;
  article.append(heading);
  if (note) {
    const id = element('p', note.id);
    id.className = 'note-id';
    article.append(id, ...note.body.map(text => element('p', text)));
  } else {
    article.append(element('p', 'This note ID is not in the synthetic inbox. Return to results to choose a note.'));
  }
  app.append(back, article);
  heading.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function render(): void {
  returning = false;
  const { query, noteId } = route();
  const current = state();
  if (!noteId && (current?.kind !== 'list' || current.query !== query)) replaceState(freshList(query));
  app.replaceChildren();
  if (noteId) renderDetail(notes.find(note => note.id === noteId));
  else renderList(query);
}

window.addEventListener('popstate', render);
// Fresh documents have URL identity but no known in-session review origin.
const initial = route();
replaceState(initial.noteId
  ? { kind: 'detail', key: crypto.randomUUID(), query: initial.query, noteId: initial.noteId }
  : freshList(initial.query));
render();
