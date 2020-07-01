const fs = require("fs");
const moment = require("moment");

fs.readFile("./README.md", "utf8", (err, data) => {
  const dateReg = /### \d{4}\.\d{2}\.\d{2}/g;
  const itemReg = /\[\w*\]/g;
  const dates = data.match(dateReg, "12");
  const indexs = dates.reduce((pre, cur) => {
    return [...pre, data.indexOf(cur)];
  }, []);
  let dateContainer = {};
  indexs.forEach((v, index) => {
    let str;
    if (index === indexs.length - 1) {
      str = data.slice(v);
    } else {
      str = data.slice(v, indexs[index + 1]);
    }
    const date = str.slice(4, 14);
    dateContainer[date] = str.match(itemReg).slice(0, 2);
  });
  const oneDay = 1000 * 60 * 60 * 24;
  const secondDate = moment(+moment() - oneDay).format("YYYY.MM.DD");
  const thirdDate = moment(+moment() - 7 * oneDay).format("YYYY.MM.DD");
  const forthDate = moment(+moment() - 30 * oneDay).format("YYYY.MM.DD");
  const result = {
    second: dateContainer[secondDate],
    third: dateContainer[thirdDate],
    forth: dateContainer[forthDate],
  };
  console.log(result, secondDate, thirdDate, forthDate);
});
