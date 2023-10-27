const str = 'hello';

const reverseString = function (s) {
  const res = s.split("");
  let left = 0
  let right = s.length - 1

  while (left < right) {
    let tmp = res[left]
    res[left] = res[right]
    res[right] = tmp
    left++
    right--
  }

  return res.join("");
};

const reverseString1 = (str) => {
  return str.split("").reverse().join("");
}

const reverseString2 = (str) => {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

const reverseString3 = (str) => {
  return str.split("").reduce((reversed, char) => char + reversed, "")
}
