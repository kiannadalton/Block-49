// Question 1
// Begin by defining a Node class for the individual nodes in the binary tree, each containing a value and pointers for the left and right nodes. Following this, write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence. To test your solution, establish a binary tree containing nodes with integer values [1,2,3,4,5]. Invoke the inorder function to check the output [4,2,5,1,3]. 


class Node {
  // This is the binary tree data structure
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function inorder(root) {
  //Creating a function that goes inorder
  let stack = [];
  let currentValue = root;

  while (currentValue !== null || stack.length > 0) {
    while (currentValue !== null) {
      stack.push(currentValue);
      currentValue = currentValue.left;
    }

    currentValue = stack.pop();
    console.log(currentValue.data);

    currentValue = currentValue.right;
  }
}

// This creates the tree and it calls the 'inorder' function
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
inorder(root);

// output works