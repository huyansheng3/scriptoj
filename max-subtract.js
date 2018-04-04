// let max = (a - b) + (a的索引- b的索引); 求a b

let arr = [1, 2, 3, 4, 5, 6] // 最简单的测试数组 最小项1 最大项6

function maxSubtract(arr = []) {
  let max, min

  arr.forEach((value, index) => {
    if (max === undefined) {
      max = value + index
    }
    if (min === undefined) {
      min = value + index
    }
    if (value + index > max) {
      max = value + index
    }
    if (value + index < min) {
      min = value + index
    }
  })

  return {
    max,
    min,
  }
}

console.log(maxSubtract(arr))
