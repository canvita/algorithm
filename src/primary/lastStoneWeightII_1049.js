/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  let sumStones = stones.reduce((pre, cur) => cur + pre, 0);
  let sum = sumStones >> 1;
  let status = Array(sum + 1).fill(false);
  status[0] = true;
  status[stones[0]] = true;
  for (let i = 1; i < stones.length; i++) {
    for (let j = sum - stones[i]; j >= 0; j--) {
      if (status[j]) status[j + stones[i]] = true;
    }
  }
  let max = -1;
  for (let i = sum; i >= 0; i--) {
    if (status[i]) {
      max = i;
      break;
    }
  }
  return sumStones - max * 2;
};
console.log(lastStoneWeightII([21, 60, 61, 20, 31]));
