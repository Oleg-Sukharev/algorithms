// Interval Cancellation
// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

//   setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.


function cancellable(fn, args, t) {
  const results = [];
  let cancelTimer;

  function cancelFn() {
    clearTimeout(cancelTimer);
  }

  function scheduleCall(time) {
    cancelTimer = setTimeout(() => {
      const returnedValue = fn(...args);
      results.push({ time, returned: returnedValue });
      scheduleCall(time + t);
    }, t);
  }

  // Call the function immediately
  const initialReturnedValue = fn(...args);
  results.push({ time: 0, returned: initialReturnedValue });

  // Schedule subsequent calls
  scheduleCall(t);

  return cancelFn;
}
