import { test, expect } from '@playwright/test';



test('basic login test', async ({ page }) => {
  await page.goto('https://www.td.com/us/en/personal-banking');
  await expect(page).toHaveTitle(/TD Bank/);
  //await page.locator("(//span[contains(@class, 'cmp-site-utility-nav__label')])[5]").click();
  await page.getByRole('button', {name: 'Log In'}).click()
  await expect(page.getByText('Log in to your other accounts').first()).toBeVisible();

});

test('sign up the account', async ({ browser }) => {
  // create a new context from the provided `browser` fixture
  const context = await browser.newContext({
    permissions: ['geolocation'],
    geolocation: { longitude: 12.4924, latitude: 41.8902 }
  });
  const page = await context.newPage();
  await page.goto('https://www.td.com/us/en/personal-banking');
  await page.getByRole('link', { name: 'Sign-Up' }).click();
  await page.getByText('Small business account(s)').click();
  //await page.locator('#Business').click();
  await page.locator('.ngp-form-label-visible card').click();
  await page.getByText('Continue').click();
  //await page.getByText('What type of business do you have?').click();
  await page.locator('//input[@name="firstName"]').fill('jai');
  await page.getByPlaceholder('Please enter an e-mail').fill('jai@example.com');
  await page.locator('//input[@name="lastName"]').fill('king');
  //await context.close();
});

