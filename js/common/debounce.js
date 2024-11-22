function debounce(cb, delay) {
  let timeout;

  return function (...arg) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb.apply(arg)
    }, delay);
  }
}