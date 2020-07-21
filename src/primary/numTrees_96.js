/** 卡塔兰数
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let C = 1;
  for (let i = 0; i < n; i++) {
    C = (C * 2 * (2 * i + 1)) / (i + 2);
  }
  return C;
};
/** 递归
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let arr = Array(n + 1).fill(0);
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      arr[i] += arr[j - 1] * arr[i - j];
    }
  }
  return arr[n];
};
console.log(numTrees(3));
