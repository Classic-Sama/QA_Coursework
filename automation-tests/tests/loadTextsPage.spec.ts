import { test, expect } from '@playwright/test';

test('TC-01 - Load Texts Landing Page', async ({ page }) => { 
  /*act
	MOVE ME TO THE INTERNET ARCHIVE TEXTS LLLLLANDING PAGE*/
  await page.goto('/details/texts', { waitUntil: 'domcontentloaded' });

  /*assert //dominance
  	check if evelysin is oke*/
  await expect(page).toHaveURL(/texts/);
});
