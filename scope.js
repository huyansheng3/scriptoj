function bar() {
  let a = 3
  console.log(a)
  foo()
  return () => {
    console.log(a)
  }
}

function foo() {
  console.log(a) // 输出 2
}

let a = 2
var x = bar()

x()

// https://www.zhihu.com/question/20032419
// https://github.com/mqyqingfeng/Blog/issues/3

// 如何理解词法作用域 ？ 函数可以访问定义在函数外部的变量，而这种结构被称为闭包。由于词法作用域，形成了闭包；而又因为存在闭包，所以 JavaScript 具有词法作用域。

// function 具有 [[Scopes]] 由于保存函数相关的作用域，可以明显看出闭包
