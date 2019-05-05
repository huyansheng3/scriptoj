// let i = 0;
// var countAndSay = function(n, list = ["", "1"]) {
//   if (list[n]) return list[n];
//   else {
//     const prev = countAndSay(n - 1, list);
//     let prevItem = [],
//       result = [];
//     for (let i = 0, len = prev.length; i < len; i++) {
//       if (!prevItem.length) {
//         prevItem = [prev[i]];
//       } else if (prevItem[0] === prev[i]) {
//         prevItem.push(prev[i]);
//       } else if (prevItem[0] !== prev[i]) {
//         result.push(prevItem.slice());
//         prevItem = [prev[i]];
//       }
//       if (i === len - 1) {
//         result.push(prevItem.slice());
//       }
//     }

//     let ret = "";
//     result.forEach(item => {
//       ret += `${item.length}${item[0]}`;
//     });
//     i++;

//     list[n] = ret;

//     return ret;
//   }
// };

// console.time("countAndSay");
// console.log(countAndSay(30));
// console.timeEnd("countAndSay");
// console.log(i);

// let list = ["", "1"];
// let i = 0;
// function countAndSay(n) {
//   if (list[n]) return list[n];
//   else {
//     i++;
//     const prev = countAndSay(n - 1);
//     let prevItem = [],
//       result = [];
//     for (let i = 0, len = prev.length; i < len; i++) {
//       if (!prevItem.length) {
//         prevItem = [prev[i]];
//       } else if (prevItem[0] === prev[i]) {
//         prevItem.push(prev[i]);
//       } else if (prevItem[0] !== prev[i]) {
//         result.push(prevItem);
//         prevItem = [prev[i]];
//       }
//       if (i === len - 1) {
//         result.push(prevItem);
//       }
//     }

//     let ret = "";
//     result.forEach(item => {
//       ret += `${item.length}${item[0]}`;
//     });

//     list[n] = ret;

//     return ret;
//   }
// }

// console.time("countAndSay");
// countAndSay(30);
// // console.log(countAndSay(30));
// console.log(i);
// console.timeEnd("countAndSay");

let x = 0;
var countAndSay = function(n, list = ["0", "1"]) {
  if (list[n]) return list[n];
  else {
    x++;
    const prev = countAndSay(n - 1, list);
    let ret = "",
      curr = -1,
      count = 0;
    for (let i = 0, len = prev.length; i < len; i++) {
      if (curr === -1 || curr === prev[i]) {
        curr = prev[i];
        count++;
      } else {
        ret += `${count}${curr}`;
        curr = prev[i];
        count = 1;
      }
      if (i === len - 1) {
        ret += `${count}${curr}`;
      }
    }
    list[n] = ret;
    return ret;
  }
};

console.time("countAndSay");
console.log(countAndSay(30));
console.log(x);
console.timeEnd("countAndSay");
