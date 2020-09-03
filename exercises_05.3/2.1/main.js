let clickButton = document.querySelector('#click-button');
clickButton.onclick = () => {
  window.alert('You clicked the button!')
};

let gamePrice = 39.99, discount = 0.20;
let discountButton= document.querySelector('#discount-button');

discountButton.onclick = () => {
  window.alert(`${Math.round(gamePrice * discount)}% off!`);
};

let imgTag = document.querySelector('#dark-img');
imgTag.onmouseover = () => {
  imgTag.src = 'img/dark-3.jpg';
};

imgTag.onmouseout = () => {
  imgTag.src = 'img/dark-1.jpg';
};
