// Input: ["flower","flow","flight"]
// Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ret = '',
    char = '',
    j = 0,
    minLength = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length
    }
  }

  flag:
    while (j < minLength) {
      for (let i = 0; i < strs.length; i++) {
        if (i === 0) {
          char = strs[i][j]
        }

        if (strs[i][j] !== char) {
          break flag
        }
      }

      j += 1
      ret += char
    }


  return ret

};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
