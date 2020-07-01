/**
 * 最简单的二分查找, 不含重复元素
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 特点:
 * 1. 数组
 * 2. 有序
 * 针对1:
 * 1. 只能用于数组这种数据结构, 不能用于链表等
 * 2. 数据量太大时不适用, 需要连续的内存空间
 * 针对2:
 * 1. 在频繁变动的数组中, 维护数组有序比较消耗性能, 不适用
 * 2. 适用于一次排序, 多次查找的情景
 */
const binarySearch = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low <= high) {
    mid = (low + (high - low) / 2) | 0;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

/**
 * 查找第一个给定值的下标, 含重复元素
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch1 = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low <= high) {
    mid = (low + (high - low) / 2) | 0;
    if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === 0 || nums[mid - 1] !== target) return mid;
      high = mid - 1;
    }
  }
  return -1;
};

/**
 * 查找最后一个给定值的下标, 含重复元素
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch2 = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low <= high) {
    mid = (low + (high - low) / 2) | 0;
    if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) return mid;
      low = mid + 1;
    }
  }
  return -1;
};

/**
 * 查找第一个大于等于给定值的下标, 不含重复元素
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch3 = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low <= high) {
    mid = (low + (high - low) / 2) | 0;
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === 0 || nums[mid - 1] <= target) return mid;
      high = mid - 1;
    }
  }
  return -1;
};

/**
 * 查找最后一个小于等于给定值的下标, 不含重复元素
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch4 = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low <= high) {
    mid = (low + (high - low) / 2) | 0;
    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] >= target) return mid;
      low = mid + 1;
    }
  }
  return -1;
};
