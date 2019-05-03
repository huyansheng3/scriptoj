/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const reps = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

  let ret = 0
  for (let i = 0, len = s.length; i < len; i++) {
    for (let j = 0; j < reps.length; j++) {
      if (reps[j] === s.substr(i, reps[j].length)) {
        ret += values[j]
        i += (reps[j].length - 1)
        break
      }
    }
  }

  return ret
};

console.log(romanToInt("MCMXCIV"));
