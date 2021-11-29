import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');
import fetch from 'node-fetch';
const month = '09';
const year = '2020';
(async () => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto(`https://www.pmu.fr/turf/`);
    await delay(3000);
    //await page.waitForXPath('//*[@id="axeptio_overlay"]/div/div/div[1]');

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    

    await page.waitForXPath('//*[@id="axeptio_overlay"]/div/div/div[1]');
    let el= await page.$x('//*[@id="axeptio_overlay"]/div/div/div[1]');
      await  el[0].click();

      await delay(3000);
      for(let test=0; test<15; test++){
      await delay(3000);     await page.waitForXPath('//*[@id="programme-header"]/div[3]/div[1]');
    let el2= await page.$x('//*[@id="programme-header"]/div[3]/div[1]');
    el2[0].click();

 
    await delay(3000);     
 
  await page.waitForXPath('//*[@id="programme-title"]/div[2]');
  //assuming it's the first element
  let [element] = await page.$x('//*[@id="programme-title"]/div[2]');
   let text3= await page.evaluate(element => element.textContent, element);

      await delay(3000);

     await page.waitForXPath('//*[@id="asideLayout"]/div/div[1]/div/div/div[2]/a');
      let el3= await page.$x('//*[@id="asideLayout"]/div/div[1]/div/div/div[2]/a');
        await  el3[0].click();
        await delay(3000);
        let text="";
     //*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[4]/div[2]
     for(let num=1;num<=5;num++){
     await page.waitForXPath('//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[4]/div[2]/div['+num+']/div');
//assuming it's the first element
let [element] = await page.$x('//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[4]/div[2]/div['+num+']/div');
 text+= await page.evaluate(element => element.textContent, element);
  
text+=";";
      

     } 
     /*
     let text2="";
     await page.waitForXPath('//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[4]');
     //assuming it's the first element
     let [element2] = await page.$x('//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[4]');
      text2= await page.evaluate(element2 => element2.textContent, element2);*/
       
  

   
     let el4= await page.$x('//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[1]/div');
     await  el4[0].click();
     await delay(3000);

     const response = await fetch(
      "https://memo.krissclotilde.com/insert/tache",
      {
        method: "POST",
        body: JSON.stringify({
          msg: text3+":"+text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resbis = await response.json();




     
     console.log(resbis+text3+":"+text);
    }
     /*  
    await page.waitForSelector('#ProductSearchInput');

    // await page.type('input[name=search]', 'Adenosine triphosphate');
    await page.$eval('#ProductSearchInput', el => el.value = 'test');
    await page.waitForSelector('#search-btn');
    await page.click('#search-btn');
    await page.waitForSelector('main.container > section:nth-child(5)');
    const text = await page.evaluate(() => {
        const anchor = document.querySelector('main.container > section:nth-child(5)');
        return anchor.getAttribute("href");
    });

*/
	//console.log(text);
	function delay(time) {
   return new Promise(function(resolve) {
        
       setTimeout(resolve, time)

   });

  
}
})(); 
