import { test, expect } from '@playwright/test';

test('TC-03 - Search with Valid Keyword', async ({ page }) => {
  /*act
    to search results page for an nice book*/
  await page.goto(
    '/search?query=Do+Androids+Dream+of+Electric+Sheep&tab=collection',
    { waitUntil: 'domcontentloaded' }
  );

  /*assert
    see if has the book*/
  const results = page.locator('article.cell-container');
  await expect(results.first()).toBeVisible({ timeout: 10000 });
  const count = await results.count();
  expect(count).toBeGreaterThan(0);
});
