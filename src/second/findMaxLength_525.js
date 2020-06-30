/** 解法2, 使用hashMap
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let count = 0;
  let hashMap = { 0: -1 };
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      count++;
    } else {
      count--;
    }
    if (hashMap[count] === undefined) {
      hashMap[count] = i;
    } else {
      maxLength = Math.max(maxLength, i - hashMap[count]);
    }
  }
  return maxLength;
};

const test = [0];
console.log(findMaxLength(test));
