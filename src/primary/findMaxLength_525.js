/** 解法1, 暴力, 执行会超时
 * 时间复杂度: O(n ^ 2)
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let maxLen = 0;
  const len = nums.length;
  for (let start = 0; start < len; start++) {
    let zero = 0;
    let one = 0;
    for (let end = start; end < len; end++) {
      if (nums[end]) {
        one++;
      } else {
        zero++;
      }
      if (one === zero) {
        maxLen = Math.max(maxLen, end - start + 1);
      }
    }
  }
  return maxLen;
};

/** 解法2, 使用hashMap
 * 时间复杂度: O(n ^ 2)
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const len = nums.length;
  let count = 0;
  let maxLen = 0;
  let hashMap = { 0: -1 };
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      count++;
    } else {
      count--;
    }
    if (hashMap[count] === undefined) {
      hashMap[count] = i;
    } else {
      maxLen = Math.max(maxLen, i - hashMap[count]);
    }
  }
  return maxLen;
};

const test = [0];
console.log(findMaxLength(test));
