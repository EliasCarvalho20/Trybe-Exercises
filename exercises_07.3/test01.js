const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.deepEqual(typeof sum, 'function');
assert.deepEqual(sum(4, 5), 9, 'result should be 9');
assert.deepEqual(sum(0, 0), 0, 'result should be 0');
assert.throws(() => sum(4, '5'));