function getArray(n) {
  if (n === 1) return [1];
  return [n].concat(getArray(n - 1));
}

function getSum(n) {
  if (n === 1) return n;
  return n + getSum(n - 1);
}

function powDigitBaseOnItPosition(n, position = 1) {
  const digits = String(n);
  const length = digits.length;

  if (position > length) {
    return 0;
  }

  const digit = Number(digits[length - position]);
  const value = Math.pow(digit, position);

  return value + powDigitBaseOnItPosition(n, position + 1);
}