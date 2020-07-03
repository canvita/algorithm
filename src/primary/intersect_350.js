// 进阶:

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

/** 暴力法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = [];
  for (let num1 of nums1) {
    for (let num2 of nums2) {
      if (num1 === nums2) {
        result.push(num1);
      }
    }
  }

  return result;
};

// 有序的去重
var duc = (nums) => {
  let start = 0;
  for (let end = 1; end < nums.length; end++) {
    if (nums[start] !== nums[end]) {
      nums[++start] = nums[end];
    }
  }
  return nums.slice(0, start + 1);
};

// 乱序的去重
var duc = (nums) => {
  let hashMap = {};
  let start = 0;
  for (let end = 1; end < nums.length; end++) {
    if (hashMap[nums[end]]) {
      nums[++start] = nums[end];
    } else {
      hashMap[nums[end]] = true;
    }
  }
  return nums.slice(0, start + 1);
};
console.log(duc([1, 2, 3, 3, 4]));
