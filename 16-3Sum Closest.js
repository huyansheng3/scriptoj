/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let ans,
    len = nums.length;

  let offset = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < len; i++) {

    let curr = nums[i]

    let [start, end] = [i + 1, len - 1]

    while (start < end) {
      let sum = curr + nums[start] + nums[end]

      if (Math.abs(sum - target) < offset) {
        offset = Math.abs(sum - target)
        ans = sum
      }

      if (sum - target < 0) {
        start++
      } else if (sum - target > 0) {
        end--
      } else {
        ans = sum
        return ans
      }

    }
  }

  return ans
};


// nums = [-1,2，1，-4], 和 target = 1.

console.log(
  threeSumClosest([-1, 2, 1, -4], 1)
)
