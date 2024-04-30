import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://codepen.io/');
  await page.getByRole('link', { name: 'Search Pens' }).click();
  await page.locator('[data-test-id="search-input"]').click();
  await page.locator('[data-test-id="search-input"]').fill('ducks');
  await page.locator('[data-test-id="search-input"]').press('Enter');
});