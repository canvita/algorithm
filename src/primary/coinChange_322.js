/** 未优化回溯: 会超时
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let minStep = Number.MAX_SAFE_INTEGER;
  let flag = false;
  function fn(amnt, curStep) {
    if (amnt === 0) {
      flag = true;
      minStep = Math.min(curStep, minStep);
    }
    if (amnt < 0) return;
    curStep++;
    for (let coin of coins) {
      fn(amnt - coin, curStep);
    }
  }
  fn(amount, 0);
  return flag ? minStep : -1;
};

console.log(coinChange([1, 2, 5], 11));
