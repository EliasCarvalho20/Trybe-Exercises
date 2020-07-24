let clickButton = document.querySelector('#click-button');
clickButton.addEventListener('click', () => {
  window.alert('You clicked the button')
});

let gamePrice = 39.99, discount = 0.20;
let discountButton= document.querySelector('#discount-button');

discountButton.addEventListener('click', () => {
  let totalDiscount = Math.round(gamePrice * discount);
  window.alert(`${totalDiscount}% off!`);
});