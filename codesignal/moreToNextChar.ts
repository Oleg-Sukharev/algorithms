
function moreToNextChar(s:string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result:string[] = [];

    for (const index in array) {
  console.log(index, array[index]); // 
    const lowerChar = char.toLowerCase();

    if (alphabet.includes(lowerChar)) {
      const isUpperCase = char === char.toUpperCase();
      const currentIndex = alphabet.indexOf(lowerChar);
      const nextIndex = (currentIndex + 1) % alphabet.length;
      const nextChar = isUpperCase
        ? alphabet[nextIndex].toUpperCase()
        : alphabet[nextIndex];

      result.push(nextChar);
    } else {
      result.push(char);
    }
  }

  return result.join("");
}


// String Immutability in JavaScript:
// In JavaScript, strings are immutable.Every time you concatenate a character to a string(result += char), a new string is created in memory, and the old string is discarded.
// This can be inefficient for large strings because it involves repeatedly allocating memory and copying data.

// function withArray(s) {
//   const result = [];
//   for (let char of s) {
//     result.push(char === 'a' ? 'b' : char);
//   }
//   return result.join('');
// }

// function withString(s) {
//   let result = '';
//   for (let char of s) {
//     result += char === 'a' ? 'b' : char;
//   }
//   return result;
// }

// const largeString = 'a'.repeat(1000000); // 1 million characters

// console.time('With Array');
// withArray(largeString);
// console.timeEnd('With Array');

// console.time('With String');
// withString(largeString);
// console.timeEnd('With String');
