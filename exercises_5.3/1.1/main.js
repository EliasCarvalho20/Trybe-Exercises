let button = document.querySelector('button');

button.addEventListener('click', () => {
  let inputElements = document.querySelectorAll("input");

  let tagDiv = document.createElement('div');
  let tagP = document.createElement('p');
  tagDiv.className = 'main-content';

  tagP.textContent = `${inputElements[0].value} ${inputElements[1].value} 
  ${inputElements[2].value}`;

  tagDiv.appendChild(tagP);
  document.body.appendChild(tagDiv);
});