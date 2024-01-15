// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n, row = 0, str = "") {
  if (row === n) return;

  if (str.length === 2 * n - 1) {
    console.log(str);
    return pyramid(n, row + 1)
  }

  const middle = Math.floor((n * 2 - 1) / 2);
  const addElement = str.length >= middle - row && middle + row >= str.length ? "#" : " ";
  return pyramid(n, row, str + addElement)
}

function pyramidAlt(n) {
  const middle = Math.floor((n * 2 - 1) / 2);
  for (let row = 0; row < n; row++) {
    let printString = "";

    for (let col = 0; col < (n * 2) - 1; col++) {
      const addElement = col >= middle - row && middle + row >= col ? "#" : " ";
      printString += addElement;
    }
    console.log(printString);
  }
}


console.log(pyramid(3));
module.exports = pyramid;
