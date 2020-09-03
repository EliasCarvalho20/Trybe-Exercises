// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const objVowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };

function vowels(str) {
  return str.split('').reduce((acc, l) =>
    (objVowels.hasOwnProperty(l.toLowerCase()) ? acc + 1 : acc + 0)
    , 0);
}

module.exports = vowels;
