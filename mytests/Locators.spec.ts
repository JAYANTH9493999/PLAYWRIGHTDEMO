import {test, expect, Browser, Page, locator, BrowserContext} from '@playwright/test';

import {webkit, chromium, firefox} from 'playwright';

test('locaotor practise', async() =>{

const browser: Browser = await chromium.launch({headless: false})

const context: BrowserContext = await browser.newContext();

const page: Page = await context.newPage();

await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');


//locator
await page.locator('css=input[id="input-firstname"]').fill('Naveen');
 
 const confirmPassword: locator = await page.locator('css=input[placeholder="Password Confirm"]');
   await confirmPassword.fill('Naveen@123');
 // text

//  const continueBtn: locator= await page.locator('text=Continue');
//  const validate = await continueBtn.isEnabled();
//  console.log('Continue button is enabled: ' + validate);

 const confirmbtn: locator= await page.locator('text=Continue').click();

 console.log('confirmatgions printing:'+ confirmbtn);

//xpath

 await page.locator('//input[@id="input-firstname" and @class="form-control" and @type="text"]').click();
 
//getByTestId: when the dom shows,( data-testid) we can use getbytestid
// if u having custum locator we can mention inside playwright.config.ts, giving testIdAttribute: 'data-naveenId'

await page.getByTestId('userName').fill('jai');

//getByRole: 

await expect (page.getByRole('heading', {name: 'Register Account'})).toBeVisible();
await expect (page.getByRole('link', {name: 'Forgotten Password'})).toBeVisible();
await expect (page.getByRole('radio', {name: 'Yes'})).toBeVisible();
await expect (page.getByRole('button', {name: 'Continue'})).toBeVisible();
await expect (page.getByRole('button', {name: 'Continue'})).toBeVisible();
 await new Promise (() => {}); 
})
