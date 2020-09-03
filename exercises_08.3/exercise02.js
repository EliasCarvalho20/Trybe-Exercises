const books = require('./books');
const assert = require('assert');

function allNames() {
  return books.reduce((names, item, index) => {
    if (index === books.length - 1) {
      return names += `${item.author.name}.`;
    }
    return names += `${item.author.name}, `;
  }, 'Nomes: ');
}

const expected = "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft."
assert.deepEqual(allNames(), expected);
