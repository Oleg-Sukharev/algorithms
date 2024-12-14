function mostFrequentWord(paragraph: string, banned: string[]): string {
  const words = paragraph.toLowerCase().split(/\W+/g);
  const map = new Map<string, number>();
  let mostCommon = '';
  let maxCount = 0;

  for (let i = 0; i < words.length; i++) {
    if (banned.indexOf(words[i]) === -1) {
      const count = (map.get(words[i]) ?? 0) + 1;
      map.set(words[i], count);
      
      if (count > maxCount) {
        maxCount = count;
        mostCommon = words[i];
      }
    }
  }

  return mostCommon;
}

// Test cases
console.log(mostFrequentWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])); // Output: "ball"
console.log(mostFrequentWord("a, a, a, a, b,b,b,c, c", ["a"])); // Output: "b"
