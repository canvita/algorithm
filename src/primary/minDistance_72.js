/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let minDist = Number.MAX_SAFE_INTEGER;
  let w1Arr = word1.split('');
  let w2Arr = word2.split('');
  let len1 = w1Arr.length;
  let len2 = w2Arr.length;
  let getMin = (idx1, idx2, times) => {
    if (idx1 == len1 || idx2 === len2) {
      if (idx1 < len1) {
        times += len1 - idx1;
      }
      if (idx2 < len2) {
        times += len2 - idx2;
      }
      minDist = Math.min(minDist, times);
      return;
    } else {
      if (w1Arr[idx1] === w2Arr[idx2]) {
        getMin(idx1 + 1, idx2 + 1, times);
      } else {
        times++;
        getMin(idx1 + 1, idx2 + 1, times);
        getMin(idx1 + 1, idx2, times);
        getMin(idx1, idx2 + 1, times);
      }
    }
  };
  getMin(0, 0, 0);
  return minDist;
};
console.log(minDistance('intention', 'execution'));
