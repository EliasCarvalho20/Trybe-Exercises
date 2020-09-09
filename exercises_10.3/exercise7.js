const fetch = require('node-fetch');

const fetchDog = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(obj =>  response.ok ? resolve(obj) : reject(obj));
};

module.exports = { fetchDog };
