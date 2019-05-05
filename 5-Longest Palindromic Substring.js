// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length,
    ans = ''

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len + 1; j++) {
      let str = s.substring(i, j)
      if (isPalindrome(str)) {
        ans = ans.length > str.length ? ans : str
      }
    }
  }

  return ans
};


function isPalindrome(s) {
  return s === s.split('').reverse().join('')
}

console.log(longestPalindrome('cbbd'));
