/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[idx++], nums[i]] = [nums[i], nums[idx]];
    }
  }
};
var moveZeroes = function (nums) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx++] = nums[i];
    }
  }
  for (let i = idx; i < nums.length; i++) {
    nums[i] = 0;
  }
};
const r = [0, 1, 0, 2, 0, 3];
moveZeroes(r);
console.log(r);
