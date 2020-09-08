const { getUserName } = require('../exercise2')

describe('test case with async/await', () => {
  describe('Given an id checks if the user is in the database', () => {
    it('Id 4 must return user named Mark', () => {
      expect.assertions(1);
      return getUserName('4').then(user => {
        expect(user).toEqual('Mark')
      });

    });

    it('Id 5 must return user named Paul', () => {
      expect.assertions(1);
      return getUserName('5').then(user => {
        expect(user).toEqual('Paul')
      });
    });
  });

  describe('Given a wrong id returns an error', () => {
    it('Id 3 must return an error', () => {
      expect.assertions(1);
      return getUserName('3').catch(error => {
        expect(error).toEqual({ error: 'User with id 3 not found.' });
      });
    });
  });
});
