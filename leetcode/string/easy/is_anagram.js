// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false

  const map = new Map()

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  for (const char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1)
      if (map.get(char) === 0) {
        map.delete(char)
      }
    } else {
      return false
    }
  }
  return true
}

//  Unicode characters
const isAnagramAlt = (s, t) => {
  if (s.length !== t.length) return false;
  const countArr_s = [];
  const countArr_t = [];
  for (let i = 0; i < 26; i++) {
    countArr_s[i] = 0;
    countArr_t[i] = 0;
  }

  for (i = 0; i < s.length; i++) {
    countArr_s[s.charCodeAt(i) - 97]++;
  }
  for (i = 0; i < t.length; i++) {
    countArr_t[t.charCodeAt(i) - 97]++;
  }

  for (i = 0; i < 26; i++) {
    if (countArr_s[i] !== countArr_t[i]) return false;
  }
  return true
};