import { createRequire } from "module";
const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer");
import fetch from "node-fetch";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://www.pmu.fr/turf/`);
  await delay(2000);

  await page.waitForXPath('//*[@id="axeptio_btn_acceptAll"]');
  let el = await page.$x('//*[@id="axeptio_btn_acceptAll"]');
  await el[0].click();

  
  for (let i = 1; i < 8; i++) {

    for(let g=16; g<25;g++){
      if(i>2){
        break;
      }else{
    await delay(2000);
    await page.waitForXPath('//*[@id="programme-header"]/div[3]/div[1]');
    let el2 = await page.$x('//*[@id="programme-header"]/div[3]/div[1]');
    await el2[0].click();
    await delay(2000);
  }
    }

    await page.waitForXPath(
        '//*[@id="programme-title"]/div[2]'
      );
      //assuming it's the first element
      let [element33] = await page.$x(
        '//*[@id="programme-title"]/div[2]'
      );
      let text33 = await page.evaluate((element33) => element33.textContent, element33);
      //console.log(text33)
   
      await delay(2000);

    await page.waitForXPath(
      '//*[@id="asideLayout"]/div/div[1]/div/div/div[2]/a/div'
    );
    let el3 = await page.$x(
      '//*[@id="asideLayout"]/div/div[1]/div/div/div[2]/a/div'
    );
    await el3[0].click();
      
    await delay(2000);
    await page.waitForXPath(
      '//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[4]/div[2]'
    );
    //assuming it's the first element
    let [element] = await page.$x(
      '//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[4]/div[2]'
    );
    let text3 = await page.evaluate((element) => element.textContent, element);
    //console.log(text3);
    //*[@id="avoid-stacking-context-creation"]/div[3]/div[2]/div[1]/div[2]/div/div[1]/div[1]/div[2]
    //*[@id="avoid-stacking-context-creation"]/div[3]/div[3]/div[1]/div[2]/div/div[1]/div[1]/div[2]
    for (let j = 1; j < 6; j++) {
      await delay(2000);

      await page.waitForXPath(
        '//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[4]/div[2]/div[' +
          j +
          "]/div"
      );
      //assuming it's the first element
      let [element2] = await page.$x(
        '//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[4]/div[2]/div[' +
          j +
          "]/div"
      );
      let text4 =
        " " +
        (await page.evaluate((element2) => element2.textContent, element2));
      //console.log(text4);
    }

    for (let j = 1; j < 20; j++) {
      await delay(2000);
      try {
        await page.waitForXPath(
          '//*[@id="avoid-stacking-context-creation"]/div[3]/div[' +
            j +
            "]/div[1]/div[2]/div/div[1]/div[1]/div[1]/a/span"
        );
        //assuming it's the first element
        let [element2] = await page.$x(
          '//*[@id="avoid-stacking-context-creation"]/div[3]/div[' +
            j +
            "]/div[1]/div[2]/div/div[1]/div[1]/div[1]/a/span"
        );
        let text5 =
          " " +
          (await page.evaluate((element2) => element2.textContent, element2));
        //console.log(text5);
        await page.waitForXPath(
          '//*[@id="avoid-stacking-context-creation"]/div[3]/div[' +
            j +
            "]/div[1]/div[2]/div/div[1]/div[1]/div[2]"
        );
        //assuming it's the first element
        let [element3] = await page.$x(
          '//*[@id="avoid-stacking-context-creation"]/div[3]/div[' +
            j +
            "]/div[1]/div[2]/div/div[1]/div[1]/div[2]"
        );
        let text6 =
          " " +
          (await page.evaluate((element3) => element3.textContent, element3));
        ////console.log(text6);

        await page.waitForXPath(
          '//*[@id="avoid-stacking-context-creation"]/div[3]/div[' +
            j +
            "]/div[1]/div[1]/div[1]"
        );
        //assuming it's the first element
        let [element10] = await page.$x(
          '//*[@id="avoid-stacking-context-creation"]/div[3]/div[' +
            j +
            "]/div[1]/div[1]/div[1]"
        );
        let text10 =
          " " +
          (await page.evaluate(
            (element10) => element10.textContent,
            element10
          ));
        ////console.log(text10);
        console.log("insert into chevaux(nom, entraineur, numero, date) values('"+text5.replace(/[']/g,"")+"','"+text6.replace(/[']/g,"")+"','"+text10.replace(/[']/g,"")+"','"+text33.replace(/[']/g,"")+"');")
      } catch (error) {
        //console.log("pas de cheveaux");
      }
    }
    await delay(2000);
    await page.waitForXPath(
      '//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[1]/div'
    );
    let el5 = await page.$x(
      '//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[1]/div'
    );
    await el5[0].click();
  }

  function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }
})();
