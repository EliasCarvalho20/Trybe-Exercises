const METHODS = {
  0: 'querySelector',
  1: 'querySelectorAll',
  2: 'createElement',
};

function lazyCoder(keyMethod, tagName) {
  return document[`${METHODS[keyMethod]}`](tagName);
}

export default lazyCoder;