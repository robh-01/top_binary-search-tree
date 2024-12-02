import { sortArray, removeRedundancy } from "./utilityFunctions.js";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//function that creates a balanced binary search tree from an unsorted/sorted array removing redundant elements.
function buildTree(arr) {
  //remove redundancy and sort the array in ascending order
  const sortedArray = sortArray(removeRedundancy(arr));
  return sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
}

function sortedArrayToBST(arr, start, end) {
  if (start > end) return null;

  // Find the middle element
  let mid = start + Math.floor((end - start) / 2);

  // Create root node
  let root = new Node(arr[mid]);

  // Create left subtree
  root.left = sortedArrayToBST(arr, start, mid - 1);

  // Create right subtree
  root.right = sortedArrayToBST(arr, mid + 1, end);

  return root;
}

//function to insert the value to the given node (when passed root node of a tree as 'node' argument
// in this function the root node should be checked beforeHand if it is empty or not)
function insertNode(node, value) {
  //duplicate not allowed
  if (node.data == value) {
    return node;
  }

  if (value < node.data) {
    if (node.left == null) {
      node.left = new Node(value);
    } else {
      insertNode(node.left, value);
    }
  } else if (value > node.data) {
    if (node.right == null) {
      node.right = new Node(value);
    } else {
      insertNode(node.right, value);
    }
  }
  return node;
}

//function that deletes the given value/key/node from the given root node.
//first arg is the is the root node to from which the key(second argument is to be deleted)
function deleteNode(rootNode, value) {
  //base case
  if (rootNode === null) {
    return rootNode;
  }

  // If the value/key to be deleted is in
  // one of the subtree
  if (rootNode.data > value) {
    rootNode.left = deleteNode(rootNode.left, value);
  } else if (rootNode.data < value) {
    rootNode.right = deleteNode(rootNode.right, value);
  } else {
    //If the rootNode matches with the key

    // cases when rootNode has 0 or only one children
    //only right child
    if (rootNode.left === null) {
      return rootNode.right;
    }

    //only left child
    if (rootNode.right === null) {
      return rootNode.left;
    }

    //when both children are present
    let successorNode = getSuccessor(rootNode);
    rootNode.data = successorNode.data;
    rootNode.right = deleteNode(rootNode.right, successorNode.data);
  }

  return rootNode;
}

// Note that it is not a generic inorder successor
// function. It mainly works when the right child
// is not empty, which is  the case we need in BST
// delete.
function getSuccessor(curr) {
  curr = curr.right;
  while (curr !== null && curr.left !== null) {
    curr = curr.left;
  }
  return curr;
}

// function that returns the node with the passed value
function findNode(rootNode, value) {
  if (rootNode == null) {
    return null;
  }

  if (rootNode.data < value) {
    return findNode(rootNode.right, value);
  } else if (rootNode.data > value) {
    return findNode(rootNode.left, value);
  } else {
    return rootNode;
  }
}

function preOrderTraversal(node, callback) {
  callback(node);
  if (node.left) preOrderTraversal(node.left, callback);
  if (node.right) preOrderTraversal(node.right, callback);
}

function inOrderTraversal(node, callback) {
  if (node.left) inOrderTraversal(node.left, callback);
  callback(node);
  if (node.right) inOrderTraversal(node.right, callback);
}

function postOrderTraversal(node, callback) {
  if (node.left) postOrderTraversal(node.left, callback);
  if (node.right) postOrderTraversal(node.right, callback);
  callback(node);
}

function findHeight(node) {
  //base case literally, if there are no children i.e if the node is a leaf height = 0
  if (node.right === null && node.left === null) return 0;
  let leftHeight = 0,
    rightHeight = 0;
  if (node.right) {
    rightHeight = 1 + findHeight(node.right);
  }
  if (node.left) {
    leftHeight = 1 + findHeight(node.left);
  }

  return rightHeight > leftHeight ? rightHeight : leftHeight;
}

function findDepth(rootNode, nodeValue) {
  if (rootNode == null) {
    return null;
  }

  if (rootNode.data < nodeValue) {
    return 1 + findDepth(rootNode.right, nodeValue);
  } else if (rootNode.data > nodeValue) {
    return 1 + findDepth(rootNode.left, nodeValue);
  } else {
    return 0;
  }
}


export {
  buildTree,
  insertNode,
  deleteNode,
  findNode,
  inOrderTraversal,
  preOrderTraversal,
  postOrderTraversal,
  findHeight,
  findDepth,
};
