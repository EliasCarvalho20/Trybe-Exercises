const { uppercase } = require('../exercise1')

test('Test if a function returns a given string in upperCase', done => {
  uppercase('i don\'t know', (result) => {
    expect(result).toBe('I DON\'T KNOW');
  });
  done();
});