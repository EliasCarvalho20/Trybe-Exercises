const DOCBODY = document.body.style;

// This function is called from HTML
function getItemFromStorage() { 
  let back = localStorage.getItem('background-color');
  DOCBODY.backgroundColor = back;

  let text = localStorage.getItem('text-color');
  DOCBODY.color = text;

  let size = localStorage.getItem('font-size');
  DOCBODY.style.fontSize = size;

  let height = localStorage.getItem('line-height');
  DOCBODY.style.lineHeight = height;

  let font = localStorage.getItem('font-family');
  DOCBODY.style.fontFamily = font;
}

function saveToStorage(keyString, keyValue) {
  localStorage.setItem(keyString, keyValue);
}

function resetStorage() {
  localStorage.clear();
  location.reload();
}

function getValue(tagId) {
  return document.querySelector(tagId).value;
}

function changeBackGround() {
  DOCBODY.backgroundColor = getValue('#input-color');
  saveToStorage('background-color', getValue('#input-color'));
}

function changeTextColor() {
  DOCBODY.color = getValue('#input-text');
  saveToStorage('text-color', getValue('#input-text'));
};

function changeTextSize() {
  DOCBODY.fontSize = (getValue('#input-size') * 3) + '%';
  saveToStorage('font-size', (getValue('#input-size') * 3) + '%');
};

function changeLineHeight() {
  DOCBODY.lineHeight = getValue('#input-height') + 'px';
  saveToStorage('line-height', getValue('#input-height') + 'px');
};

function changeFont() {
  DOCBODY.fontFamily = getValue('#input-font');
  saveToStorage('font-family', getValue('#input-font'));
};
