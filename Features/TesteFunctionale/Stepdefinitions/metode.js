const { BeforeAll, Given, Then, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { setDefaultTimeout } = require('@cucumber/cucumber');
var assert  = require("assert")


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


    Then('Deschid URL-ul www.hyperion.ro', async function() {
        //setDefaultTimeout(10 * 1000); // Set timeout to 10 seconds
       // await new Promise(r => setTimeout(r, 30000));
        await page.goto('https://www.hyperion.ro/');
        // await global.page.waitForUrl(/hyperion.ro/);

        await new Promise(r => setTimeout(r, 1000));
    })

    Then('Ar trebui sa fie afisata pagina Home', async function() {
        const home_title = await page.title();
        console.log('asta i title : ' + home_title)
        assert.equal(home_title, "Home - Universitatea Hyperion din București")
        await new Promise(r => setTimeout(r, 4000))
        })

    Then('Verific daca banner-ul hyperion homepage este afisat', async function() {
        let banner = await page.$$('//img[@alt="Universitatea Hyperion din București"]')
        // try {
        //     await page.waitForSelector(banner);
        //     assert.ok(true, 'Banner-ul Hyperion este afișat pe pagina de start.');
        //   } catch (error) {
        //     assert.fail('Banner-ul Hyperion nu este afișat pe pagina de start.');
        //   }
        assert.equal(banner.length > 0, true);
        })