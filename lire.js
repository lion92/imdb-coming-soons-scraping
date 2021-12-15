import * as fs from "fs";

fs.readFile("", function (err, data) {
  var readStream = fs.createReadStream(
    "C:\\Users\\kriss\\Documents\\testpourdede.txt",
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
          console.log(element);
            fs.appendFile("C:\\Users\\kriss\\Documents\\essai2\\testpourdede"+i+".txt", element, function (err) {
              if (err) throw err;
           //   console.log('The "data to append" was appended to file!');
        
            });
          }
          i++;
        })
      
     
    });
});
