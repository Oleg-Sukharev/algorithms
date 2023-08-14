// You are climbing a staircase.It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

const climbStairs = function (n) {
  let db = [];
  db[1] = 1;
  db[2] = 2;

  for (let i = 3; i <= n; i++) {
    // optimal substructure 
    db[i] = db[i - 1] + db[i - 2]
  }

  return db[n];
}
