const assert = require('assert');

const greaterThanTen = (array) => {
  let results = array.filter(item => {
    if (item > 10) {
      return item;
    }
  });

  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepEqual(greaterThanTen(parameter), result, 'true');
