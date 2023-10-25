// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

const generateAlt = (numRows) => {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 0; j < i + 1; j++) {
      // The first and last elements in every row are always 1
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        // Calculate the element using the values from the row above
        const value = result[i - 1][j - 1] + result[i - 1][j];
        row.push(value);
      }
    }

    result.push(row);
  }

  return result;
};

const generate = (numRows) => {
  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = [];
    const prevRow = triangle[i - 1];

    row[0] = 1; // The first element in every row is 1

    for (let j = 1; j < i; j++) {
      row[j] = prevRow[j - 1] + prevRow[j];
    }

    row[i] = 1; // The last element in every row is 1
    triangle.push(row);
  }

  return triangle;
};

console.log(generate(5));