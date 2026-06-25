import {test, expect, local, browser, page, BrowserContext} from '@playwright/test';
import {webkit, firefox, chromium} from 'playwright';


test('chainingLcator', async () =>{

    const browser = await chromium.launch({headless: false})

    const context: BrowserContext = await browser.newContext()

})