function sleep(second) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, second * 1000)
  })
}

function CodingMan(name) {
  function Man(name) {
    setTimeout(() => {
      console.log('Hi! there is %s!', name)
    }, 0)
  }

  // async await 方法执行默认是丢出去一个 promise。。。。你强行 return this并没有什么用的
  // Man.prototype.sleep = async function(second) {
  //   debugger
  //   await sleep(second)
  //   debugger
  //   console.log(`Wake up after ${second}`)
  //   debugger
  //   return this
  // }

  Man.prototype.sleep = function(time) {
    let curTime = new Date()
    let delay = time * 1000
    setTimeout(() => {
      // 异步
      while (new Date() - curTime < delay) {} // 阻塞当前主线程
      console.log(`Wake up after ${time}`)
    }, 0)
    return this
  }

  Man.prototype.sleepFirst = function(time) {
    let curTime = new Date()
    let delay = time * 1000
    while (new Date() - curTime < delay) {} // 阻塞当前主线程
    console.log(`Wake up after ${time}`)
    return this
  }

  Man.prototype.eat = function(food) {
    setTimeout(() => {
      console.log(`Eat ${food}~~`)
    }, 0)
    return this
  }

  return new Man()
}

// 出这个题目的人脑子有屎，哪有把单线程强行占住的啊！
// CodingMan('Peter')
//   .sleep(3)
//   .eat('dinner')

async function testSleep() {
  console.log('开始睡')
  await sleep(3)
  console.log('睡完了')
}

testSleep()
console.log('dasdsads')
