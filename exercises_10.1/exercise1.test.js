function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters must be numbers');
  }

  return a + b;
}

test('Sum of a + b', () => {
  expect((typeof sum)).toBe('function');
  expect(sum(4, 5)).toBe(9);
  expect(sum(8, 10)).toBe(18);
  expect(sum(0, 0)).toBe(0);
  expect(() => {
    sum(6, '2').toThrow('Parameters must be numbers');
  });
});
