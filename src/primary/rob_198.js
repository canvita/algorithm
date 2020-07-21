/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let max = 0;
  let len = nums.length;
  function robFn(idx, total) {
    total += nums[idx];
    if (idx + 2 > len - 1) {
      if (nums[idx]) {
        max = Math.max(max, total);
      }
      return;
    }
    robFn(idx + 2, total);
    robFn(idx + 3, total);
  }
  robFn(0, 0);
  robFn(1, 0);
  return max;
};

console.log(rob([2, 7, 9, 3, 1]));
