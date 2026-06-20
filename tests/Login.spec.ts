import { test, expect } from '@playwright/test';

//npm installplaywright --save-dev
//npm install @playwright/test --save-dev 
//npm install typescript  --save-dev
//npx tsc--init
// pw test runner -ms --vsc 



test('basic login test', async ({ page }) => {
  await page.goto('https://www.td.com/us/en/personal-banking');
  await expect(page).toHaveTitle(/TD Bank/);
  const loginButton = page.getByRole('button', { name: 'Log In' });
  await loginButton.waitFor({ state: 'visible' });
  await loginButton.click();
  const loginText = page.getByText('Log in to your other accounts').first();
  await loginText.waitFor({ state: 'visible' });
  await expect(loginText).toBeVisible();
});

test('sign up the account', async ({ browser }) => {
  // create a new context from the provided `browser` fixture
  const context = await browser.newContext({
    permissions: ['geolocation'],
    geolocation: { longitude: 12.4924, latitude: 41.8902 }
  });
  const page = await context.newPage();
  await page.goto('https://www.td.com/us/en/personal-banking');
  const signUpLink = page.getByRole('link', { name: 'Sign-Up' });
  await signUpLink.waitFor({ state: 'visible' });
  await signUpLink.click();
  const smallBusinessOption = page.getByText('Small business account(s)');
  await smallBusinessOption.waitFor({ state: 'visible' });
  await smallBusinessOption.click();
  //await page.locator('#Business').click();
  const ownerConfirmation = page.locator('#Business');
  await ownerConfirmation.waitFor({ state: 'visible' });
  await ownerConfirmation.check();
  const continueButton = page.getByText('Continue');
  await continueButton.waitFor({ state: 'visible' });
  await continueButton.click();
  const firstNameInput = page.locator('//input[@name="firstName"]');
  await firstNameInput.waitFor({ state: 'visible' });
  await firstNameInput.fill('jai');
  const emailInput = page.getByPlaceholder('Please enter an e-mail');
  await emailInput.waitFor({ state: 'visible' });
  await emailInput.fill('jai@example.com');
  const lastNameInput = page.locator('//input[@name="lastName"]');
  await lastNameInput.waitFor({ state: 'visible' });
  await lastNameInput.fill('king');
  //await context.close();

  const title= await page.title();
  console.log('Page title is: ' + title);
  await page.screenshot({ path: 'example.png', fullPage: true });
});

