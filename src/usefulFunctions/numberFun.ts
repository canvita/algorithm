function isEven(num: number): boolean {
  return !(num & 1);
}

function idOdd(num: number): boolean {
  return !!(num & 1);
}

function divide2AndFloor(num: number): number {
  return num >> 1;
}
console.log(idOdd(3));
