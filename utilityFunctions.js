// function that sorts the given array in ascending and return the
// sorted array
function sortArray(arr, start, end) {
  start = start ? start : 0;
  end = end ? end : arr.length - 1;

  if (start == end) return [arr[0]];

  //break the array in two halves
  let mid = Math.floor(end / 2);
  let leftHalfArray = arr.slice(start, mid + 1);
  let rightHalfArray = arr.slice(mid + 1);

  // call the sorted array on both halves;
  let sortedLeftHalfArray = sortArray(leftHalfArray);
  let sortedRightHalfArray = sortArray(rightHalfArray);

  // merge both sorted array into one;
  let mergedArray = merge(sortedLeftHalfArray, sortedRightHalfArray);

  //return the merged array
  return mergedArray;
}

// function to merge two sorted array and return the merged, sorted array.
function merge(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0,
    k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray[k++] = arr1[i++];
    } else {
      mergedArray[k++] = arr2[j++];
    }
  }

  //if some elements are remaining in any of the array, copy them to mergedArray
  for (; i < arr1.length; i++) {
    mergedArray[k++] = arr1[i];
  }
  for (; j < arr2.length; j++) {
    mergedArray[k++] = arr2[j];
  }

  return mergedArray;
}

//function that shows the binary tree in tree like structure in console
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

export { sortArray, prettyPrint };
