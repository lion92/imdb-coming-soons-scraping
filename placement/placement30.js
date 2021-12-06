import { createRequire } from "module";
const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer");
import fetch from "node-fetch";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://www.pmu.fr/turf/`);
  await delay(3000);
let text10="";
let text3="";
let text4="";
let text5="";
let text6="";
let text11="";
let same="";
let text33="";
  await page.waitForXPath('//*[@id="axeptio_btn_acceptAll"]');
  let el = await page.$x('//*[@id="axeptio_btn_acceptAll"]');
  await el[0].click();
  
  await delay(1200);

  await page.waitForXPath('//*[@id="ProgrammeCalendar/Button"]');
  let elcale = await page.$x('//*[@id="ProgrammeCalendar/Button"]');
  await elcale[0].click();


 for(let k=0; k<30; k++){  
try{
   await delay(3000);
  await page.waitForXPath('//*[@id="programme-header"]/div[2]/div/div[1]/div/div[2]/div[2]/div[1]/div[1]');
  let elmois = await page.$x('//*[@id="programme-header"]/div[2]/div/div[1]/div/div[2]/div[2]/div[1]/div[1]');
  await elmois[0].click();
}catch(error){
    console.log(error);
}
 }

//*[@id="programme-header"]/div[2]/div/div[1]/div/div[2]/div[2]/div[4]/div[3]

  //*[@id="programme-header"]/div[2]/div/div[1]/div/div[2]/div[2]/div[4]/div[2]/div
  try{
  await delay(1200);
  await page.waitForXPath('//*[@id="programme-header"]/div[2]/div/div[1]/div/div[2]/div[2]/div[4]/div[18]/div');
  let elpremier = await page.$x('//*[@id="programme-header"]/div[2]/div/div[1]/div/div[2]/div[2]/div[4]/div[18]/div');
  await elpremier[0].click();
  //*[@id="programme-header"]/div[2]/div/div[1]/div/div[2]/div[2]/div[4]/div[6]
}catch(error){
  console.log(error);
}


  for (let i = 1; i < 365; i++) {
 try{
             await delay(1000);
        await page.waitForXPath('//*[@id="programme-header"]/div[3]/div[1]');
        let el2 = await page.$x('//*[@id="programme-header"]/div[3]/div[1]');
        await el2[0].click();
        await delay(1000);
      
    

    await page.waitForXPath('//*[@id="programme-title"]/div[2]');
    //assuming it's the first element
    let [element33] = await page.$x('//*[@id="programme-title"]/div[2]');
     text33 = await page.evaluate(
      (element33) => element33.textContent,
      element33
    );
    //console.log(text33)

    await delay(1000);

    await page.waitForXPath(
      '//*[@id="asideLayout"]/div/div[1]/div/div/div[2]/a/div'
    );
    let el3 = await page.$x(
      '//*[@id="asideLayout"]/div/div[1]/div/div/div[2]/a/div'
    );
    await el3[0].click();

    await delay(1000);
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
      await delay(1000);

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
      
       text4 =
        " " +
        (await page.evaluate((element2) => element2.textContent, element2));
      //console.log(text4);
      if(j==1){
          text3=text4;
      }
      else if(j==2){
          text5=text4;
      }
      else if(j==3){
          text6=text4;
      }
      else if(j==4){
          text10=text4;
      }
      else if(j==5){
        text11=text4;
      }
    }

   
    await delay(1000);
    await page.waitForXPath(
      '//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[1]/div'
    );
    let el5 = await page.$x(
      '//*[@id="__next"]/div/div[3]/div/div[1]/div/div/div/div[1]/div'
    );
    await el5[0].click();
 
    if(same!=text33){
    console.log("insert into placement(premier,second,troisieme,quatrieme,cinquieme, datecourse) values('"+text3.replace(/[']/g, "")+"','"+text5.replace(/[']/g, "")+"','"+text6.replace(/[']/g, "")+"','"+text10.replace(/[']/g, "")+"','"+text4.replace(/[']/g, "")+"','"+text33.replace(/[']/g, "")+"');");
    }

 }  

  catch(error){
 console.error();  }
 same=text33;
}   
 }

)();
 function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }