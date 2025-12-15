import { test, expect } from '@playwright/test';

test('TC-04 - Search With No Results', async ({ page }) => {
  /*act
  	goes to page vith an invalid key word search*/
  await page.goto(
    '/search?query=nonexistentrandomxyz123&and[]=mediatype%3A%22texts%22',
    { waitUntil: 'domcontentloaded' }
  );

  /*assert
  	checks ifpage haz ZEROU items displayed*/
  await expect(page.locator('.item-ia')).toHaveCount(0);
});
