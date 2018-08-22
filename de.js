//  * * Example: * destructuringArray( [1,[2,4],3], "[a,[b],c]" ); * // result * { a:1, b:2, c:3 }



// function destructuringArray(arr = [1, [2, 4], 3], arrStr = "[a,[b],c]", result = {}) {
//   if (!/\[(.*)\]/.test(arrStr)) return
//   const keyArr = arrStr.replace(/\[(.*)\]/, '$1').split(',')
//   keyArr.forEach((item, index) => {
//     if (/\[(.*)\]/.test(item)) {
//       destructuringArray(arr[index], item, result)
//     } else {
//       result[item] = arr[index]
//     }
//   })
//   return result
// }

// console.log(destructuringArray())


function destructuringArray(arr = [1, [2, 4], 3], arrStr = "[a,[b],c]") {
  if (!/\[(.*)\]/.test(arrStr)) return
  let result = {}
  const keyArr = arrStr.replace(/\[(.*)\]/, '$1').split(',')
  keyArr.forEach((item, index) => {
    if (/\[(.*)\]/.test(item)) {
      result = Object.assign(result, destructuringArray(arr[index], item, result))
    } else {
      result[item] = arr[index]
    }
  })
  return result
}

console.log(destructuringArray())
