const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// 非递归
/**
 *
 * @param {*} arr
 * @param {*} des
 * @return {Number} index
 */
function binarySearch1(arr, des) {
  let len = arr.length,
    start = 0,
    end = arr.length,
    mid = Math.floor((start + end) / 2)

  while (start <= end) {
    if (des > arr[mid]) {
      start = mid
      mid = Math.floor((start + end) / 2)
    } else if (des < arr[mid]) {
      end = mid
      mid = Math.floor((start + end) / 2)
    } else {
      return mid
    }
  }

  return -1
}

console.log(binarySearch1(arr, 7)) // 6
