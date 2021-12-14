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
      tab.forEach((element) => {
        if (element.includes("-")) {
          element = element.replace(/[ ]/g, "");
          let elementtab = element.split("-");
          let i = 0;
          for (let ele of elementtab) {
            if (isNaN(elementtab[0])) {
              if (new RegExp("[^a-z^A-Z|]", "g").test(ele)) {
                console.log(ele);
              }
            }
            i++;
          }
        }
      });
    });
});
