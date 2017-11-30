/**
 * 带记忆功能的斐波那契数列, 第 n 个数由数列的前两个相加而来：f(n) = f(n - 1) + f(n -2)
 * @param {*} n
 */
const fib1 = n => {
  const list = {}
  if (n === 1 || n === 2) {
    list[n] = 1
    return 1
  } else {
    const result = (list[n - 1] || fib1(n - 1)) + (list[n - 2] || fib1(n - 2))
    list[n] = result
    return result
  }
}

const fib2 = n => {
  const list = {
    1: 1,
    2: 1,
  }
  for (let i = 3; i <= n; i++) {
    list[i] = list[i - 1] + list[i - 2]
  }
  return list[n]
}

const fibonacci3 = n => {}

console.time('fib1')
fib1(30)
console.timeEnd('fib1')

console.time('fib2')
fib2(30)
console.timeEnd('fib2')
