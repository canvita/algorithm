/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let result = "";
  while (n > 0) {
    const codePoint = n % 26 || 26;
    result = String.fromCharCode(64 + codePoint) + result;
    n = codePoint === 26 ? n / 26 - 1 : (n / 26) | 0;
  }
  return result;
};
