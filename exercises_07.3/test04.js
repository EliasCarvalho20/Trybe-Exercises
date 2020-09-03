const assert = require('assert');

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

assert.equal(myFizzBuzz(30), FIZZ[0], 'true1');
assert.equal(myFizzBuzz(27), FIZZ[6], 'true1');
assert.equal(myFizzBuzz(10), FIZZ[10], 'true1');
assert.equal(myFizzBuzz(7), 7, 'true1');
assert.equal(myFizzBuzz('??'), false, 'true1');
