let button = document.querySelector('button');

button.addEventListener('click', () => {
  let inputElements = document.querySelectorAll("input");
  let tagP = document.createElement('p');

  tagP.textContent = `${inputElements[0].value} ${inputElements[1].value} 
  ${inputElements[2].value}`;

  document.querySelector('#story').appendChild(tagP);
});