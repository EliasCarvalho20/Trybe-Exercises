const assert = require('assert');

const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };

const removeVowels = (word) => {  
  let results = word;

  Object.entries(vowels).forEach(entry => {
    const [key, value] = entry;

    results = results.split(key).join(value);
  });

  return results;
};

const parameter = 'Dayane';
const result = 'D1y1n2';

assert.equal(removeVowels(parameter), result, 'true');
