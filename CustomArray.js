class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    const firstElement = this.data[0];

    // re indexing
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }
  delete(index){
    const indexElement = this.data[index];
    for(let i=index;i<this.length;i++){
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length --;
    return indexElement;
  }
}

const myNewArray = new MyArray();
myNewArray.push("apple");
myNewArray.push("litchi");
myNewArray.push("banana");
myNewArray.push("mango");
myNewArray.delete(2);

// console.log(myNewArray);

const a = "123-"
console.log(parseInt(a));

