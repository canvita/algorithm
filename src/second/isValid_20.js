/** 栈的方法
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  let MAP = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i of s) {
    if (stack.length > s.length / 2) return false;
    if (i === "{" || i === "[" || i === "(") {
      stack.push(i);
    } else {
      if (i !== MAP[stack.pop()]) return false;
    }
  }
  return !stack.length;
};

const r = isValid("([)");
console.log(r);
