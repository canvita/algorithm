/**
 * 获得指定大小空的数组
 * @param {number} size 数组大小
 * @param {?any} fill
 * @returns {any[]}
 */
function getEmptyArray(size, fill) {
  return Array(size).fill(fill);
}

/**
 * 获得指定大小空的二维数组数组
 * @param {number} row 数组大小
 * @param {?number} col 数组大小
 * @param {?any} fill
 * @returns {any[][]}
 */
function getEmpty2DArray(row, col = row, fill) {
  return Array(row).fill(Array(col).fill(fill));
}
