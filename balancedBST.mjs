// javascript program to generate a balanced binary search tree from an array;

import { buildTree } from "./bstOperations.js/index.js";
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

    //Helper function to recursively insert
    const insertNode = (node) => {
      //duplicate not allowed
      if (node.value == value) {
        return node;
      }

      if (value < node.data) {
        if (node.left == null) {
          node.left = new Node(value);
        } else {
          insertNode(node.left);
        }
      } else if (value > node.data) {
        if (node.right == null) {
          node.right = new Node(value);
        } else {
          insertNode(node.right);
        }
      }
      return node;
    };

    return insertNode(this.root);
  }

  delete(value) {
    // if the tree is empty, do nothing
    if(this.root === null) {
      return;
    }


  }
}

let tree1 = new Tree([1, 4, 2, 3, 5, 5, 2, 6, 9, 18]);
console.log(prettyPrint(tree1.root));

tree1.insert(20);
tree1.insert(-1);
console.log(prettyPrint(tree1.root));
