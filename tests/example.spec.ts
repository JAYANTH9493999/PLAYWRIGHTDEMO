
import { test, expect } from '@playwright/test';
type Page = import('@playwright/test').Page;

test.describe('Playwright homepage', () => {
  test('has title', async ({ page }: { page: Page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }: { page: Page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});
