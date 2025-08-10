class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insrt(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      }
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
        } else {
          temp = temp.right;
        }
      }
    }
  }

  includes(value) {
    if (!this.root) {
      return false;
    }

    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }

  bfs() {
    // let current = this.root;
    // let queue = []
    // let data = []

    // queue.push(current)
    // while(queue.length){
    //     current = queue.shift()
    //     data.push(current.value)

    //     if(current.left) queue.push(current.left)
    //     if(current.right) queue.push(current.right)
    // }

    // return data;

    let current = this.root;
    let data = [];
    let queue = [];

    queue.push(current);
    while (queue.length) {
      let a = queue.shift();
      data.push(a.value);

      if (a.left) queue.push(a.left);
      if (a.right) queue.push(a.right);
    }
    return data;
  }

  dfsPreOrder(node = this.root, data = []) {
    // if(node === null) return data;
    // data.push(node.value);

    // if(node.left) this.dfsPreOrder(node.left,data)
    // if(node.right) this.dfsPreOrder(node.right, data)

    // return data;

    if (node === null) return data;
    data.push(node.value);

    if (node.left) this.dfsPreOrder(node.left, data);
    if (node.right) this.dfsPreOrder(node.right, data);

    return data;
  }

  dfsPostOrder(node = this.root, data = []) {
    if (node === null) return data;

    if (node.left) this.dfsPostOrder(node.left, data);
    if (node.right) this.dfsPostOrder(node.right, data);
    data.push(node.value);
    return data;
  }
}

const tree = new BST();
tree.insrt(2);
tree.insrt(1);
tree.insrt(4);
tree.insrt(6);
tree.insrt(7);
console.log(tree);
console.log(tree.includes(7));
console.log(tree.includes(10));
console.log(tree.bfs());
