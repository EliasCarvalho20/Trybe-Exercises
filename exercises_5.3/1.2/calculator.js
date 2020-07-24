function squareNumber(num) {
  let squaredNumber = num * num;
  console.log(`The result of squaring the number ${num} is ${squaredNumber}`);
  return squaredNumber;
}

function halfOf(num) {
  let half = num / 2;
  console.log(`Half of ${num} is ${half}`);
  return half;
}

function percentOf(num1, num2) {
  let percent = (num1/num2) * 100;
  console.log(`${num1} is ${percent}% of ${num2}`);
  return percent;
}

function areaOfCircle(radius) {
  let area = Math.PI * squareNumber(radius);
  console.log(`The area of circle with radius ${radius} is ${area}`);
  return area;
}

let resultDiv = document.querySelector('#solution');

let squareButton = document.querySelector('#square-button');
squareButton.addEventListener('click', () => {
  let numberToSquare = document.querySelector('#square-input').value;
  resultDiv.innerText = squareNumber(numberToSquare);
});

let halfButton = document.querySelector('#half-button');
halfButton.addEventListener('click', () => {
  let halfNumber = document.querySelector('#half-input').value;
  resultDiv.innerText = halfOf(halfNumber);
});

let percentButton = document.querySelector('#percent-button');
percentButton.addEventListener('click', () => {
  let percent1Input = document.querySelector('#percent1-input').value;
  let percent2Input = document.querySelector('#percent2-input').value;
  resultDiv.innerText = percentOf(percent1Input, percent2Input);
});

let areaButton = document.querySelector('#area-button');
areaButton.addEventListener('click', () => {
  let areaInput = document.querySelector('#area-input').value;
  resultDiv.innerText = areaOfCircle(areaInput);
});
