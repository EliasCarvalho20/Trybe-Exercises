const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter(animal => animal.name === name);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject('No animal with that name!');
    }, 1000);
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter(animal => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject('No animals of that age!');
    });
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(list => list[0]);
};

const getAge = (age) => {
  return findAnimalByAge(age).then(list => list[0]);
};

module.exports = {
  getAnimal,
  getAge
};
