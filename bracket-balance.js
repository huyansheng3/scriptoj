// 如 balance('[()') = false; balance('[()()()]') = true

function match(char) {
  return /[\(\)\[\]\{\}]/.test(char)
}

function isBalanceMatch(a, b) {
  return (
    (a === '(' && b === ')') ||
    (a === '[' && b === ']') ||
    (a === '{' && b === '}')
  )
}

function balance(str = '') {
  let stack = [],
    len = str.length
  debugger
  for (let i = 0; i < len; i++) {
    debugger
    if (match(str[i])) {
      if (isBalanceMatch(stack[stack.length - 1], str[i])) {
        stack.pop()
      } else {
        stack.push(str[i])
      }
    }
  }

  return !stack.length
}

console.log(balance('[()')) //false
console.log(balance('{[{a:3}][(a+b)(x+y)]}')) //true
console.log(balance('let x = [1 + 2, { a: 2 + 3 }, 4 + 2], m = []'))
// [{
//   a: (1+2) *(3/2)
//   b: (1+2) *(3/2)
// },
// {
//   a: (1+2) *(3/2)
//   b: (1+2) *(3/2)
// },

// {
//   a: (1+2) *(3/2)
//   b: (1+2) *(3/2)
// },]

// let x = [1 + 2, { a: 2 + 3 }, 4 + 2], m = []
