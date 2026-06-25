import {test, expect, Browser, Page, locator, BrowserContext} from '@playwright/test';
import {webkit, chromium, firefox} from 'playwright';

// browser level authonetication accessing without passing crediantiols in url

test ('broswer auth login', async() => {

    const browser: Browser = await chromium.launch({headless: false});

    //await browser.newPage();

    const page : Page =await browser.newPage();
    
    const userName = 'admin';
    const password = 'admin';

    const authHeader = 'Basic ' + btoa(userName+':'+password);
    page.setExtraHTTPHeaders({Authorization : authHeader});

    await page.goto('https://the-internet.herokuapp.com/basic_auth')


    //await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')



    await new Promise (() => {});

})