// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// -4 -1 -1 0 1 2
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)

  let ans = [],
    len = nums.length;

  for (let i = 0; i < len; i++) {
    if (i && nums[i] === nums[i - 1]) continue

    let target = -nums[i]

    let [start, end] = [i + 1, len - 1]

    while (start < end) {
      let sum = nums[start] + nums[end]
      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        ans.push([nums[i], nums[start], nums[end]])
        while (nums[start] === nums[start + 1])
          start++
        start++

        while (nums[end] === nums[end - 1])
          end--
        end--
      }
    }
  }

  return ans
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
