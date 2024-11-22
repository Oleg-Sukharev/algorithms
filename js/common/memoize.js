const memoize = (fc) => {
  const memoized = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (memoized.has(key)) {
      return memoized.get(key);
    }

    const result = fc(...args);
    memoized.set(key, result);
    return result;
  };
};