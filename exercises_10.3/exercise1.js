let randomNumber = () =>  Math.floor(Math.random() * 100);

let isDivisible = (number) => (randomNumber() % number) === 0;

module.exports = { isDivisible, randomNumber };
