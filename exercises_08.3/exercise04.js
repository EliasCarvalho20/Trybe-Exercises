const books = require('./books');
const assert = require('assert');

const expected_result = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

function longestNamedBook() {
  return books.reduce((bookName, item) => (
    (bookName.name.length > item.name.length ) ? bookName : item
  ));
}

assert.deepEqual(longestNamedBook(), expected_result);
