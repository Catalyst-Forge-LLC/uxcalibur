import { test, expect } from '@playwright/test';

test('searches the full corpus, opens stable identity, and recovers from no match', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('status')).toContainText('72 notes');
  const search = page.getByRole('searchbox', { name: 'Search notes' });
  await search.fill('Orchard');
  await expect(page.getByRole('status')).toContainText('24 notes');
  await expect(page.getByRole('button', { name: 'Open Orchard handoff, note-025', exact: true })).toHaveCount(1);
  await page.getByRole('button', { name: 'Open Orchard handoff, note-049', exact: true }).click();
  await expect(page).toHaveURL(/note=note-049/);
  await expect(page.getByRole('heading', { name: 'Orchard handoff' })).toBeFocused();
  await expect(page.getByText(/final Orchard handoff owner is Mara/)).toBeVisible();
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(search).toHaveValue('Orchard');
  await search.fill('no-such-note');
  await expect(page.getByRole('status')).toContainText('0 notes');
  await page.getByRole('button', { name: 'Clear search' }).click();
  await expect(search).toBeFocused();
  await expect(page.getByRole('status')).toContainText('72 notes');
});

test('keyboard can open a note; narrow view can read and return without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/?q=Orchard');
  const note = page.getByRole('button', { name: 'Open Orchard handoff, note-049', exact: true });
  await note.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/note=note-049/);
  const heading = page.getByRole('heading', { name: 'Orchard handoff' });
  await expect(heading).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(page.getByRole('searchbox')).toHaveValue('Orchard');
});

test('deep links and unavailable note IDs recover to usable results', async ({ page }) => {
  await page.goto('/?q=Orchard&note=note-049');
  await expect(page.getByRole('heading', { name: 'Orchard handoff' })).toBeVisible();
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(page.getByRole('status')).toContainText('24 notes');
  await expect(page.getByRole('searchbox')).toBeFocused();
  expect(await page.locator('.results').evaluate(node => node.scrollTop)).toBe(0);
  await page.goto('/?q=Orchard&note=missing');
  await expect(page.getByRole('heading', { name: 'Note unavailable' })).toBeVisible();
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(page.getByRole('status')).toContainText('24 notes');
  await expect(page.getByRole('searchbox')).toBeFocused();
  await expect(page).toHaveURL(/\?q=Orchard$/);
});

test('preserves complete literal AND search, result order, and resets changed-query anchors', async ({ page }) => {
  await page.goto('/?q=Orchard');
  expect(await page.locator('[data-note-id]').evaluateAll(nodes => nodes.map(node => (node as HTMLElement).dataset.noteId))).toEqual(
    Array.from({ length: 24 }, (_, index) => `note-${String(index * 3 + 1).padStart(3, '0')}`),
  );
  const firstHandoff = page.getByRole('button', { name: 'Open Orchard handoff, note-025', exact: true });
  await firstHandoff.click();
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(firstHandoff).toBeFocused();
  const search = page.getByRole('searchbox');
  await search.fill('orCHard Mara Thursday');
  await expect(page.getByRole('status')).toContainText('1 note ·');
  expect(await page.locator('.results').evaluate(node => node.scrollTop)).toBe(0);
  const answerNote = page.getByRole('button', { name: 'Open Orchard handoff, note-049', exact: true });
  await answerNote.click();
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(answerNote).toBeFocused();
  await page.getByRole('button', { name: 'Clear search' }).click();
  await expect(search).toBeFocused();
  await expect(page.getByRole('status')).toContainText('72 notes');
  expect(await page.locator('.results').evaluate(node => node.scrollTop)).toBe(0);
});

test('app return traverses its origin and ordinary Back reaches the existing prior page', async ({ page }) => {
  await page.goto('/?q=Harbor');
  await page.goto('/?q=Orchard');
  await page.evaluate(() => history.replaceState({ ...history.state, unrelated: 'preserve me' }, '', location.href));
  await page.getByRole('button', { name: 'Open Orchard handoff, note-049', exact: true }).click();
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(page).toHaveURL(/\?q=Orchard$/);
  expect(await page.evaluate(() => history.state.unrelated)).toBe('preserve me');
  await page.goForward();
  await expect(page).toHaveURL(/note=note-049/);
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(page).toHaveURL(/\?q=Orchard$/);
  await page.goBack();
  await expect(page).toHaveURL(/\?q=Harbor$/);
  await expect(page.getByRole('searchbox')).toHaveValue('Harbor');
});

test('Forward from a changed origin uses safe same-query fallback instead of a stale anchor', async ({ page }) => {
  await page.goto('/?q=Orchard');
  await page.getByRole('button', { name: 'Open Orchard handoff, note-049', exact: true }).click();
  await page.goBack();
  await page.getByRole('searchbox').fill('Harbor');
  await page.goForward();
  await expect(page).toHaveURL(/q=Orchard&note=note-049/);
  const length = await page.evaluate(() => history.length);
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(page).toHaveURL(/\?q=Orchard$/);
  await expect(page.getByRole('searchbox')).toHaveValue('Orchard');
  await expect(page.getByRole('searchbox')).toBeFocused();
  expect(await page.locator('.results').evaluate(node => node.scrollTop)).toBe(0);
  expect(await page.evaluate(() => history.length)).toBe(length);
});

test('rapid app return activations cannot skip the originating results entry', async ({ page }) => {
  await page.goto('/?q=Harbor');
  await page.goto('/?q=Orchard');
  const note = page.getByRole('button', { name: 'Open Orchard handoff, note-049', exact: true });
  await note.click();
  await page.getByRole('button', { name: 'Back to results' }).dblclick({ delay: 0 });
  await expect(page).toHaveURL(/\?q=Orchard$/);
  await expect(note).toBeFocused();
});

test('resize while reading reveals the same anchor within clamped list and page bounds', async ({ page }) => {
  await page.goto('/?q=Orchard');
  const note = page.getByRole('button', { name: 'Open Orchard handoff, note-049', exact: true });
  await note.focus();
  await page.keyboard.press('Enter');
  await page.getByText(/final Orchard handoff owner is Mara/).scrollIntoViewIfNeeded();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(note).toBeFocused();
  const bounds = await note.evaluate(node => {
    const row = node.getBoundingClientRect();
    const list = node.closest('.results')!.getBoundingClientRect();
    return { top: row.top, bottom: row.bottom, listTop: list.top, listBottom: list.bottom, height: innerHeight, overflow: document.documentElement.scrollWidth > innerWidth };
  });
  expect(bounds.top).toBeGreaterThanOrEqual(Math.max(0, bounds.listTop) - 1);
  expect(bounds.bottom).toBeLessThanOrEqual(Math.min(bounds.height, bounds.listBottom) + 1);
  expect(bounds.overflow).toBeFalsy();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Open Orchard review 52, note-052', exact: true })).toBeFocused();
});
