/**
 * isEven
 * @param {number} num 数字
 * @returns {boolean}
 */
function isEven(num) {
  return !(num & 1);
}

/**
 * idOdd
 * @param {number} num 数字
 * @returns {boolean}
 */
function idOdd(num) {
  return !!(num & 1);
}
console.log(idOdd(3));
