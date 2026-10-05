import { notes, searchNotes, type Note } from './data';

const root = document.querySelector<HTMLElement>('#app');
if (!root) throw new Error('Review inbox requires #app.');
const app = root;

function element<K extends keyof HTMLElementTagNameMap>(tag: K, text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  return node;
}

function route(): { query: string; noteId: string | null } {
  const params = new URL(location.href).searchParams;
  return { query: params.get('q') ?? '', noteId: params.get('note') };
}

function navigate(noteId: string | null): void {
  const url = new URL(location.href);
  if (noteId) url.searchParams.set('note', noteId);
  else url.searchParams.delete('note');
  history.pushState(null, '', url);
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
      open.addEventListener('click', () => navigate(note.id));
      row.append(open);
      list.append(row);
    }
  }
  input.addEventListener('input', () => {
    const url = new URL(location.href);
    if (input.value) url.searchParams.set('q', input.value);
    else url.searchParams.delete('q');
    history.replaceState(null, '', url);
    update();
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
}

function renderDetail(note: Note | undefined): void {
  const back = element('button', 'Back to results');
  back.type = 'button';
  back.className = 'back';
  back.addEventListener('click', () => navigate(null));
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
  const { query, noteId } = route();
  app.replaceChildren();
  if (noteId) renderDetail(notes.find(note => note.id === noteId));
  else renderList(query);
}

window.addEventListener('popstate', render);
render();
