import { createRequire } from "module";
const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer");


(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://www.tel.fr/res/la-reunion/`);

  await delay(3000);
  
})();
function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }
  async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}