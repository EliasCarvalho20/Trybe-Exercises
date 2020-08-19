const books = require('./books');
const assert = require('assert');

const expected_result = 43;

function averageAge() {
  return books.reduce((avg, item) => (
    avg + (item.releaseYear - item.author.birthYear)
  ), 0) / books.length;
}

assert.equal(averageAge(), expected_result);
