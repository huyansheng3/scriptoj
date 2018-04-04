// Promise._all([
//   a,
//   b,
//   c
// ]).then([aResult, bResult, cResult]=>{

// })

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2')
  }, 2000)

  // 用于测试出错
  // setTimeout(() => {
  //   reject('p2 出错了')
  // }, 1200)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3')
  }, 3000)
})

// 上面先创建三个 promise 用于测试

function all(arr = []) {
  return new Promise((resolve, reject) => {
    const allResult = [],
      len = arr.length
    let count = 0

    // 遍历调用
    arr.forEach((p, index) => {
      p
        .then(result => {
          // 每 resolve 掉一个 promise 就 +1
          count = count + 1
          allResult[index] = result
          if (count === len) {
            // 发现所有的 promise 都 resolve掉了，此时 resolve allResult
            resolve(allResult)
          }
        })
        .catch(error => {
          // 任意有一个出错就 reject 掉
          reject(error)
        })
    })
  })
}

console.time('all')
console.time('allThen')
console.time('allCatch')
all([p1, p2, p3])
  .then(result => {
    console.log(result)
    console.timeEnd('allThen')
  })
  .catch(error => {
    console.log(error)
    console.timeEnd('allCatch')
  })
console.timeEnd('all')

// 不出错时的结果，消耗时间以最长的一个为准
// all: 0.352ms
// [ 'p1', 'p2', 'p3' ]
// allThen: 3007.658ms

// 出错时的结果，啥时候出错就啥时候结束了。
// all: 0.203ms
// p2 出错了
// allCatch: 1202.859ms
