class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
 
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
 
  insert(value) {
    if (typeof value === 'number' && !isNaN(value)) {
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        var current = this.root;
        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              current.left = new Node(value);
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          } else {
            return "duplicate!";
          }
        }
      }
    } else
      return "Please insert a number";
  }
 
  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) return;
 
    let current = this.root;
    let parent = null;
 
    while (current.right) {
      parent = current;
      current = current.right;
    }
 
    if (current.left) {
      current = current.left;
      while (current.right) current = current.right;
      return current.value;
    }
 
    return parent.value;
  }
}