/** 取所有上升段
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const length = prices.length;
  if (length === 1 || length === 0) return 0;
  let totalProfit = 0;
  for (let i = 1; i < length; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }
  return totalProfit;
};
