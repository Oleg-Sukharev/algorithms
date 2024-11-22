const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      // If all arguments are provided, invoke the function
      return fn(...args);
    }

    // Otherwise, return a new function that expects more arguments
    return function (...newArgs) {
      return curried(...args, ...newArgs);
    };
  };
}

const sum = (a, b, c) => {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
