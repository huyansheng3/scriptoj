/**
 * https://scriptoj.com/problems/81
 * @param {*} OriginalClass
 */
const singletonify = OriginalClass => {
  let singleton = new OriginalClass()
  class NewClass extends OriginalClass {
    constructor() {
      super()
      return singleton
    }
  }
  Object.setPrototypeOf(singleton, NewClass.prototype)
  return NewClass
}

class A {}
const SingleA = singletonify(A)

const a1 = new SingleA()
const a2 = new SingleA()
const a3 = new SingleA()

console.log(a1 === a2) // => true
console.log(a2 === a3) // => true
