// Given an integer, return an integer what is the reverse 
// ordering of numbers
const reverseInt = (n) => {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-90))