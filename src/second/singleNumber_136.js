/** xor
 * T: O(n)
 * M: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let r = 0;
  for (let num of nums) {
    r ^= num;
  }
  return r;
};
