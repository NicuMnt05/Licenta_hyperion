const { BeforeAll, Given, Then, AfterAll } = require('cucumber');
const { chromium } = require('playwright');
const { setDefaultTimeout } = require('cucumber');



Then('Verify in you can open an URL', async function() {
    //setDefaultTimeout(10 * 1000); // Set timeout to 10 seconds
   // await new Promise(r => setTimeout(r, 30000));
    await page.goto('https://www.google.com');
    await new Promise(r => setTimeout(r, 1000));
    
})

    Then('Verify if you can type in the searchbar', async function() { 

        await page.click('//button[@id="L2AGLb"]')
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('//textarea[@id="APjFqb"]', 'Universitatea hyperion')
    await new Promise(r => setTimeout(r, 1000))
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 1000))
    })


    Then('Verify if you can open a Website', async function() {

    await page.click('(//*[contains(text(),"Universitatea Hyperion din București")])[1]')
    await new Promise(r => setTimeout(r, 4000))



    })