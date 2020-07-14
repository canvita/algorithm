/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function (cur, target) {
  let count = 0;
  while (cur < target) {
    if (target % 2 === 1) {
      target = (target + 1) / 2;
      count += 2;
    } else {
      target /= 2;
      count++;
    }
  }
  return count + cur - target;
};
console.log(brokenCalc(5, 8));
