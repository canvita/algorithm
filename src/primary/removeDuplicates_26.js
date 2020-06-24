/**
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
