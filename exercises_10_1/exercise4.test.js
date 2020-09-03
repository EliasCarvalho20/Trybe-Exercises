const FIZZ = {
  0: 'fizzBuzz',
  6: 'fizz',
  10: 'buzz',
};

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  let x = (num ** 4) % 15;
  return Object.values(FIZZ).includes(FIZZ[x]) ? FIZZ[x] : num;
}

test('The classic one', () => {
  expect((typeof myFizzBuzz)).toBe('function');
  expect(myFizzBuzz(30)).toBe(FIZZ[0]);
  expect(myFizzBuzz(27)).toBe(FIZZ[6]);
  expect(myFizzBuzz(10)).toBe(FIZZ[10]);
  expect(myFizzBuzz(7)).toBe(7);
  expect(myFizzBuzz('??')).toBe(false);
});
