function appendElement(parent, child) {
  parent.appendChild(child);
}

// Exercise #1
let elementH1 = document.createElement('h1');
elementH1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
appendElement(document.body, elementH1);

// Exercise #2
let elementFirstDiv = document.createElement('div');
elementFirstDiv.className = 'main-content';
appendElement(document.body, elementFirstDiv);

// Exercise #3
let elementSecondDiv = document.createElement('div');
elementSecondDiv.className = 'center-content';
appendElement(elementFirstDiv, elementSecondDiv);

// Exercise #4
let elementFirstP = document.createElement('p');
elementFirstP.innerHTML = 'Learning how to create HTML elements in javascript';
appendElement(elementSecondDiv, elementFirstP);

// Exercise #5
let elementThirdDiv = document.createElement('div');
elementThirdDiv.className = 'left-content';
appendElement(elementFirstDiv, elementThirdDiv);

// Exercise #6
let elementFourthDiv = document.createElement('div');
elementFourthDiv.className = 'right-content';
appendElement(elementFirstDiv, elementFourthDiv);

// Exercise #7
let elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://picsum.photos/200';
appendElement(elementThirdDiv, elementImg);

// Exercise #8
let elementList = document.createElement('ul');

for (let i = 1; i <= 10; i += 1) {
  let elementsOfList = document.createElement('li');
  elementsOfList.innerHTML = i;
  appendElement(elementList, elementsOfList);
}
appendElement(elementFourthDiv, elementList);

// Exercise 9
let tagsH3 = [];
for (let i = 0; i < 3; i += 1) {
  tagsH3.push(document.createElement('h3'))
  appendElement(elementSecondDiv, tagsH3);
}

// Exercise 10
elementH1.className = 'title';

// Exercise 11
tagsH3.className = 'description';

// Exercise 12
elementFirstDiv.removeChild(elementThirdDiv);

//Exercise 13
elementFourthDiv.style.marginRight = 'auto';

//Exercise 14
let divMain = document.querySelector('.center-content');
divMain.parentElement.style.backgroundColor = 'green';
