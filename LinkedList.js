class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
      return this;
    }
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) {
      return null;
    }
    let firstNode = this.head;
    let nextNode = this.head.next;
    this.head = nextNode;
    this.length--;
    firstNode.next = null;
    if (this.length === 0) {
      this.tail = null;
    }
    return firstNode;
  }
  getFirstElement() {
    return this.head;
  }
  getLastElement() {
    if (!this.head) {
      return null;
    }
    // return this.tail;
    // let temp = this.head;
    // let prev = this.head;
    // while (temp.next) {
    //   prev = temp;
    //   temp = prev.next;
    // }
    // return temp;

    let temp = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }
  get(index) {
    if (!this.head) {
      return null;
    }

    let temp = this.head;
    let i = 0;
    while (temp) {
      if (i === index) {
        return temp;
      }
      temp = temp.next;
      i++;
    }
    return null;
  }
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index == 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    if (index > this.length) {
      return null;
    }
    let newNode = new Node(value);
    let prevElement = this.get(index - 1);
    prevElement.next = newNode;
    newNode.next = prevElement.next;
    this.length++;
    return true;
  }
  size(){
    // return this.length;
    if(!this.head){
      return 0;
    }
    let counter = 0;
    let temp = this.head;
    while(temp){
      counter++;
      temp = temp.next;
    }
    return counter
  }
  clear(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2).push(3);
// myLinkedList.pop();
console.log(myLinkedList);
console.log("---");
console.log(myLinkedList.insert(0, 10));

console.log("----");
console.log(myLinkedList)

console.log("----")
console.log(myLinkedList.get(2));

console.log("---")
console.log(myLinkedList.size())

