/** 取所有上升段
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length;
  let totalProfit = 0;
  for (let j = 1; j < len; j++) {
    if (prices[j] > prices[j - 1]) {
      totalProfit += prices[j] - prices[j - 1];
    }
  }
  return totalProfit;
};
