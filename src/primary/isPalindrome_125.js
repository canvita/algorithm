/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 1. filter out number and words
  // 2. reverse and compare
  const filteredS = _filterString(s);
  const reversedS = _reverseString(filteredS);
  return filteredS === reversedS;
};

/**
 * _filterString
 * @param {string} s
 * @returns {string}
 */
function _filterString(s) {
  const match = (str) => str.match(/\w/) && str !== "_";
  return s
    .split("")
    .filter(match)
    .map((v) => v.toLowerCase())
    .join("");
}

/**
 * _reverseString
 * @param {string} s
 * @returns {string}
 */

function _reverseString(s) {
  return s.split("").reverse().join("");
}

console.log(_filterString("ab_a"));

console.log(isPalindrome("ab_a"));
