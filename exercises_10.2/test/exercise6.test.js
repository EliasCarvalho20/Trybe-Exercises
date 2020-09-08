const { getAnimal, getAge } = require('../exercise6');

describe('Testing promise - findAnimalByName', () => {
  describe('When the animal with the given name exists', () => {
    test('Returns the animal\'s object', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('When the animal with the given name doesn\'t exists', () => {
    test('Returns an error', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('No animal with that name!')
      );
    });
  });
});

describe('Testing promise - findAnimalByName', () => {
  describe('When the animal with the given age exists', () => {
    test('Return the animal\'s object', () => {
      expect.assertions(1);
      return getAge(2).then(animal => {
        expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
      })
    });
  });

  describe('When the animal with the given age doesn\'t exists', () => {
    test('Returns an error', () => {
      expect.assertions(1);
      return getAge(0).catch(error =>
        expect(error).toEqual('No animals of that age!')
      );
    });
  });
});
