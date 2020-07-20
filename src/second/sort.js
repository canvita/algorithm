/**
 *
 * @param {number[]} nums
 */
function quickSort(nums, start = 0, end = nums.length - 1) {
  if (start >= end) return;
  // 关键实现
  let pivot = partition(nums, start, end);
  // 将pivot 排除在外
  quickSort(nums, start, pivot - 1);
  quickSort(nums, pivot + 1, end);
}

function partition(nums, start, end) {
  let pivot = nums[end];
  let i = start;
  let j = start;
  while (j <= end) {
    if (nums[j] < pivot) {
      // 交换位置
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }
  // 最后将pivot交换至正确的位置
  [nums[i], nums[end]] = [nums[end], nums[i]];
  return i;
}
/**
 *
 * @param {number[]} nums
 */
function mergeSort(nums, start = 0, end = nums.length - 1) {
  if (start >= end) return;
  mergeSort();
}
const test = [4, 2, 1, 3];
quickSort(test);
console.log(test);
