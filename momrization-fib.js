/**
 * https://scriptoj.com/problems/102
 * 带记忆功能的斐波那契数列, 第 n 个数由数列的前两个相加而来：f(n) = f(n - 1) + f(n -2)
 * @param {*} n
 */

const fib0 = n => {
  if (n === 1 || n === 2) {
    return 1
  } else {
    return fib0(n - 1) + fib0(n - 2)
  }
}

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

const fib3 = n => {
  const list = [1, 1]
  while (list.length < n) {
    const len = list.length
    list.push(list[len - 1] + list[len - 2])
  }
  return list[n - 1]
}

const fib4 = n => {
  let pre = 1,
    curr = 1
  for (let i = 1; i < n - 1; i++) {
    ;[pre, curr] = [curr, pre + curr]
  }
  return curr
}

const fib5 = (() => {
  const list = [0, 1, 1]
  return function(n) {
    if (!list[n]) {
      list[n] = list[n - 1] + list[n - 2]
    }
    return list[n]
  }
})()

const fib6 = n => {
  let list = [0, 1, 1]
  return (function() {
    if (!list[n]) return (list[n] = list[n - 1] + list[n - 2])
    return list[n]
  })()
}

// console.time('fib0')
// fib0(33)
// console.timeEnd('fib0')

// console.time('fib1')
// fib1(33)
// console.timeEnd('fib1')

// console.time('fib2')
// fib2(33)
// console.timeEnd('fib2')

// console.time('fib3')
// fib3(33)
// console.timeEnd('fib3')

// console.time('fib4')
// fib4(33)
// console.timeEnd('fib4')

// console.time('fib5')
// fib5(33)
// console.timeEnd('fib5')

console.time('fib6 total')
for (let i = 1000; i > 30; i--) {
  console.time('fib6 ' + i)
  fib6(i)
  console.timeEnd('fib6 ' + i)
}
console.timeEnd('fib6 total')
