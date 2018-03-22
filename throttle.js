function throttle(fn, delay = 50) {
  let start = 0
  return function(...args) {
    let current = new Date()
    if (current - start >= delay) {
      fn(...args)
      start = current
    }
  }
}
