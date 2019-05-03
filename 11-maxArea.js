/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  for (let i = 0, len = height.length; i < len; i++) {
    for (let j = i + 1, len = height.length; j < len; j++) {
      const smaller = height[i] < height[j] ? height[i] : height[j];
      if ((j - i) * smaller > max) {
        max = (j - i) * smaller
      }
    }
  }

  return max
};


var maxArea2 = function (height) {
  let point1 = 0,
    point2 = height.length - 1,
    max = 0

  while (point1 < point2) {
    if (height[point1] < height[point2]) {
      max = (height[point1] * (point2 - point1) > max) ? height[point1] * (point2 - point1) : max
      point1++
    } else {
      max = (height[point2] * (point2 - point1) > max) ? height[point2] * (point2 - point1) : max
      point2--
    }
  }

  return max
};



console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
