let w = window.innerWidth;
let walk = true;
let catImg = document.querySelector('img');
catImg.style.left = '0px';

function catWalk() {
  let walkValue = parseInt(catImg.style.left);

  if (!walk && (walkValue < 0)) {
    walk = true;
  } else if (walk && (walkValue > (w - 300))) {
    walk = false;
  }

  walk ? catImg.style.left = (walkValue + 10) + 'px' :
  catImg.style.left = (walkValue - 10) + 'px';
}

window.setInterval(catWalk, 50);
