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
  await page.getByText('I am the business owner or authorized signer on all accounts.').click();
  await page.getByText('Continue').click();
  await page.getByText('What type of business do you have?').click();
  await page.locator('#inputLabel_1').click();
  await context.close();
});

