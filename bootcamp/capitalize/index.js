// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];

  for (const word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  return words.join(" ");
}

function capitalizeAlt(str) {
  return str.split(" ").map((substring) => {
    return substring[0].toUpperCase() + substring.slice(1);
  }).join(' ')
}

module.exports = capitalize;
