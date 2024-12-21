function swapAdjacentPairs(s:string):string {
  if (s.length <= 1) return s;
  let result = "";

  for (let i = 1; s.length > i; i += 2) {
    result += s[i] + s[i - 1];
  }

  if (s.length % 2) result += s[s.length - 1];

  return result;
}
console.log(swapAdjacentPairs("ehll"));
console.log(swapAdjacentPairs("ehllo"));
