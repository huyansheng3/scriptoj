(function () {

  "use strict";

  function Node(element) {
    this.element = element;
    this.next = null;
  }

  function LinkedList() {
    this._head = new Node("This is Head Node.");
    this._size = 0;
  }

  LinkedList.prototype.isEmpty = function () {
    return this._size === 0;
  };

  LinkedList.prototype.size = function () {
    return this._size;
  };

  LinkedList.prototype.getHead = function () {
    return this._head;
  };

  LinkedList.prototype.display = function () {
    var currNode = this.getHead().next;
    while (currNode) {
      console.log(currNode.element);
      currNode = currNode.next;
    }
  };

  LinkedList.prototype.remove = function (item) {
    if (item) {
      var preNode = this.findPre(item);
      if (preNode == null)
        return;
      if (preNode.next !== null) {
        preNode.next = preNode.next.next;
        this._size--;
      }
    }
  };

  LinkedList.prototype.add = function (item) {
    this.insert(item);
  };

  LinkedList.prototype.insert = function (newElement, item) {
    var newNode = new Node(newElement);
    var finder = item ? this.find(item) : null;
    if (!finder) {
      var last = this.findLast();
      last.next = newNode;
    } else {
      newNode.next = finder.next;
      finder.next = newNode;
    }
    this._size++;
  };

  /*********************** Utility Functions ********************************/

  LinkedList.prototype.findLast = function () {
    var currNode = this.getHead();
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  };

  LinkedList.prototype.findPre = function (item) {
    var currNode = this.getHead();
    while (currNode.next !== null && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  };

  LinkedList.prototype.find = function (item) {
    if (item == null)
      return null;
    var currNode = this.getHead();
    while (currNode && currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  };


  function ValuePair(key, value) {
    this.key = key;
    this.value = value;
  }

  ValuePair.prototype.toString = function () {
    return "[" + this.key + ":" + this.value + "]";
  };

  function Hashtable() {
    this.table = Object.create(null);
    this._size = 0;
  }

  Hashtable.prototype.isEmpty = function () {
    return this._size === 0;
  };

  Hashtable.prototype.size = function () {
    return this._size;
  };

  Hashtable.prototype.remove = function (key) {
    var index = hashCode(key);

    if (this.table[index] == null) {
      return false;
    } else {
      var currNode = this.table[index].getHead();
      while (currNode.next) {
        currNode = currNode.next;
        if (currNode.element.key == key) {
          this.table[index].remove(currNode.element);
          this._size--;
          return true;
        }
      }
      return false;
    }
  };

  Hashtable.prototype.get = function (key) {
    var index = hashCode(key);

    if (this.table[index] == null) {
      return null;
    } else {
      var currNode = this.table[index].getHead();
      while (currNode.next) {
        currNode = currNode.next;
        if (currNode.element.key == key) {
          return currNode.element;
        }
      }
      return null;
    }
  };

  Hashtable.prototype.put = function (key, value) {
    var index = hashCode(key);

    if (this.table[index] == null) {
      this.table[index] = new LinkedList();
    }

    var currNode = this.table[index].getHead();
    while (currNode.next) { //key若已经存在,修改value值为新值
      currNode = currNode.next;
      if (currNode.element.key == key) {
        currNode.element.value = value;
        break;
      }
    }

    if (currNode.next == null && currNode.element.value != value) { //key不存在,加入新值.注意边界值
      this.table[index].add(new ValuePair(key, value));
      this._size++;
    }

    return this;
  };

  Hashtable.prototype.display = function () {
    for (var key in this.table) {
      var currNode = this.table[key].getHead();
      while (currNode.next) {
        currNode = currNode.next;
        console.log(currNode.element.toString());
      }
    }
  };


  /*********************** Utility Functions ********************************/

  function hashCode(key) { //霍纳算法,质数取37
    var hashValue = 6011;
    for (var i = 0; i < key.length; i++) {
      hashValue = hashValue * 37 + key.charCodeAt(i);
    }
    return hashValue % 1019;
  }

  module.exports = Hashtable;

})();
