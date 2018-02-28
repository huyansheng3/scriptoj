/**
 * {
  x: 100,
  y: 100,
  width: 150,
  height: 250
}
 * 它表示一个宽为 150 高为 250 的矩形在页面上的 (100, 100) 的位置。
 * 请你完成一个函数 isOverlap 可以接受两个矩形作为参数，判断这两个矩形在页面上是否重叠。例如：
 * @param {*} rect1 
 * @param {*} rect2 
 */
const isOverlap = (rect1, rect2) => {
  if (typeof rect1 !== 'object' || typeof rect2 !== 'object')
    throw new Error('传的参数不是两个对象')
  // rect1 在 rect2的左边，右边 上边 下边时，满足任意条件肯定不会重叠
  // 还有包含的情况
  if (
    (rect1.x + rect1.width < rect2.x ||
      rect1.x > rect2.x + rect2.width )||
    (rect1.y + rect1.heigh < rect2.y ||
    rect1.y > rect2.y + rect2.width)
  ) {
    return false
  } else return true

  let r1 = rect1.x > rect2.x + rect2.width || rect1.y > rect2.y + rect2.height
  let r2 = rect2.x > rect1.x + rect1.width || rect2.y > rect1.y + rect1.height
  return !(r1 || r2);
  
}

const rect1 = { x: 100, y: 100, width: 100, height: 100 }
const rect2 = { x: 150, y: 150, width: 100, height: 100 }

const rect3 = {
  x: 108.40934086955936,
  y: 9.194240129866538,
  width: 491.8560509639804,
  height: 313.07577931558194,
}
const rect4 = {
  x: 526.8738110702262,
  y: 470.46672580786253,
  width: 417.7454905338923,
  height: 232.15080695706632,
}
//，应该输出 false 而你的是 true
console.log(isOverlap(rect3, rect4))
