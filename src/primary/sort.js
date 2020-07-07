/**
 * 1. 是否是稳定的排序算法, 不修相同元素改前后顺序
 * 2. 是否是原地的排序算法, 不需要使用到额外的空间
 * 3. 时间复杂度, 最好, 最坏, 平均
 */

/** 冒泡排序
 * 1. 稳定
 * 2. 原地
 * 3. 时间复杂度: O(n), O(n ^ 2), O(n ^ 2)
 * @param {number[]} nums
 * @return {number[]}
 */

var bubbleSort = (nums) => {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let flag = false; // 在某次遍历中如果没有换序,表示已经有序
    for (let j = 1; j < len - i; j++) {
      if (nums[j - 1] > nums[j]) {
        [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
        flag = true;
      }
    }
    if (!flag) {
      return; // 提前退出
    }
  }
};
/** 插入排序
 * 1. 稳定
 * 2. 原地
 * 3. 时间复杂度: O(n), O(n ^ 2), O(n ^ 2)
 * @param {number[]} nums
 * @return {number[]}
 */
var insertSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let value = nums[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (nums[j] > value) {
        nums[j + 1] = nums[j];
      } else {
        break;
      }
    }
    nums[j + 1] = value;
  }
};

/** 选择排序
 * 1. 是不稳定的
 * 2. 原地
 * 3. 时间复杂度: O(n ^ 2), O(n ^ 2), O(n ^ 2)
 * @param {number[]} nums
 * @return {number[]}
 */
var selectSort = (nums) => {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let min = nums[i];
    let minIndex = i;
    for (let j = i; j < len; j++) {
      if (nums[j] < min) {
        min = nums[j];
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
};

/**
 * 以上三点都是相同的插入排序和冒泡排序, 更多使用插入排序
 */

/**
 * merge
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */

const merge = (nums, start, end) => {
  let mid = start + ((end - start) >> 1);
  let i = start,
    j = mid + 1,
    k = 0,
    tmp = [];
  while (i <= mid && j <= end) {
    if (nums[i] < nums[j]) {
      tmp[k++] = nums[i++];
    } else {
      tmp[k++] = nums[j++];
    }
  }
  if (i > mid) {
    while (j <= end) {
      tmp[k++] = nums[j++];
    }
  } else {
    while (i <= mid) {
      tmp[k++] = nums[i++];
    }
  }
  for (let t = 0; t < tmp.length; t++) {
    nums[t + start] = tmp[t];
  }
};

/**
 * mergeSort
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
const mergeSort = (nums, start = 0, end = nums.length - 1) => {
  if (start >= end) return;
  let mid = start + ((end - start) >> 1);
  mergeSort(nums, start, mid);
  mergeSort(nums, mid + 1, end);
  merge(nums, start, end);
};
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
    if (nums[j] < pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }
  [nums[i], nums[end]] = [nums[end], nums[i]];
  return i;
};
/**
 * quickSort
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
const quickSort = (nums, start = 0, end = nums.length - 1) => {
  if (start >= end) return;
  let pivot = partition(nums, start, end);
  quickSort(nums, start, pivot - 1);
  quickSort(nums, pivot + 1, end);
};
const test = [1, 4, 2, 3, 5];
quickSort(test);
console.log(test);
