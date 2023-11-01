// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = new Map();
  let maxChar = '';
  let maxCount = 0;

  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const [char, count] of map) {
    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
