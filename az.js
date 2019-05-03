// 1-26 对应 a-z ， 123 输出 abc 或 hc

function azMap(prefix = '', numStr = '123', result = []) {
  if (!numStr.length) return

  if (numStr.length <= 2) {
    if (+numStr <= 26) {
      result.push(prefix + ' ' + numStr)
      result.push(prefix + ' ' + numStr.slice(0, 1) + ' ' +
        numStr.slice(1, 2))
    } else {
      result.push(prefix + ' ' + numStr.slice(0, 1) + ' ' +
        numStr.slice(1, 2))
    }
  }

  if (+numStr.slice(0, 2) <= 26) {
    azMap(prefix + ' ' + numStr.slice(0, 2), numStr.slice(2), result)
    azMap(prefix + ' ' + numStr.slice(0, 1), numStr.slice(1), result)
  } else {
    azMap(prefix + ' ' + numStr.slice(0, 1), numStr.slice(1), result)
  }
  return result
}

console.log(azMap());
