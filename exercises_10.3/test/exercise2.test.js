let { somar, subtrair, multiplicar, dividir } = require('../exercise2');
jest.mock('../exercise2');

test('Testing subtrair function', () => {
  subtrair.mockImplementation((a, b) => a - b);
  
  expect(subtrair(3, 4)).toBe(-1);
  expect(subtrair).toHaveBeenCalled();
  expect(subtrair).toHaveBeenCalledTimes(1);
  expect(subtrair).toHaveBeenCalledWith(3, 4);
});

test('Testing multiplicar function', () => {
  multiplicar.mockImplementation((a, b) => a * b);
  multiplicar(7, 7);
  multiplicar.mockReturnValue(10);
  
  expect(multiplicar).toHaveBeenCalled();
  expect(multiplicar).toHaveBeenCalledTimes(1);
  expect(multiplicar).toHaveBeenCalledWith(7, 7);
  expect(multiplicar(7, 7)).toBe(10);
});

test('Testing somar function', () => {
  somar.mockImplementation((a, b) => a + b);

  expect(somar(6, 8)).toBe(14);
  expect(somar).toHaveBeenCalled();
  expect(somar).toHaveBeenCalledTimes(1);
  expect(somar).toHaveBeenCalledWith(6, 8);  
});

test('Testing dividir function', () => {
  dividir.mockImplementation((a, b) => a / b);
  dividir.mockReturnValue(15);
  
  expect(dividir(2, 5)).toBe(15);
  expect(dividir).toHaveBeenCalled();
  expect(dividir).toHaveBeenCalledTimes(1);
  expect(dividir).toHaveBeenCalledWith(2, 5);  
});

test('Testing subtrair function', () => {
  subtrair = jest.fn().mockImplementation((a, b) => a + b); 
  expect(subtrair(3, 4)).toBe(7);

  subtrair.mockReset();
  expect(subtrair(3, 4)).toBe(undefined);
});