const toChineseNum = num => {
  const numsMap = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const digitsMap = ['', '十', '百', '千', '万', '十', '百', '千', '万']
  num = String(num)
  let str = ''
  while (num.length > 0) {
    if (+num[0]) {
      str += numsMap[num[0]] + digitsMap[num.length - 1]
    } else if (!+num[0] && str.substr(-1) !== '零') {
      str += numsMap[num[0]]
    }
    num = num.substr(1)
  }
  return str
}

console.log(toChineseNum(12345)) //  一万二千三百四十五
console.log(toChineseNum(34045)) //  三万四千零四十五
console.log(toChineseNum(34005)) //  四万四千零五
console.log(toChineseNum(32434005)) // 三千二百四十三万四千零五
console.log(toChineseNum(23300453)) // 二千三百三十万零四百五十三
console.log(toChineseNum(20100453)) // 二千零十万四百五十三
console.log(toChineseNum(00305)) //  三百零五
