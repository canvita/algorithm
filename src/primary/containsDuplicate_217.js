/** 暴力
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

/** 利用hashMap
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashMap = {};
  for (let num of nums) {
    if (hashMap[num]) return true;
    hashMap[num] = true;
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3]));
