// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

const convertToTitle = (columnNumber) => {
  let result = '';

  while (columnNumber > 0) {
    columnNumber--;
    const remainder = columnNumber % 26;
    result = String.fromCharCode('A'.charCodeAt(0) + remainder) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};

console.log(convertToTitle(3));
