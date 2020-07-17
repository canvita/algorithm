const { max } = require('lodash');

/**
 * 0-1背包,动态规划, // 二维数组
 * @param {number[]} weight 所有物品
 * @param {number} n 物品数量
 * @param {nubmer} w 背包容量
 */
function zeroOneBag(weight, n, w) {
  let status = [];
  for (let i = 0; i < n; i++) {
    status[i] = [];
    for (let j = 0; j < w + 1; j++) {
      status[i][j] = false;
    }
  }
  status[0][0] = true;
  status[0][weight[0]] = true;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      // 不放的情况 就是 +0
      if (status[i - 1][j]) status[i][j] = status[i - 1][j];
    }
    for (let j = 0; j <= w - weight[i]; j++) {
      // 放的情况 就是 + 物品重量
      if (status[i - 1][j]) status[i][j + weight[i]] = true;
    }
  }

  for (let i = w; i >= 0; i--) {
    if (status[n - 1][i]) return i;
  }
  return 0;
}
/**
 * 0-1背包,动态规划, // 一维数组
 * @param {number[]} weight 所有物品
 * @param {number} n 物品数量
 * @param {nubmer} w 背包容量
 */
function zeroOneBag(weight, n, w) {
  let status = [];
  for (let i = 0; i < n; i++) {
    status[i] = false;
  }
  status[0] = true;
  status[weight[0]] = true;
  for (let i = 1; i < n; i++) {
    for (let j = w - weight[i]; j >= 0; j--) {
      // 放的情况 就是 + 物品重量
      if (status[j]) status[j + weight[i]] = true;
    }
  }
  for (let i = w; i >= 0; i--) {
    if (status[i]) return i;
  }
  console.log(status);
  return 0;
}

/**
 * 0-1背包,动态规划, // 二维数组
 * @param {number[]} weight 所有物品
 * @param {number[]} value 所有价值
 * @param {number} n 物品数量
 * @param {nubmer} w 背包容量
 */
function zeroOneBag(weight, value, n, w) {
  let status = [];
  for (let i = 0; i < n; i++) {
    status[i] = [];
    for (let j = 0; j < w + 1; j++) {
      status[i][j] = -1;
    }
  }
  status[0][0] = 0;
  status[0][weight[0]] = value[0];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      // 不放的情况 就是 +0
      if (status[i - 1][j] >= 0) status[i][j] = status[i - 1][j];
    }
    for (let j = 0; j <= w - weight[i]; j++) {
      // 放的情况 就是 + 物品重量, 如果价值更高, 将价值替换

      if (status[i - 1][j] >= 0) {
        let itemValue = status[i - 1][j] + value[i];
        if (itemValue > status[i][j + weight[i]]) {
          status[i][j + weight[i]] = itemValue;
        }
      }
    }
  }
  let maxValue = -1;
  for (let i = w; i >= 0; i--) {
    if (status[n - 1][i] >= 0) {
      maxValue = Math.max(maxValue, status[n - 1][i]);
    }
  }
  return maxValue;
}

console.log(zeroOneBag([2, 2, 4, 6, 3], [3, 4, 8, 9, 6], 5, 9));
