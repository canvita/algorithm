/** 简单的解法
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let preNum;
  let i = 0;
  while (i < nums.length) {
    if (preNum === nums[i]) {
      nums.splice(i, 1);
      continue;
    }
    preNum = nums[i];
    i++;
  }
  return nums.length;
};

/** 双指针的解法
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let length = nums.length;
  if (length === 0 || length === 1) return length;
  let i = 0;
  for (let j = 1; j < length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
