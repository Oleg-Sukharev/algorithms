// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Examples:
// 1
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// 2
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

const isPalindromeString = (s) => {
  const cleanedS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedS === cleanedS.split('').reverse().join('');
}
