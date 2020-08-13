const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

function isEqual(...obj) {
  return obj[0] === obj[1];
}

assert.deepEqual(isEqual(obj1, obj2), true, 'true');
assert.deepEqual(isEqual(obj2, obj3), true, 'true');
assert.deepEqual(isEqual(obj1, obj3), true, 'true');
