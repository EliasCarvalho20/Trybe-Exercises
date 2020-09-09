let { isDivisible, randomNumber } = require('../exercise1');

test('Check if the function randomNumber was called', () => {
  randomNumber = jest.fn();

  isDivisible();
  expect(randomNumber).toHaveBeenCalled();
});

test('Check if isDivisible return true', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  expect(isDivisible(2)).toBe(true);
});

test('Some other tests', () => {
  randomNumber = jest.fn().mockReturnValue(7);
  randomNumber = jest.fn().mockReturnValue(16);

  expect(isDivisible(1)).toBe(true);
  expect(isDivisible(2)).toBe(true);
  expect(isDivisible(3)).toBe(false);
  expect(isDivisible(4)).toBe(true);
});
