const { getUserName } = require('../exercise2')

describe('test case with async/await', () => {
  describe('Given an id checks if the user is in the database', () => {
    it('Id 4 must return user named Mark', async () => {
      expect.assertions(1);
      await expect(getUserName('4')).resolves.toEqual('Mark')
    });

    it('Id 5 must return user named Paul', async () => {
      expect.assertions(1);
      await expect(getUserName('5')).resolves.toEqual('Paul')
    });

  });

  describe('Given a wrong id returns an error', () => {
    it('Id 3 must return an error', async () => {
      expect.assertions(1);
      try {
        await getUserName('3');
      } catch (error) {
        expect(error).toEqual({ error: 'User with id 3 not found.' });
      }
    });
  });
});
