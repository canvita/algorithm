/** hashMap
 * T: O(n)
 * M: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hashMap = {};
  for (let num of nums) {
    if (hashMap[num]) {
      hashMap[num] = hashMap[num] + 1;
    } else {
      hashMap[num] = 1;
    }
  }
  const keys = Object.keys(hashMap);
  for (let key of keys) {
    if (hashMap[key] === 1) {
      return key;
    }
  }
};

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
