import { test, expect } from '@playwright/test';

test('basic login test', async ({ page }) => {
  await page.goto('https://www.td.com/us/en/personal-banking');
  await expect(page).toHaveTitle(/TD Bank/);
  //await page.locator("(//span[contains(@class, 'cmp-site-utility-nav__label')])[5]").click();
  await page.getByRole('button', {name: 'Log In'}).click()
  await expect(page.getByText('Log in to your other accounts')).toBeVisible();
});