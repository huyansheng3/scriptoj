function new2(func) {
  let o = Object.create(func.prototype)
  let k = func.call(o)
  return typeof k === 'object' ? k : o
}

function M() {
  // 即将被new的类
  this.name = 'liwenli'
}

let m = new2(M) // 等价于 new M 这里只是模拟
console.log(m instanceof M) // instanceof 检测实例
console.log(m instanceof Object)
console.log(m.__proto__.constructor === M)

Object._create = function(obj) {
  let Fn = function() {}
  Fn.prototype = obj
  return new Fn()
}

var obj1 = { a: '232' }
let obj2 = Object._create(obj1)
console.log(obj2.__proto__ === obj1) // true
console.log(obj2.id) // 1

function add(a, b, c) {
  return a + b + c
}

// console.log(curry(add)(1)(2)(3)) // 6


