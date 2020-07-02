var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 0;
    let high = n;
    let mid;

    while (low <= high) {
      mid = low + ((high - low) >> 1); // 除以2并取整
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1) || mid === 0) return mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  };
};

const randomBadVersion = (Math.random() * 100) | 0;
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad

 */
isBadVersion = function (version) {
  if (version >= randomBadVersion) return true;
  return false;
};
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const r = solution(isBadVersion);
console.log(r(101), randomBadVersion);
