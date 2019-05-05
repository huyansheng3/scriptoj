// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let hash = {},
//     start = 0,
//     ans = 0,
//     len = s.length

//   for (let i = 0; i < len; i++) {
//     let item = s[i]

//     if (!hash[item]) {
//       hash[item] = true
//     } else {
//       for (;;) {
//         if (s[start] === item) {
//           start++
//           break;
//         }
//         hash[s[start]] = false
//         start++
//       }
//     }
//     ans = Math.max(ans, i - start + 1)
//   }

//   return ans
// };


// var lengthOfLongestSubstring = function (s) {
//   let len = s.length,
//     curr = 0,
//     hash = {},
//     ans = 0,
//     j

//   for (let i = 0; i < len; i++) {
//     curr = 1
//     hash[s[i]] = true
//     j = i + 1

//     while (j < len && !hash[s[j]]) {
//       hash[s[j]] = true
//       curr += 1
//       j += 1
//     }
//     hash = {}
//     ans = Math.max(ans, curr)
//   }
//   return ans
// };

// var lengthOfLongestSubstring = function (s) {
//   let ans = 0,
//     i = 0,
//     j = 0,
//     len = s.length,
//     set = {};

//   while (i < len && j < len) {
//     if (!set[s[j]]) {
//       set[s[j]] = true
//       j++
//       ans = Math.max(ans, j - i)
//     } else {
//       set[s[i]] = false
//       i++
//     }
//   }

//   return ans
// };


var lengthOfLongestSubstring = function (s) {
  let ans = 0,
    len = s.length,
    set = {};

  for (let i = 0, j = 0; j < len; j++) {

    if (set[s[j]]) {
      i = Math.max(set[s[j]], i)
    }
    ans = Math.max(ans, j - i + 1);
    set[s[j]] = j + 1

  }

  return ans
};

console.log(lengthOfLongestSubstring('abcabcbb'));

// var lengthOfLongestSubstring = function (s) {
//   let len = s.length,
//     ans = 0

//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j <= len; j++) {
//       if (allUnique(s, i, j)) ans = Math.max(ans, j - i)
//     }
//   }

//   return ans
// };

// function allUnique(s, start, end) {
//   let set = {}
//   for (let i = start; i < end; i++) {
//     if (set[s[i]]) return false
//     set[s[i]] = true
//   }

//   return true
// }


// abcabcbb

// abc
// bc
// bca
// ca
// cab
// ab
// abc
// bc
// c
// cb
// c
// b
// ''
// b

// abc
