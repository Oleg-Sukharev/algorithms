
const memo = (cb) => {
  const memoized = new Map();

  return function (arg) {
    if (memoized.has(arg)) {
      return memoized.get(arg);
    } else {
      const result = cb(arg);
      memoized.set(arg, result);
      return result;
    }
  };
};

const fibonacci = memo(function (n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

