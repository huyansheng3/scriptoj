/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }

  let arr = []
  for (let i = 0, len = digits.length; i < len; i++) {
    arr.push(map[digits[i]])
  }

  let ret = arr[0] || []

  for (let j = 1, len2 = arr.length; j < len2; j++) {
    let curr = arr[j],
      tmp = [];

    ret.forEach(m => {
      curr.forEach(n => {
        tmp.push(m + n)
      })
    })

    ret = tmp
  }

  return ret
};

console.log(letterCombinations("233"))
