function lemonadeChange(bills: number[]): boolean {
  const container = {
    5: 0,
    10: 0,
  };
  for (let bill of bills) {
    switch (bill) {
      case 5: {
        container[5] += 1;
        break;
      }
      case 10: {
        container[5] -= 1;
        if (container[5] < 0) return false;
        container[10] += 1;
        break;
      }
      default: {
        container[5] -= 1;
        if (container[10] > 0) {
          container[10] -= 1;
        } else {
          container[5] -= 2;
        }
        if (container[5] < 0) return false;
      }
    }
  }
  return true;
}
console.log(lemonadeChange([5, 5, 10, 10, 20]));
