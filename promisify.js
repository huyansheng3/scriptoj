const fs = require('fs')

// fs.readFile('./robs.js', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

const readFilePromise = promisify(fs.readFile)
readFilePromise('./robs.js', 'utf-8')
  .then(data => {
    console.log(data)
    // Do something with `stats`
  })
  .catch(error => {
    console.log(error)
    // Handle the error.
  })

function promisify(fn) {
  return function(...args) {
    let context = this
    return new Promise((resolve, reject) => {
      fn.apply(
        context,
        args.concat((error, ...result) => {
          if (error) {
            reject(error)
          } else {
            resolve(...result)
          }
        })
      )
    })
  }
}
