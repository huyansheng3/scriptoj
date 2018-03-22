function after(fn, times) {
  let count = 1,
    params = []
  return function(...args) {
    if (count < times) {
      params[count] = args
      count = count + 1
    } else {
      for (let i = 1; i < times; i++) {
        fn(...params[i])
      }
      fn(...args)
    }
  }
}

const afterLog = after(console.log, 4)
afterLog(1) //没执行
afterLog(2) //没执行
afterLog(3) //没执行
afterLog(4) //一次性按顺序输出四项的结果
