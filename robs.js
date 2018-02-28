/**
 * 你是一个盗窃专家，某一天晚上你要去盗窃某一条街道的一排房子。这些房子都有相连的防盗系统，如果你把相邻的两家都偷了那么就会触发报警器。
用一个数组来表示这些房子的金钱数量，请你完成 rob 函数，计算出在不触发报警器的情况下最多能偷多少钱。例如
 */
//f(k) = max(f(k – 2) + Ak, f(k – 1))

const rob = nums => {
  let count1 = 0,
    count2 = 0
  nums.forEach((item, index) => {
    if (index % 2 === 0) count1 += item
    else count2 += item
  })
  console.log('count1: ', count1)
  console.log('count2: ', count2)
  return Math.max(count1, count2)
}

console.log(rob([247, 112, 359, 194, 364, 461, 241, 152]))

console.log(rob([1, 2, 3])) // => 4
