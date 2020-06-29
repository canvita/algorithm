/** 解法1, 暴力
 *  时间复杂度 O(n * k)
 *  空间复杂度 O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k = 1) {
  const len = nums.length;
  if (k % len === 0) {
    return nums;
  }
  k %= len;
  for (let i = 0; i < k; i++) {
    let before;
    let after = nums[0];
    for (let j = 0; j < len; j++) {
      before = after;
      after = nums[(j + 1) % len];
      nums[(j + 1) % len] = before;
    }
  }
};

/** 解法2,额外数组,
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k = 1) {
  const len = nums.length;
  if (k % len === 0) {
    return nums;
  }
  k %= len;
  const newNums = [...nums];

  for (let j = 0; j < len; j++) {
    nums[(j + k) % len] = newNums[j % len];
  }
};

/** 解法3, 环状, TODO
 * 时间复杂度 O(k * n / k = n)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k = 1) {
  const len = nums.length;
  if (k % len === 0) {
    return nums;
  }
  k %= len;
  for (let i = 0; i < k; i++) {
    let before;
    let after = nums[i];
    let j = i;
    while (j < len) {
      before = after;
      const indexJ = (j + k) % len;
      after = nums[indexJ];
      nums[indexJ] = before;
      j += k;
    }
  }
};
/** 解法4, 反转,
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  if (k % len === 0) {
    return nums;
  }
  k %= len;
  const reverse = (nums, start, end) => {
    if (start >= end) return;
    [nums[start], nums[end]] = [nums[end], nums[start]];
    reverse(nums, start + 1, end - 1);
  };

  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
};

const t = [1, 2];
rotate(t, 3);
console.log(t);
