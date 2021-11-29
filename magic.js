import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('https://www.cardmarket.com/fr/Magic');
    await delay(2000);
   
   // await page.waitForXPath('//*[@id="axeptio_overlay"]/div/div/div[1]');

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    await delay(2000);
    await page.waitForSelector("#ProductSearchInput");
    await page.$eval('#ProductSearchInput', el => el.value = 'liliana');
    await delay(2000);
    await page.waitForXPath('//*[@id="search-btn"]');
    
    let el= await page.$x('//*[@id="search-btn"]');
    await delay(2000);
    await  el[0].click();
    await delay(2000);
   /* const nodeChildren = await page.$eval("body > main > section > div.table.table-striped > div.table-body", (uiElement) => {
        return uiElement.children;
      });
      console.log(nodeChildren[0]);*/

   await  page.waitForXPath('//*[@id="productRow470339"]/div[6]');
    const [els] = await page.$x('//*[@id="productRow470339"]/div[6]');


   let  test=await page.evaluate(els => els.textContent,els);
    await console.log(test);
    })();
   
 function delay(time) {
    return new Promise(function(resolve) {
         
        setTimeout(resolve, time)
 
    })
}