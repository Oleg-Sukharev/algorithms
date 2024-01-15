// Write a function that returns the number of vowels
// --- Directions
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowelsAlt(str) {
  const checker = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      counter++;
    }
  }

  return counter;
}

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}


module.exports = vowels;
