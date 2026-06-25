import {test, expect, Browser, Page, locator, BrowserContext} from '@playwright/test';
import {webkit, chromium, firefox} from 'playwright';

test('login test', async () => {

    const browser:Browser= await chromium.launch({headless: false})

   // Browser cContext 1
    const browserContext_1: BrowserContext = await browser.newContext();

    const page1: Page = await browserContext_1.newPage();

    //Browser Context 2
     const browserContext_2: BrowserContext = await browser.newContext();

    const page2: Page = await browserContext_2.newPage();

    //browser 1

    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const emailId1: locator = await page1.locator('#input-email');
    const password1: locator = await page1.locator('#input-password');
    const login1: locator = await page1.locator("[type='submit']");

    await emailId1.fill("pwtest@openchart.com");
    await password1.fill("playwright@123");
    await login1.click();

    //browser 2

    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const emailId2: locator = await page2.locator('#input-email');
    const password2: locator = await page2.locator('#input-password');
    const login2: locator = await page2.locator("[type='submit']");

    await emailId2.fill("testuser7798@gmail.com");
    await password2.fill("User@1234");
    await login2.click();
 

    // await browserContext_1.close();
    // await browserContext_2.close();

    // browser.close();

  await new Promise (() =>{});
})