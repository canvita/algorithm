/**
 * minDistDP
 * @param {number[][]} nums
 */
function minDistDP(nums) {
  let status = getEmpty2DArray(nums.length);
  for (let i = 0; i < nums.length; i++) {
    status[0][i] = nums[0][i]; // 初始化第一行
    status[i][0] = nums[i][0]; // 初始化第一列
  }
  console.log(status);
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      let value = nums[i][j];
      status[i][j] = Math.min(status[i - 1][j], status[i][j - 1]) + value;
    }
  }
  return status[n - 1][n - 1];
}

function getEmpty2DArray(row, col = row, fill) {
  return Array(row).fill(Array(col).fill(fill));
}

console.log(
  minDistDP([
    [0, 3, 5, 9],
    [2, 1, 3, 4],
    [5, 2, 6, 7],
    [6, 8, 4, 3],
  ])
);
