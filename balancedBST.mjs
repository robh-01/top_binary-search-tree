// javascript program to generate a balanced binary search tree from an array;

import {
  buildTree,
  insertNode,
  deleteNode,
  findNode,
  preOrderTraversal,
  inOrderTraversal,
  postOrderTraversal,
} from "./bstOperations.js";

import { prettyPrint } from "./utilityFunctions.js";

import { sortArray, removeRedundancy } from "./utilityFunctions.js"; //removing this doesnot affect the working of the funcs below
//it is to test if the working is correct or not

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
    this.root = deleteNode(this.root, value);
    return this.root;
  }

  find(value) {
    let node = findNode(this.root, value);
    return node;
  }

  levelOrder(callback) {
    //if callback missing or not a function, throw error.
    if (typeof callback !== "function") {
      throw new Error("Callback function is required!");
    }

    //if the tree is empty, do nothing
    if (this.root === null) return;

    //queue to enqueue and dequeue nodes
    const queue = [this.root];

    //add the discoverd left and right children to the queue and call the callback on the node
    while (queue.length > 0) {
      let currentNode = queue.shift(); //dequeue the front node in the queue
      callback(currentNode); //call the callback on the current node

      //enqueue the left and right child if they exist
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  inOrder(callback) {
    //if callback is missing or not a function, throw error
    if (typeof callback !== "function")
      throw new Error("Callback function is required");

    //if the tree is empty, handle that
    if (this.root === null) return;

    inOrderTraversal(this.root, callback);
  }

  preOrder(callback) {
    //if callback is missing or not a function, throw error
    if (typeof callback !== "function")
      throw new Error("Callback function is required");

    //if the tree is empty, handle that
    if (this.root === null) return;

    preOrderTraversal(this.root, callback);
  }

  postOrder(callback) {
    //if callback is missing or not a function, throw error
    if (typeof callback !== "function")
      throw new Error("Callback function is required");

    //if the tree is empty, handle that
    if (this.root === null) return;

    postOrderTraversal(this.root, callback);
  }
}

let arr1 = [1, 4, 2, 3, 5, 5, 2, 6, 9, 18];
console.log(sortArray(removeRedundancy(arr1)));

let tree1 = new Tree(arr1);
console.log(prettyPrint(tree1.root));

console.log("level order:");
tree1.levelOrder(printNodeValues);

console.log("pre order:");
tree1.preOrder(printNodeValues);

console.log("in order:");
tree1.inOrder(printNodeValues);

console.log("post order:");
tree1.postOrder(printNodeValues);

function printNodeValues(node) {
  console.log(node.data);
}
