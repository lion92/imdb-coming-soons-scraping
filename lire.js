import * as fs from "fs";

fs.readFile("", function (err, data) {
  let str="";
  var readStream = fs.createReadStream(
    "C:\\Users\\kriss\\Documents\\ligneprono.txt",
    "utf8"
  );
  let data2 = "";
  readStream
    .on("data", function (chunk) {
      data2 += chunk;
    })
    .on("end", function () {
      // console.log(data2);

      let tab = data2.split(/\n/g); 
       let y=1;

          let i = 0;
      tab.forEach((element) => {

        element=element.replace(/[ ]/g,"");

       if(element!==""&&new RegExp("([0-9][0-9]||[0-9])","g").test(element)&&!new RegExp("([a-zA-Z])","g").test(element)){
        let tabele=element.split("-"); 
     
        if(element.length>=15){ 
        
      
        str+="insert into combinaison (pronostic, numero, premier, deuxieme, troisieme, quatrieme, cinquieme) values('"+element+"', '"+i+"','"+tabele[0]+"','"+tabele[1]+"','"+tabele[2]+"','"+tabele[3]+"','"+tabele[4]+"');";
  
         
          }else{
            --i;
            str+="insert into resultat (pronostic, numero, premier, deuxieme, troisieme, quatrieme, cinquieme) values('"+element+"', '"+i+"','"+tabele[0]+"','"+tabele[1]+"','"+tabele[2]+"','"+tabele[3]+"','"+tabele[4]+"');";
            
          } 
          }
            i++;
        })
        console.log(str);
      
     
    });
});
