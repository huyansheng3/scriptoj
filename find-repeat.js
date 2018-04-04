// 例如：[1，2，4，4，3，3，1，5，3]
// 输出：[1，3，4]
let arr = [1, 2, 4, 4, 3, 3, 1, 5, 3]

function repeat1(arr = []) {
  let arrObj = {},
    result = []

  arr.forEach(value => {
    if (!arrObj[value]) {
      arrObj[value] = true
      result.push(value)
    }
  })

  return result
}

// console.log(repeat1(arr))

// 如果次数相同 则按照值排序 比如  2, 2, 2和 1, 1, 1  应排序为 [1, 1, 1, 2, 2, 2]
// 比如 [1,2,1,2,1,3,4,5,4,5,5,2,2] => [3, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2]
let arr2 = [9, 7, 7, 1, 2, 1, 2, 1, 3, 4, 5, 4, 5, 5, 2, 2]
function sortArray(arr = []) {
  let obj = {}
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i]
    if (obj[cur]) {
      obj[cur].push(cur)
      continue
    }
    obj[cur] = [cur]
  }
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      newArr.push(obj[k])
    }
  }
  newArr.sort((a, b) => {
    if (a.length === b.length) {
      return a[0] - b[0]
    }
    return a.length - b.length
  })
  newArr = newArr.reduce((prev, cur) => prev.concat(cur))
  return newArr
}
console.log(sortArray(arr2)) // [ 3, 9, 4, 4, 7, 7, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2 ]
