import {test, expect, Browser, Page, locator, BrowserContext} from '@playwright/test';
import {webkit, chromium, firefox} from 'playwright';

// browser level authonetication accessing without passing crediantiols in url

test ('broswer auth login', async() => {

    const browser: Browser = await chromium.launch({headless: false});

    //await browser.newPage();

    const page : Page =await browser.newPage();

    await page.goto('https://www.spicejet.com/');

    await page.getByText('Add-ons').first().hover();
    await page.getByText('SpiceMax').first().click();

    await page.waitForTimeout(12000);
});

//mouseHower.spec.ts