/**
 * 一维数组
 * @param {number[]} weights
 * @param {number[]} values
 * @param {number} n
 * @param {number} w
 */
function zeroOneBag(weights, values, n, w) {
  let status = Array(w + 1).fill(-1);
  status[0] = 0;
  status[weights[0]] = values[0];
  for (let i = 1; i < n; i++) {
    for (let j = w - weights[i]; j >= 0; j--) {
      if (status[j] >= 0) {
        status[j + weights[i]] = Math.max(status[j + weights[i]], status[j] + values[i]);
      }
    }
  }
  let max = -1;
  for (let i = w; i >= 0; i--) {
    if (status[i]) max = Math.max(max, status[i]);
  }
  return max;
}

console.log(zeroOneBag([2, 2, 4, 6, 3], [3, 4, 8, 9, 6], 5, 9));
