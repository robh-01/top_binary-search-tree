import { sortArray } from "./utilityFunctions.js";

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

// function that removes redundancy for the array
// and returns the array with no redundant elements
function removeRedundancy(arr) {
  const seen = {}; // an object to track seen elements
  const arrayWithNoRedundantElement = []; // Final result array

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      // Check if the element is not already tracked
      seen[arr[i]] = true; // Mark it as seen
      arrayWithNoRedundantElement.push(arr[i]); // Add to the result array
    }
  }

  return arrayWithNoRedundantElement;
}

export { buildTree };
