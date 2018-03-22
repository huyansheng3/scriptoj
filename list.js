// JavaScript Array.prototype.splice 在插入元素的时候，复杂度是 O(n)，在一些大数据量和嵌套场景下性能还是渣渣
// 链表是个好东西，我们要用！

var arrInsert = [1, 2, 3]
var arrSplice = [1, 2, 3]
var arrList = new LinkedList()
arrList.append(1)
arrList.append(2)
arrList.append(3)

var arrList1 = new LinkedList()
console.log('arrList1.size() : ', arrList1.size())

console.time('insert')
for (var i = 0; i < 10000; i++) {
  arrInsert = insert(2, 5, arrInsert)
}
console.timeEnd('insert')
console.log(arrInsert.length)

console.time('splice')
for (var j = 0; j < 10000; j++) {
  arrSplice.splice(2, 0, 5)
}
console.timeEnd('splice')
console.log(arrInsert.length)

console.time('arrList')
for (var k = 0; k < 10000; k++) {
  arrList.insert(2, 0, 5)
}
console.timeEnd('arrList')
console.log(arrList.size())

function insert(index, e, arr) {
  var curIndex = arr.length

  while (curIndex > index) {
    arr[curIndex--] = arr[curIndex]
  }

  arr[curIndex] = e

  return arr
}

function LinkedList() {
  var Node = function(element) {
    this.element = element
    this.next = null
  }

  var length = 0
  var head = null

  this.append = function(element) {
    var node = new Node(element),
      current

    if (head === null) {
      head = node
    } else {
      current = head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    length++
  }

  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0

      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }

      length++

      return true
    } else {
      return false
    }
  }

  this.getHead = function() {
    return head
  }

  this.size = function() {
    return length
  }
}

// class Node {
//   constructor(element) {
//     this.element = element
//     this.next = null
//   }
// }

// class List {
//   constructor(params) {
//     let length = 0
//     let head = null
//   }
//   insert(start, deleteCount, ...items) {}

//   append(node) {}

//   size() {
//     return this.length
//   }

//   getHead() {
//     return this.head
//   }
// }
