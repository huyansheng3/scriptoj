class Stack {
  constructor() {
    // 使用 Array 保存栈数据
    this.stack = [];
  }

  // 压栈
  push(value) {
    this.stack.push(value);
  }

  // 出栈，栈为空时返回 undefined
  pop() {
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  empty() {
    return this.size() === 0;
  }
}

const convertToReversePolish = (infixExpression) => {
  const operators = ['+', '-', '*', '/', '(', ')'];

  let stack = new Stack();
  let ret = [];


  for(let i =0, len=infixExpression.length; i<len; i++) {
    const expression = infixExpression[i]
    if(expression === " ") continue;

    if (operators.includes(expression)) {
        // 读取到操作符，输出所有优先级更低的操作符
        while (true) {
          // 栈为空，直接将当前操作符压入栈中，并跳出循环
          if (stack.empty()) {
            stack.push(expression);
            break;
          }

          // `(` 的优先级最高，直接压入栈中，并跳出循环
          if (expression === '(') {
            stack.push(expression);
            break;
          }

          const op = stack.pop();

          // `)` 的优先级最高，只要操作符不为 `(` 则一直输出
          if (expression === ')') {
            if (op !== '(') {
              ret.push(op);
              continue;
            }
            // 跳出循环，不需要输出 `(`
            break;
          }

          // `(` 只在处理 `)` 时出栈
          if (op === '(') {
            stack.push(op);
            stack.push(expression);
            break;
          }

          if (expression === '+' || expression === '-') {
            // `+` 和 `-` 的优先级最低
            // 除非栈顶操作符也为 `+` 和 `-`，否则输出栈顶操作符，并继续
            if (op !== '+' || op !== '-') {
              ret.push(op);
              continue;
            }
          }

          // 比栈顶预算符优先级相同或更低，将操作符压回栈中，中止
          stack.push(op);
          stack.push(expression);
          break;
        }
      } else {
        // 操作数直接输出
        ret.push(expression);
      }
  }


  console.log("stack", stack)

  // 依次弹出栈中剩下的操作符，并输出
  while (!stack.empty()) {
    let op = stack.pop();

    if (op !== '(') {
      ret.push(op);
    }
  }

  return ret.join(' ');
};


// console.log(convertToReversePolish('1 + 1 * 2'));  // => 1 1 2 * +
// console.log(convertToReversePolish('(1 + 1) * 2')); // => 1 1 + 2 *
console.log(convertToReversePolish('1 + (2 * 3 + (4 * 5 + 6) * 7)'));
// => 1 2 3 * + 4 5 * 6 + 7 * +
// stack:  + ( * + (
// 1 2 3 4
const evalReversePolish = (suffixExpression) => {
  const operators = ['+', '-', '*', '/'];

  let stack = new Stack();

  // 切割表达式，模拟读取
  suffixExpression.replace(/([\d+|\+|\-|\*|\/])/g, (_, expression) => {
    if (operators.includes(expression)) {
      const val1 = stack.pop(),
            val2 = stack.pop();

      switch (expression) {
        case '+':
          stack.push(val1 + val2);
          break;
        case '-':
          stack.push(val2 - val1);
          break;
        case '*':
          stack.push(val1 * val2);
          break;
        case '/':
          stack.push(val2 / val1);
          break
      }
    } else {
      // 操作值直接压入栈中
      stack.push(parseInt(expression));
    }
  });

  return stack.pop();
};


// console.log(
//   evalReversePolish(
//     convertToReversePolish('1 + 1 * 2')));  // => 3
// console.log(
//   evalReversePolish(
//     convertToReversePolish('(1 + 1) * 2')));  // => 4
console.log(
  evalReversePolish(
    convertToReversePolish('1 + (2 * 3 + (4 * 5 + 6) * 7)')));  // => 189
