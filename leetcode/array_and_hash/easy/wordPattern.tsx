// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection 
// between a letter in pattern and a non - empty word in s.Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"

function wordPattern(pattern: string, s: string): boolean {
  const patternToWord = new Map<string, string>();
  const wordToPattern = new Map<string, string>();
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // Check pattern-to-word mapping
    if (patternToWord.has(char)) {
      if (patternToWord.get(char) !== word) {
        return false;
      }
    } else {
      patternToWord.set(char, word);
    }

    if (wordToPattern.has(word)) {
      if (wordToPattern.get(word) !== char) {
        return false;
      }
    } else {
      wordToPattern.set(word, char);
    }
  }

  return true;
};