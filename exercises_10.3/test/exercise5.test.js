let { getRamdomNumber } = require('../exercise3');

test('Testing getRamdomNumber function', () => {
  getRamdomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(getRamdomNumber(3, 3, 3)).toBe(27);
  expect(getRamdomNumber).toHaveBeenCalled();
  expect(getRamdomNumber).toHaveBeenCalledTimes(1);
  expect(getRamdomNumber).toHaveBeenCalledWith(3, 3, 3);

  getRamdomNumber.mockReset();
  getRamdomNumber = jest.fn().mockImplementation((a) => a * 2);

  expect(getRamdomNumber(10)).toBe(20);
  expect(getRamdomNumber).toHaveBeenCalled();
  expect(getRamdomNumber).toHaveBeenCalledTimes(1);
  expect(getRamdomNumber).toHaveBeenCalledWith(10);
});
