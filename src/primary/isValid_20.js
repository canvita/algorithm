/** 栈的方法
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const leftStack = [];
  let MAP = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let c of s) {
    // 当栈的深度大于字符串的1/2时就不需要再执行了
    if (leftStack.length > s.length / 2) return false;
    if (["{", "(", "["].includes(c)) {
      leftStack.push(c);
    } else {
      if (MAP[leftStack.pop()] !== c) return false;
    }
  }
  return !leftStack.length;
};

const r = isValid("([");
console.log(r);
