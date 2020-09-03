const result = new Promise((resolve, reject) => {
  const numbers = [...Array(10)].map(_ => Math.floor(Math.random() * 51) ** 2);
  const sum = numbers.reduce((total, value) => total + value, 0);
  sum < 8000 ? resolve(sum) : reject('É mais de oito mil!');
})
  .then(sum => [2, 3, 5, 10].map(item => sum / item))
  .then(array => console.log(Math.floor(array.reduce((total, item2) => total + item2, 0))))
  .catch(console.log);
