function isPalindrome(input_string: string): Boolean {
  let left = 0;
  let right = input_string.length - 1;

  while (left <= right) {
    const isLeftChar = isAlphaNumeric(input_string[left]);

    if (!isLeftChar) {
      left++;
      continue;
    }

    const rightChar = isAlphaNumeric(input_string[right]);

    if (!rightChar) {
      right--;
      continue;
    }

    if (input_string[left].toLowerCase() == input_string[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}

function isAlphaNumeric(char) {
  // Helper function to check if a character is alphanumeric
  return char.match(/[a-z0-9]/i);
}

console.log(isPalindrome('ab1ba'));

export { }

