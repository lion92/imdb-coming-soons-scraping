import { createRequire } from "module";
const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://www.canalturf.com/courses_archives.php`);
  await delay(3000);

  await page.waitForXPath(
    '//*[@id="sd-cmp"]/div[2]/div[1]/div/div/div/div/div/div[2]/div[2]/button[2]'
  );
  let el = await page.$x(
    '//*[@id="sd-cmp"]/div[2]/div[1]/div/div/div/div/div/div[2]/div[2]/button[2]'
  );
  await el[0].click();
  await delay(1200);

  await page.waitForXPath('//*[@id="calendar1"]');
  let el2 = await page.$x('//*[@id="calendar1"]');
  //*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[2]/td[7]
  await el2[0].click();
  await delay(1200);


  
  for (let i = 2; i < 7; i++) {
    for (let j = 1; j < 7; j++) {
      try {
        await delay(1200);

        await page.waitForXPath(
          '//*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[' +
            i +
            "]/td[" +
            j +
            "]"
        );
        //assuming it's the first element
        let [element] = await page.$x(
          '//*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[' +
            i +
            "]/td[" +
            j +
            "]"
        );
        let text3 = await page.evaluate(
          (element) => element.textContent,
          element
        );

        console.log(text3);
      } catch (error) {
        console.log(error);
      }
    }
  }
  //*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[2]/td[1]

  //*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[2]/td[1]
  //*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[2]/td[4]
  //*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[6]/td[6]
})();
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
