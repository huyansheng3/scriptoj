/**
 * 编写一个 JavaScript generator 函数，接受一个仅包含数字的 多维数组 ，返回一个迭代器，可以遍历得到它拍平以后的结果。例如：
 * @param {*} arr
 */
function* flatten2(arr) {
  const tmp = []

  function travelArr(arr) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        travelArr(item)
      } else {
        tmp.push(item)
      }
    })
  }
  travelArr(arr)
  console.log(tmp)
  let nextIndex = 0
  return {
    next: function() {
      return nextIndex < tmp.length
        ? { value: tmp[nextIndex++], done: false }
        : { done: true }
    },
  }
}

const numbers = flatten2([1, [[2], 3, 4], 5])
console.log(numbers.next().value) // => 1
console.log(numbers.next().value) // => 2
console.log(numbers.next().value) // => 3
console.log(numbers.next().value) // => 4
console.log(numbers.next().value) // => 5
