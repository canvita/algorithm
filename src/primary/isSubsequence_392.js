/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let charIndex = 0;
  for (let ts of t) {
    if (ts === s.charAt(charIndex)) {
      charIndex++;
    }
    if (charIndex === s.length) {
      return true;
    }
  }
  return charIndex === s.length;
};
