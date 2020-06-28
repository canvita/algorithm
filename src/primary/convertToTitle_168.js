/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let str = "";
  while (n >= 1) {
    let code = n % 26 || 26;
    str = String.fromCharCode(code + 64) + str;
    n = code === 26 ? n / 26 - 1 : (n / 26) | 0;
  }
  return str;
};
