import {test, expect, Browser, Page, locator} from '@playwright/test';
import {webkit, chromium, firefox} from 'playwright';

test('login test', async () => {

    const browser:Browser = await chromium.launch({ headless: false });
    browser. newPage();
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    const emailId:locator = await page.locator('#input-email');
    const password:locator= await page.locator('#input-password');
    const login:locator = await page.locator("[type='submit']");

    await emailId.fill("pwtest@openchart.com");
    await password.fill("playwright@123");
    await login.click();
    const title= await page.title();

    console.log('Page title is: ' + title);
    await page.screenshot({ path: 'Homepage.png', fullPage: true})

    expect(title).toEqual('Account Login');

    browser.close();
})


