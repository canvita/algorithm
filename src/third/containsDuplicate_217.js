/** 利用hashMap
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hashMap = {};
  for (let num of nums) {
    if (hashMap[num]) return true;
    hashMap[num] = true;
  }
  return false;
};
console.log(containsDuplicate([1, 2, 2, 3]));
