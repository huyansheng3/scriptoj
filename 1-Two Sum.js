/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let len = nums.length,
    ret = [],
    map = new Map()

  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }

  return ret
};


// nums = [2, 7, 11, 15], target = 9
console.log(twoSum([2, 7, 11, 15], 9));
