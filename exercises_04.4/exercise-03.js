function greaterIndex(number) {
  let greater = 0, index = 0;

  for (i=0; i<number.length; i++) {
    if (number[i] > greater) {
      greater = number[i];
      index = i;
    }
  }

  return index;  
}

console.log(greaterIndex([2, 3, 6, 7, 10, 1]))