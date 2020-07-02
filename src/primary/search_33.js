/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low <= high) {
    mid = low + ((high - low) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[nums.length - 1] >= target && target >= nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};

const r = search([4, 5, 6, 7, 0, 1, 2], 0);
console.log(r);
