import { createRequire } from "module";
const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  for(let i=0; i<4; i++){
      let num=i*20;
  await delay(3000);
  await page.goto('https://www.turfomania.fr/pronostics/quintes.php?start='+num);
  await delay(5000);
if(!i>=1){
  await page.waitForXPath(
    '//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]'
  );
  let el = await page.$x(
    '//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]'
  );
  await el[0].click();
}
  await delay(600);
/*
  await page.waitForXPath('//*[@id="calendar1"]');
  let el2 = await page.$x('//*[@id="calendar1"]');
  //*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[2]/td[7]
  await el2[0].click();

  for (let i = 0; i < 2; i++) {
    await delay(600);
    await page.waitForXPath(
      '//*[@id="page-content"]/div[1]/div/div/div[1]/div/table/thead/tr/td[1]'
    );

    let el3 = await page.$x(
      '//*[@id="page-content"]/div[1]/div/div/div[1]/div/table/thead/tr/td[1]'
    );

    await el3[0].click();
  }
  await delay(600);

  for (let i = 2; i < 7; i++) {
    for (let j = 1; j < 8; j++) {
      try {
        await delay(600);

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

        if (text3 === "12") {
          await delay(600);
          await page.waitForXPath(
            '//*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[' +
              i +
              "]/td[" +
              j +
              "]"
          );

          let el4 = await page.$x(
            '//*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[' +
              i +
              "]/td[" +
              j +
              "]"
          );

          await el4[0].click();
          await delay(600);
          i=9;  
          j=9;
          break;

        }
      } catch (error) {
        console.log(error);
      }
    }
  }


  await delay(600);
  await page.waitForXPath(
    "//*[@id='acd-0']/div/div/li[1]/div/div[3]/div/a[1]"
  );
  /////////////////////////////////

  
  await delay(600);
  let el6 = await page.$x(
    "//*[@id='acd-0']/div/div/li[1]/div/div[3]/div/a[1]"
  );



  await el6[0].click();

for(let g=1; g<9;g++){
    try{
    await delay(600);
    await page.waitForXPath(
        "//*[@id='page-title']/div/div[2]/div[2]/a["+g+"]"
      );
  let el7 = await page.$x(
    "//*[@id='page-title']/div/div[2]/div[2]/a["+g+"]"
  );



  await el7[0].click();
  }catch(error){
      console.log(error);
  }
          try{

*/

  
  await delay(3000);
  await page.waitForXPath(
    "//*[@id='tableauId']"
  );

  let [element6] = await page.$x(
    "//*[@id='tableauId']"
  );
  let text6 = await page.evaluate(
    (element6) => element6.textContent,
    element6
  );
  console.log(text6.replace(/[ ]/g,''));
  
  



  //////////////////////////////////////////////////

  


//*[@id="tab-prono-ct"]/div[5]/div[1]/table/tbody/tr[2]/td[1]


//*[@id="tab-prono-ct"]/div[5]/div[2]/table/tbody/tr[1]/td[1]

//*[@id="tab-prono-ct"]/div[5]/div[2]/table/tbody/tr[2]/td[1]


//*[@id="tab-prono-ct"]/div[5]/div[2]/table/tbody/tr[3]/td[1]

//*[@id="tab-prono-ct"]/div[5]/div[3]/table/tbody/tr[1]/td[1]

//*[@id="tab-prono-ct"]/div[5]/div[3]/table/tbody/tr[2]/td[1]

//*[@id="tab-prono-ct"]/div[5]/div[3]/table/tbody/tr[3]/td[1]




  
  }
  //*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[2]/td[1]

  //*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[2]/td[1]
  //*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[2]/td[4]
  //*[@id="page-content"]/div[1]/div/div/div[1]/div/table/tbody/tr[6]/td[6]*/
})();
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
