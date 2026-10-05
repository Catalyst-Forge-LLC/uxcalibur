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
  await page.goto('/?q=Orchard&note=missing');
  await expect(page.getByRole('heading', { name: 'Note unavailable' })).toBeVisible();
  await page.getByRole('button', { name: 'Back to results' }).click();
  await expect(page.getByRole('status')).toContainText('24 notes');
});
