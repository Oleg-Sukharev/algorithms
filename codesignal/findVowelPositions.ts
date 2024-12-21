function findVowelPositions(s:string[]):number[] {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const result:number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) result.push(i);
  }

  return result;
}