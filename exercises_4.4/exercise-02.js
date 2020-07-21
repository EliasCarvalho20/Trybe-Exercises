function verificaPalindrome(word) {  
  reversed = word.split("").reverse().join("");

  for (i=0; i<word.length; i++) {
    if (word[i].localeCompare(reversed[i])) {
      return false;
    }
  }

  return true;
}

console.log(verificaPalindrome("arara"));
