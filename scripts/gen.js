const fs = require("fs");
const moment = require("moment");

const date = moment().format("YYYY.MM.DD");
const fileName = process.argv[2];
fs.readFile("./README.md", "utf8", (err, data) => {
  const url = `- [${fileName}](https://github.com/canvita/algorithm/blob/master/src/primary/${fileName})`;
  let writeStr;
  if (data.includes(`### ${date}`)) {
    writeStr = `${data}
${url}`;
  } else {
    writeStr = `${data}
### ${date}

${url}`;
  }
  fs.writeFile("./README.md", writeStr, (err) => {
    console.log(err);
  });
});
