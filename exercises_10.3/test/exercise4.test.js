let { getRamdomNumber } = require('../exercise3');

test('Testing getRamdomNumber function', () => {
  getRamdomNumber = jest.fn().mockImplementation((a, b) => a / b);

  expect(getRamdomNumber(12, 2)).toBe(6);
  expect(getRamdomNumber).toHaveBeenCalled();
  expect(getRamdomNumber).toHaveBeenCalledTimes(1);
  expect(getRamdomNumber).toHaveBeenCalledWith(12, 2);
});