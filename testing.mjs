import { Tree } from "./balancedBST.mjs";
import { prettyPrint, sortArray } from "./utilityFunctions.js";

function generateRandomNumbersArrayBelow100(length) {
  const randomNumbers = [];
  for (let i = 0; i < length; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }
  return randomNumbers;
}

const randomArray = generateRandomNumbersArrayBelow100(7); //generating an array of 7 random numbers

//console logging the array by sorting, so that later it looks
//good in the console
console.log(sortArray(randomArray));

let tree1 = new Tree(randomArray); //creating a balanced binary search tree from the Array
prettyPrint(tree1.root); // visualizing the tree
console.log(tree1.isBalanced()); //checking if its balanced

//pre order traversal
console.log("Pre Order:");
tree1.preOrder((node) => {
  console.log(node.data);
});

// in order traversal
console.log("In Order:");
tree1.inOrder((node) => {
  console.log(node.data);
});

// post order traversal
console.log("Post Order:");
tree1.postOrder((node) => {
  console.log(node.data);
});

//imbalancing the tree by inserting values greater than 100
tree1.insert(101);
tree1.insert(1300);
tree1.insert(300);
tree1.insert(169);
tree1.insert(420);
console.log("After inserting numbers greater than 100: ");
prettyPrint(tree1.root);
console.log(tree1.isBalanced());

//rebalancing the tree
tree1.rebalance();
console.log("After Rebalancing the tree: ");
prettyPrint(tree1.root);
console.log(tree1.isBalanced());

//Again performing all three traversal in the rebalanced tree
//pre order traversal
console.log("Pre Order:");
tree1.preOrder((node) => {
  console.log(node.data);
});

// in order traversal
console.log("In Order:");
tree1.inOrder((node) => {
  console.log(node.data);
});

// post order traversal
console.log("Post Order:");
tree1.postOrder((node) => {
  console.log(node.data);
});
