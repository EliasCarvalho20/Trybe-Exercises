function endingOfWord(word, ending) {
  string = word.charAt(word.length - 2) + word.charAt(word.length - 1);
  return ending === string;
}

console.log(endingOfWord("trybe", "be"));
