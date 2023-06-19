const { BeforeAll, Given, Then, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { setDefaultTimeout } = require('@cucumber/cucumber');



let browser;
let context


BeforeAll(async () => {
    console.log('Before hook is active')
    setDefaultTimeout(10 * 1500); // Set timeout to 10 seconds
  browser = await chromium.launch({
    headless: false

  });
  context = await browser.newContext();
  page = await context.newPage();
  
});




AfterAll(async () => {
  await browser.close();
});


