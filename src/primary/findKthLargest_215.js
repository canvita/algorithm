/**
 * partition
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
const partition = (nums, start, end) => {
  let pivot = nums[end];
  let i = start,
    j = start;
  while (j <= end) {
    if (nums[j] > pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }
  [nums[i], nums[end]] = [nums[end], nums[i]];
  return i;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let start = 0;
  let end = nums.length - 1;
  let pivot = partition(nums, start, end);
  while (pivot + 1 !== k) {
    if (pivot + 1 > k) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
    pivot = partition(nums, start, end);
  }
  return nums[pivot];
};

const r = findKthLargest([3, 2, 1, 5, 6, 4], 5);
console.log(r);
