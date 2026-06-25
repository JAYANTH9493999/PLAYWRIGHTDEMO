import {test, expect, Browser, Page, locator, BrowserContext} from '@playwright/test';
import {webkit, chromium, firefox} from 'playwright';

// browser level authonetication accessing without passing crediantiols in url

test ('broswer auth login', async() => {

    const browser: Browser = await chromium.launch({headless: false});

    //await browser.newPage();

    const page : Page =await browser.newPage();

    await page.goto('https://www.magupdate.co.uk/magazine-subscription/PALI');

  //drowp down using selectOption and using const
     const dropDown = 'select#Contact_CountryCode';
     await page.selectOption(dropDown, {label: 'Austria'});

// with out using const directly
    // await page.selectOption('#Contact_CountryCode', {label: 'India'})
    // await page.selectOption('#Contact_CountryCode', {value: 'IN'})
    //await page.selectOption('#Contact_CountryCode', {index: 101});

    // selecting all countries 
    //select#Contact_CountryCode>option

    const alloptions= await page.$$('#Contact_CountryCode' + '>option');

    console.log(alloptions.length);

    for(const e of alloptions){

        const alltext= await e.textContent()
        console.log(alltext);

        if(alltext === 'India'){

            await page.selectOption('#Contact_CountryCode', {label: alltext});
            break;
        }

    }



    await page.waitForTimeout(15000);
})


//Droupdown.spec.ts