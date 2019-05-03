// Example:

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)

  let len = nums.length,
    result = []

  for (let i = 0; i < len - 3; i++) {
    if (i && nums[i] === nums[i - 1]) continue

    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      let [start, end] = [j + 1, len - 1]

      while (start < end) {
        let sum = nums[i] + nums[j] + nums[start] + nums[end]

        if (sum === target) {
          result.push([nums[i], nums[j], nums[start], nums[end]])

          while (start + 1 < end && nums[start] === nums[start + 1]) {
            start++
          }

          while (end - 1 > start && nums[end] === nums[end - 1]) {
            end--
          }

          start++
          end--
        } else if (sum > target) {
          end--
        } else {
          start++
        }
      }
    }

  }


  return result

};


// var fourSum = function (nums, target) {
//   nums.sort((a, b) => a - b)

//   let len = nums.length
//   let hash = {}

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       let a = nums[i],
//         b = nums[j],
//         c = a + b

//       hash[c] ? (hash[c]).push([i, j]) : hash[c] = [
//         [i, j]
//       ]
//     }
//   }

//   let ans = [],
//     hashSet = {}

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       let a = nums[i],
//         b = nums[j],
//         sum = target - a - b


//       if (!hash[sum]) continue

//       for (let k in hash) {
//         let item = hash[sum][k]

//         if (item[0] === i || item[1] === i || item[0] === j || item[1] === j) continue

//         let c = nums[item[0]],
//           d = nums[item[1]]

//         let temp = [a, b, c, d].sort((a, b) => a - b)

//         let str = temp.join(',')
//         if (!hashSet[str]) {
//           hashSet[str] = true
//           ans.push(temp)
//         }
//       }
//     }
//   }


//   return ans


// };


console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
