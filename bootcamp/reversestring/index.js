// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseAlt(str) {
  return str.split('').reverse().join('');
}

function reverseAlter(str) {
  let result = "";

  for (const char of str) {
    result = char + result
  }

  return result;
}

function reverse(str) {
  return str.split("").reduce((acc, char) => char + acc, '');
}

module.exports = reverse;