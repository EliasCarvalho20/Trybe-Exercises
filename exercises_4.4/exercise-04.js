function smallerIndex(number) {

  let smaller = 0, index = 0;

  smaller = number[0];
  index = 0;

  number.forEach((element, i) => {
    if (element < smaller) {
      smaller = element;
      index = i;
    }
  });

  return index;

}

console.log(smallerIndex([2, 4, 6, 7, 10, 0, -3]))