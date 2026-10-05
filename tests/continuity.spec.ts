import { test, expect } from '@playwright/test';

const cases = [
  { name: 'keyboard app return', width: 1280, height: 800, pointer: false, browserBack: false },
  { name: 'narrow keyboard app return', width: 390, height: 844, pointer: false, browserBack: false },
  { name: 'pointer app return', width: 1280, height: 800, pointer: true, browserBack: false },
  { name: 'browser Back and Forward', width: 1280, height: 800, pointer: false, browserBack: true },
];

for (const scenario of cases) {
  test(`CUT-001 ${scenario.name}`, async ({ page }) => {
    await page.setViewportSize({ width: scenario.width, height: scenario.height });
    await page.goto('/?q=Orchard');
    const note = page.getByRole('button', { name: 'Open Orchard handoff, note-049', exact: true });
    await note.scrollIntoViewIfNeeded();
    if (!scenario.pointer) await note.focus();
    const origin = await page.evaluate(() => ({
      scrollTop: document.querySelector('.results')!.scrollTop,
      windowY: window.scrollY,
      historyLength: history.length,
    }));
    expect(origin.scrollTop).toBeGreaterThan(500);
    if (scenario.pointer) await note.click();
    else await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/note=note-049/);
    await expect(page.getByRole('heading', { name: 'Orchard handoff' })).toBeFocused();
    const answer = page.getByText(/final Orchard handoff owner is Mara/);
    await answer.scrollIntoViewIfNeeded();
    await expect(answer).toBeVisible();
    await expect(answer).toContainText('review the inventory on Thursday');
    if (scenario.browserBack) await page.goBack();
    else if (scenario.pointer) await page.getByRole('button', { name: 'Back to results' }).click();
    else {
      await page.keyboard.press('Shift+Tab');
      await expect(page.getByRole('button', { name: 'Back to results' })).toBeFocused();
      await page.keyboard.press('Enter');
    }
    await expect(page).toHaveURL(/\?q=Orchard$/);
    await expect(page.getByRole('status')).toContainText('24 notes');

    const returned = await page.evaluate(() => ({
      query: (document.querySelector('#search') as HTMLInputElement).value,
      focusId: (document.activeElement as HTMLElement).dataset.noteId ?? null,
      scrollTop: document.querySelector('.results')!.scrollTop,
      windowY: window.scrollY,
      historyLength: history.length,
    }));
    expect(returned, 'CUT-001: restore the originating review context without an extra history entry').toEqual({
      query: 'Orchard', focusId: 'note-049', scrollTop: origin.scrollTop,
      windowY: origin.windowY, historyLength: origin.historyLength + 1,
    });
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Open Orchard review 52, note-052', exact: true })).toBeFocused();

    if (scenario.browserBack) {
      await page.goForward();
      await expect(page).toHaveURL(/note=note-049/);
      await expect(page.getByRole('heading', { name: 'Orchard handoff' })).toBeFocused();
      expect(await page.evaluate(() => window.scrollY)).toBe(0);
      await page.goBack();
      await expect(note).toBeFocused();
      expect(await page.locator('.results').evaluate(node => node.scrollTop)).toBe(origin.scrollTop);
    }
  });
}
