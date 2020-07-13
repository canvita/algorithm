/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let a = 0,
    b = 0;
  for (let num of nums) {
    b = (b ^ num) & ~a;
    a = (a ^ num) & ~b;
  }
  return b;
};
console.log(singleNumber([2, 2, 3, 2]));
