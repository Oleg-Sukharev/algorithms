// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^a-zA-Z]+/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

function anagramsAlt(stringA, stringB) {
  const charMap = new Map()
  const onlyCharStringA = stringA.replace(/[^a-zA-Z]+/g, '').toLowerCase();
  const onlyCharStringB = stringB.replace(/[^a-zA-Z]+/g, '').toLowerCase();

  for (const char of onlyCharStringA) {
    charMap.set(char, (charMap.get(char) || 0) + 1)
  }

  for (const char of onlyCharStringB) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) - 1);
      if (charMap.get(char) === 0) {
        charMap.delete(char)
      }
    } else {
      return false;
    }

  }
  return true
}


module.exports = anagrams;
