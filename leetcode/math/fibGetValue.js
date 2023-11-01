// Fibonacci series - is a series of numbers in which every number is the sum of the two previous numbers 
// here we need to get the value by its order in the Fibonacci series
// The first few numbers of the series are 1, 1, 2, 3, 5, 8, 13.
// here we starts from 1

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6)); // 8

