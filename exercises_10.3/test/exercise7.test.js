let { fetchDog } = require('../exercise7');
jest.mock('../exercise7');

describe('Test fetchDog api', () => {
  fetchDog.mockResolvedValue({ status: 'success' });

  test('Success case', async () => {
    expect(fetchDog()).resolves.toEqual({ status: 'success' });
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(1);
  });

  fetchDog.mockReset();
  fetchDog.mockRejectedValue({ status: 'failed' });
  test('Fail case', async () => {
    expect(fetchDog()).rejects.toEqual({ status: 'failed' });
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });
});
