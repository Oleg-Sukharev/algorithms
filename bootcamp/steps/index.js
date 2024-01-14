// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function stepsAlt(n) {
  if (n < 1) return null;

  for (let row = 0; row < n; row++) {
    let printValue = "";
    for (let ceil = 0; ceil < n; ceil++) {
      const addItem = row >= ceil ? "#" : " ";

      printValue += addItem;
    }

    console.log(printValue);
  }
}

function steps(n, row = 0, str = '') {
  if (n === row) return;

  if (n == str.length) {
    console.log(str);

    return steps(n, row + 1);
  }

  const addItem = str.length <= row ? "#" : " ";
  return steps(n, row, str + addItem)
}


module.exports = steps;
