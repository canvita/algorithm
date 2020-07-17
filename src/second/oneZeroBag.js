/**
 * 二维的动态规划
 * @param {number[]} weight 物品重量列表
 * @param {number[]} value
 * @param {number} n
 * @param {number} w
 */
function zeroOneBag(weight, value, n, w) {
  // 状态表示 container[i][w] 表示在第几个物品时, 某个重量对应的最大value
  // 状态方程 container[i][j + weight[i]] = max(container[i - 1][j + weight[i]], container[i - 1][w] + value[i])
  // 放入当前重量后的总价值, 和 未放入当前重量, 上一行放入后的重量的对应价值 取最大值
  let container = createContainer();
  container[0][0] = 0;
  container[0][weight[0]] = value[0];
  for (let i = 1; i < n; i++) {
    // 第i个物品
    for (let j = w - weight[i]; j >= 0; j--) {
      // 放入第i个物品
      if (container[i - 1][j] >= 0) {
        container[i][j + weight[i]] = Math.max(container[i - 1][j + weight[i]], container[i - 1][j] + value[i]);
      }
    }
  }
  let maxValue = -1;
  for (let i = w; i >= 0; i--) {
    if (container[n - 1][i] > 0) {
      maxValue = Math.max(maxValue, container[n - 1][i]);
    }
  }

  return maxValue;
  function createContainer() {
    return Array(n).fill(Array(w + 1).fill(-1));
  }
}

/**
 * 优化为一维的
 * @param {number[]} weight 物品重量列表
 * @param {number[]} value
 * @param {number} n
 * @param {number} w
 */
function zeroOneBag(weight, value, n, w) {
  // 状态表示 container[w] 某个重量对应的最大value
  // 状态方程 container[j + weight[i]] = max(container[j + weight[i]], container[w] + value[i])
  // 放入后的重量为w, 放入前的总价值 + 当前价值, 和之前w的对应价值 取最大值
  let container = createContainer();
  container[0] = 0;
  container[weight[0]] = value[0];
  for (let i = 1; i < n; i++) {
    for (let j = w - weight[i]; j >= 0; j--) {
      // 放入第i个物品
      if (container[j] >= 0) {
        container[j + weight[i]] = Math.max(container[j + weight[i]], container[j] + value[i]);
      }
    }
  }
  let maxValue = -1;
  for (let i = w; i >= 0; i--) {
    if (container[i] > 0) {
      maxValue = Math.max(maxValue, container[i]);
    }
  }

  return maxValue;
  function createContainer() {
    return Array(w + 1).fill(-1);
  }
}

console.log(zeroOneBag([2, 2, 4, 6, 3], [3, 4, 8, 9, 6], 5, 9));
