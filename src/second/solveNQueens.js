/**
 * n皇后问题
 * @param {number} n
 */
function solveNQueens(n) {
  let printArr = [];
  let result = [];
  solveRow(0);
  return printQueens();
  function solveRow(row) {
    if (row === n) {
      printArr.push([...result]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (isOK(row, i)) {
        result[row] = i;
        solveRow(row + 1);
      }
    }
  }
  function isOK(row, col) {
    let leftUp = col - 1;
    let rightUp = col + 1;
    for (let j = row - 1; j >= 0; j--) {
      if (result[j] === col) return false;
      if (result[j] === leftUp || result[j] === rightUp) return false;
      leftUp--;
      rightUp++;
    }
    return true;
  }
  function printQueens() {
    let template = Array(n).fill('.');
    return printArr.map((res) => {
      return res.map((index) => {
        let arr = [...template];
        arr[index] = 'Q';
        return arr.join('');
      });
    });
  }
}
console.log(solveNQueens(4));
