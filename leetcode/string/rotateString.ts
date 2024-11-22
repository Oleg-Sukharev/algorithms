// Given two strings s and goal, return true if and only 
// if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.
// Example 1:
// Input: s = "abcde", goal = "cdeab"
// Output: true

function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;
  return (s + s).includes(goal);
}

function rotateStringAlt(s: string, goal: string): boolean {
  let src = s;

  for (let i = 0; i < s.length; i++) {
    src = s.slice(i) + s.slice(0, i);
    if (src === goal) return true;
  }

  return false;
};
