const throttle = (cb, delay) => {
  let isWait = false
  return function (...args) {
    if (isWait) return
    cb.apply(this, args)
    isWait = true
    setTimeout(() => {
      isWait = false
    }, delay)
  }
}

function throttleAlt(func, delay, { leading = true, trailing = true } = {}) {
  let timeout = null;
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    const invokeFunction = () => {
      lastCall = now;
      func.apply(this, args);
    };

    if (!lastCall && !leading) lastCall = now;

    const remainingTime = delay - (now - lastCall);

    if (remainingTime <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      invokeFunction();
    } else if (!timeout && trailing) {
      timeout = setTimeout(() => {
        timeout = null;
        if (trailing) invokeFunction();
      }, remainingTime);
    }
  };
}
