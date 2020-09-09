let { getRamdomNumber } = require('../exercise3');

test('Testing getRamdomNumber function', () => {
  getRamdomNumber = jest.fn().mockReturnValue(10);

  expect(getRamdomNumber()).toBe(10);
  expect(getRamdomNumber).toHaveBeenCalled();
  expect(getRamdomNumber).toHaveBeenCalledTimes(1);
  expect(getRamdomNumber).toHaveBeenCalledWith();
  
});