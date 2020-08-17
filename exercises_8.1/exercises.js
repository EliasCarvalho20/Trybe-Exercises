const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercise-01
const authorBornIn1947 = (book) => {
  return book.find((item) => item.author.birthYear === 1947);
};
assert.equal(authorBornIn1947(books).author.name, 'Stephen King');


// Exercise-02
function smallerName() {
  let nameBook = books[0].name;

  books.forEach((item) => {
    if (nameBook.length > item.name.length) {
      nameBook = item.name;
    }
  });

  return nameBook;
}
assert.equal(smallerName(), 'Duna');


// Exercise-03
const getNamedBook = (book) => book.find((item) => item.name.length === 26);
assert.deepStrictEqual(getNamedBook(books).name, 'As Crônicas de Gelo e Fogo');


// Exercise-04
function OrderedByReleaseYear() {
  return books.sort((a, b) => (a.releaseYear > b.releaseYear) ? 1 : -1);
}
assert.deepStrictEqual(OrderedByReleaseYear(), books);


// Exercise-05 
const everyoneWasBornOnSecXX = (book) => {
  return book.every((item) => item.author.birthYear <= 2000);
};
assert.equal(everyoneWasBornOnSecXX(books), true);


// Exercise-06
const someBookWasReleaseOnThe80s = (book) => {
  return book.some((item) => 1980 <= item.releaseYear && item.releaseYear <= 1989);
};
assert.equal(someBookWasReleaseOnThe80s(books), true);


// Exercise-06
const authorUnique = (book) => {
  let bornYear = [];
  let check = false;

  book.forEach((item) => {
    bornYear.push(item.author.birthYear);

    if (!bornYear.includes(item.author.birthYear)) {
      check = true;
    }
  });

  return check;
};

assert.equal(authorUnique(books), false);
