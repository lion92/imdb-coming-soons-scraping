

(async () => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('https://www.leboncoin.fr/');
    await delay(2000);
   
    await page.waitForSelector('#ProductSearchInput');
   
    await page.$eval('#ProductSearchInput', el => el.value = 'liliana');
  
    await delay(2000);


 let el= await page.$x('//*[@id="search-btn"]');
          await  el[0].click();
   


    })();
      /*
      let [element] = await page.$x('//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[4]/div[2]/div['+num+']/div');
 text+= await page.evaluate(element => element.textContent, element);*/
 function delay(time) {
    return new Promise(function(resolve) {
         
        setTimeout(resolve, time)
 
    })
}