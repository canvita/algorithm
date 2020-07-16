/** 未优化回溯, 超时
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let flag = false;
  function isMatchFn(leftS, leftP) {
    if (leftP === leftS || leftP === '*' || (leftP.length === 0 && leftS.length === 0)) {
      flag = true;
      return;
    }
    let i = leftP[0];
    if (i === '*') {
      let len = Math.max(leftP.length, leftS.length);
      for (let j = 0; j < len; j++) {
        isMatchFn(leftS.slice(j), leftP.slice(1));
      }
    } else if (i === '?' && leftS.length > 0) {
      isMatchFn(leftS.slice(1), leftP.slice(1));
    } else {
      if (leftS[0] !== i) {
        return;
      } else {
        isMatchFn(leftS.slice(1), leftP.slice(1));
      }
    }
  }
  isMatchFn(s, p);
  return flag;
};
