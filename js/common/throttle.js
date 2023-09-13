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