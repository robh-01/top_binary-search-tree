// javascript program to generate a balanced binary search tree from an array;

import { buildTree, insertNode } from "./bstOperations.js";
import { prettyPrint } from "./utilityFunctions.js";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  insert(value) {
    //if the tree is empty, create a new node.
    if (this.root == null) {
      this.root = new Node(value);
      return this.root;
    }

    return insertNode(this.root, value);
  }

  delete(value) {
    // if the tree is empty, do nothing
    // if (this.root === null) {
    //   return null;
    // }
    // delNode(this.root, value);
  }
}

let tree1 = new Tree([1, 4, 2, 3, 5, 5, 2, 6, 9, 18]);
console.log(prettyPrint(tree1.root));

tree1.insert(20);
tree1.insert(-1);
console.log(prettyPrint(tree1.root));
