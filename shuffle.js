function shuffle(arr) {
  var result = [],
    random
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length)
    result.push(arr[random])
    arr.splice(random, 1)
  }
  return result
}

function swap(a, b) {
  let tmp = a
  a = b
  b = tmp
}

function shuffle2(arr) {
  let index = 0,
    random,
    tmp
  const len = arr.length
  while (index < len) {
    random = Math.floor(Math.random() * (len - index - 1))
    tmp = arr[random]
    arr[random] = arr[index]
    arr[index] = tmp
    index = index + 1
  }
  return arr
}

function range(num) {
  let result = []
  for (let i = 0; i < num; i++) {
    result.push(i)
  }
  return result
}

var a = range(10000)

console.time('shuffle')
var b = shuffle(a)
console.timeEnd('shuffle')

console.time('shuffle2')
var c = shuffle2(a)
console.timeEnd('shuffle2')
