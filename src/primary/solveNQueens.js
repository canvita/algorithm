function solveNQueens(n) {
  let result = [];
  let printArr = [];
  calQueens(0);
  return printQueen();
  function calQueens(row) {
    if (row === n) {
      printArr.push([...result]);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isOk(row, col)) {
        result[row] = col;
        calQueens(row + 1);
      }
    }
  }
  function isOk(row, col) {
    let leftUp = col - 1;
    let RightUp = col + 1;
    for (let i = row - 1; i >= 0; i--) {
      let item = result[i];
      if (item === col) return false;
      if (item === leftUp) return false;
      if (item === RightUp) return false;
      leftUp--;
      RightUp++;
    }
    return true;
  }
  function printQueen() {
    let originStr = Array(n).fill('.');
    return printArr.map((arr) => {
      return arr.map((index) => {
        let str = [...originStr];
        str[index] = 'Q';
        return str.join('');
      });
    });
  }
}
console.log(solveNQueens(4));
