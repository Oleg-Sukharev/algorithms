
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
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

