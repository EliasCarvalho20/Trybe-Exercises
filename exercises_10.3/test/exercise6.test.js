let { upperCase, firstLetter, concatString } = require('../exercise6');
jest.mock('../exercise6');

test('Test upperCase function implementation', () => {
  upperCase.mockImplementation((str) => str.toLowerCase());

  expect(upperCase('SOMETHING')).toBe('something');
  expect(upperCase).toHaveBeenCalled();
  expect(upperCase).toHaveBeenCalledTimes(1);
  expect(upperCase).toHaveBeenCalledWith('SOMETHING');
});

test('Test firstLetter function implementation', () => {
  firstLetter.mockImplementation((str) => str[str.length -1]);

  expect(firstLetter('SOMETHING')).toBe('G');
  expect(firstLetter).toHaveBeenCalled();
  expect(firstLetter).toHaveBeenCalledTimes(1);
  expect(firstLetter).toHaveBeenCalledWith('SOMETHING');
});

test('Test concatString function implementation', () => {
  concatString.mockImplementation((str1, str2, str3) => str1.concat(str2.concat(str3)));

  expect(concatString('SOMETHING', 'ANYTHING', 'THING')).toBe('SOMETHINGANYTHINGTHING');
  expect(concatString).toHaveBeenCalled();
  expect(concatString).toHaveBeenCalledTimes(1);
  expect(concatString).toHaveBeenCalledWith('SOMETHING', 'ANYTHING', 'THING');
});

test('Restaure upperCase default implementation', () => {
  upperCase.mockReset();
  upperCase.mockImplementation((str) => str.toUpperCase());
  
  expect(upperCase('something')).toBe('SOMETHING');
  expect(upperCase).toHaveBeenCalled();
  expect(upperCase).toHaveBeenCalledTimes(1);
  expect(upperCase).toHaveBeenCalledWith('something');
});
