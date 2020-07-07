/** 栈的方法
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let stack = [];
  let MAP = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let str of s) {
    if (stack.length > s.length / 2) return false;
    if (str === "(" || str === "[" || str === "{") {
      stack.push(str);
    } else {
      if (MAP[stack.pop()] !== str) return false;
    }
  }
  return !stack.length;
};

const r = isValid("()");
console.log(r);
