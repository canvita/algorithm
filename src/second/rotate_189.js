/** 解法4, 反转,
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  k = k % len;
  if (!k) {
    return;
  }
  const reverse = (arr, start, end) => {
    if (start >= end) return;
    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverse(arr, start + 1, end - 1);
  };

  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
};

const t = [1, 2, 3];
rotate(t, 3);
console.log(t);
