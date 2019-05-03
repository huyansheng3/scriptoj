/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let ret = ''
  const thousand = Math.floor(num / 1000)
  const hundred = Math.floor((num - thousand * 1000) / 100)
  const ten = Math.floor((num - thousand * 1000 - hundred * 100) / 10)
  const dig = num - thousand * 1000 - hundred * 100 - ten * 10

  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }


  ret += Array(thousand).fill('M').join('')

  if (hundred === 9) {
    ret += 'CM'
  } else if (hundred === 4) {
    ret += 'CD'
  } else {
    if (hundred >= 5) {
      ret += 'D' + Array(hundred - 5).fill('C').join('')
    } else {
      ret += Array(hundred).fill('C').join('')
    }
  }


  if (ten === 9) {
    ret += 'XC'
  } else if (ten === 4) {
    ret += 'XL'
  } else {
    if (ten >= 5) {
      ret += 'L' + Array(ten - 5).fill('X').join('')
    } else {
      ret += Array(ten).fill('X').join('')
    }
  }


  if (dig === 9) {
    ret += 'IX'
  } else if (dig === 4) {
    ret += 'IV'
  } else {
    if (dig >= 5) {
      ret += 'V' + Array(dig - 5).fill('I').join('')
    } else {
      ret += Array(dig).fill('I').join('')
    }
  }


  return ret

};


function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const reps = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  let res = '';

  for (let i = 0; i < 13; i++) {
    while (num >= values[i]) {
      num -= values[i];
      res += reps[i];
    }
  }
  return res;
}

console.log(intToRoman(58))
