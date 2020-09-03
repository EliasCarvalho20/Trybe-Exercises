const assert = require('assert');

const sum = (...numbers) => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, number) => acc + number);
};

assert.equal(sum(), 0);
assert.equal(sum(1), 1);
assert.equal(sum(1, 2), 3);
assert.equal(sum(1, 2, 3), 6);
assert.equal(sum(1, 2, 3, 4), 10);