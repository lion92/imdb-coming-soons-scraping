import { createRequire } from "module";
const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer");
(async () => {

        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(`https://offline.turfinfo.api.pmu.fr/rest/client/7/programme/26112020/R3/C2/participants`);
        await delay(3000);



  
        page.on('response', async (response) => {    
          if (response.url() == "https://offline.turfinfo.api.pmu.fr/rest/client/7/programme/26112020/R3/C2/participants"){
              console.log('XHR response received'); 
              console.log(await response.json()); 
          } 
      }); 
  
  
})()
function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }
  