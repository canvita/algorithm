/** 双指针的解法
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let start = 0;
  for (let end = 1; end < nums.length; end++) {
    if (nums[start] !== nums[end]) {
      nums[++start] = nums[end];
    }
  }
  return start + 1;
};
