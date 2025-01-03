// You are given a square matrix of n x n size.Your task is to write a JavaScript function that indicates whether the matrix is a Toeplitz matrix.

// In a Toeplitz matrix, each descending diagonal(from left to right) is constant.That is, elements in each descending diagonal are the exact same.

// For example, if the given matrix is:

function isToeplitz(matrix: number[][]): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let col = 0; col < cols; col++) {
    if (!checkDiagonal(matrix, 0, col)) return false;
  }

  for (let row = 1; row < rows; row++) {
    if (!checkDiagonal(matrix, row, 0)) return false;
  }

  return true;
}

function checkDiagonal(matrix: number[][], row: number, col: number): boolean {
  const value = matrix[row][col];
  while (row < matrix.length && col < matrix[0].length) {
    if (matrix[row][col] !== value) return false;
    row++;
    col++;
  }

  return true;
}

const arr: number[][] = [
  [6, 7, 8],
  [4, 6, 7],
  [1, 4, 6]
]

console.log(isToeplitz(arr));

export { };

