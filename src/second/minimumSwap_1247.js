/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
  let xy = 0;
  let yx = 0;
  for (let i = s1.length - 1; i >= 0; i--) {
    if (s1[i] !== s2[i]) {
      if (s1[i] === 'x') xy++;
      else yx++;
    }
  }
  return (xy + yx) & 1 ? -1 : (xy + yx) / 2 + (xy & 1);
};
console.log(minimumSwap('xxyyxyxyxx', 'xyyxyxxxyx'));
