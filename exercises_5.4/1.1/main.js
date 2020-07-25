// This function is called from HTML
function restoreStorage() {
  DOCBODY.backgroundColor = getItemFromStorage(getProperty(1)[0]);

  DOCBODY.color = getItemFromStorage(getProperty(2)[0]);

  DOCBODY.fontSize = getItemFromStorage(getProperty(3)[0]);

  DOCBODY.lineHeight = getItemFromStorage(getProperty(4)[0]);

  DOCBODY.fontFamily = getItemFromStorage(getProperty(5)[0]);
}

const DOCBODY = document.body.style;
const PROPERTY = {
  1: ['background-color', '#input-color'],
  2: ['text-color', '#input-text'],
  3: ['font-size', '#input-size'],
  4: ['line-height', '#input-height'],
  5: ['font-family', '#input-font'],
}

function getProperty(keyNumber) {
  return PROPERTY[keyNumber];
}

function getItemFromStorage(tagName) {
  return localStorage.getItem(tagName);
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
  saveToStorage(getProperty(1)[0],
    (DOCBODY.backgroundColor = getValue(getProperty(1)[1])));
}

function changeTextColor() {
  saveToStorage(getProperty(2)[0],
    (DOCBODY.color = getValue(getProperty(2)[1])));
};

function changeTextSize() {
  saveToStorage(getProperty(3)[0],
    (DOCBODY.fontSize = (getValue(getProperty(3)[1]) * 3) + '%'));
};

function changeLineHeight() {
  saveToStorage(getProperty(4)[0],
    (DOCBODY.lineHeight = getValue(getProperty(4)[1]) + 'px'));
};

function changeFont() {
  saveToStorage(getProperty(5)[0],
    (DOCBODY.fontFamily = getValue(getProperty(5)[1])));
};
