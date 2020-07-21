function repeatedNumber(arrayNumber) {
  let repetead = {};
  let count = [0, 1];

  arrayNumber.forEach((x) => {    
    repetead[x] = (repetead[x] || 0) + 1;

    if (repetead[x] > count[1]) {
      count[1] = repetead[x];
      count[0] = x;
    }
  });

  return count[0];
}

console.log(repeatedNumber([2, 3, 2, 5, 8, 2, 3]));
