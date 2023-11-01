// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non - space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.


const lengthOfLastWord = (s) => {
  const arr = s.trim().split(" ");

  return arr[arr.length - 1].length;
}


var lengthOfLastWordAlt = function (s) {
  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (result !== 0) break;
    } else {
      result++;
    }
  }

  return result;
};