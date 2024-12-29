function countSum(n, pos = 1): number {
  const values = String(n);
  const len = values.length;
  if (len < pos) return 0;

  const current = Math.pow(+values[len - pos], pos);
  return current + countSum(n, pos + 1);
}

console.log(countSum(253));
console.log(countSum(1));
console.log(countSum(325));
console.log(countSum(389));