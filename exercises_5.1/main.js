function changeText() {
  let secondP = document.getElementsByTagName('p')[1];
  secondP.innerText = 'Daqui à 2 anos me vejo um grande profissional';
}
changeText();

function changeBackgroundColor() {
  let greenDiv = document.getElementsByClassName('main-content')[0];
  greenDiv.style.changeBackgroundColor = "rgb(76, 164, 109)";
}
changeBackgroundColor();

function changeColor() {
  let whiteDiv = document.getElementsByClassName('center-content')[0];
  whiteDiv.style.backgroundColor = 'rgb(255, 255, 255)';
}
changeColor();

function changeH1() {
  let elementH1 = document.getElementsByTagName('h1')[0];
  elementH1.innerText = 'Exercício 5.1 - JavaScript';
}
changeH1();

function toUpperCase() {
  let upperText = document.getElementsByTagName('p')[1];
  upperText.style.textTransform = 'uppercase';
}
toUpperCase();

function showText() {
  let getText = document.getElementsByTagName('p');
  for (e of getText) {
    console.log(e.textContent);
  }
}
showText();
