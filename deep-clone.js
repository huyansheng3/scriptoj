// 函数处理待定，待看 lodash 是怎么做深拷贝的
// 看了下 lodash,函数是原来的引用，不用关心。
function deepClone(obj) {
  if (typeof obj !== 'object') return obj
  let newObj = obj.constructor === Array ? [] : {}
  for (key in obj) {
    if (typeof obj[key] === 'object') {
      newObj[key] = deepClone(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
