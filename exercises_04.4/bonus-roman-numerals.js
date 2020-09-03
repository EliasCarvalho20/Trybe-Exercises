function romanNumerals(string) {
  const roman = {
    I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, 
    XC: 90, C: 100, CD: 400, CM: 900, M: 1000
  }

  let number = 0;
  let symbol = string.split("");

  for (let i = 0; i < symbol.length; i += 1) {
    if (roman[symbol[i]] < roman[symbol[i + 1]]) {
      number -= roman[symbol[i]];
    } else {
      number += roman[symbol[i]];
    }
  }

  return number;    
}

console.log(romanNumerals("CMIX"));
