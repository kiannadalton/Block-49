// Question 3
// Develop a 'countNodes' function to calculate the total nodes in a binary tree, and build a TreeNode class for a binary tree in JavaScript. For complete trees, it uses the formula 2^h - 1. Verify the function using a given root tree. For a binary tree input with nodes [10,11,12,13,14,15,16], the 'countNodes' function should yield an output of 7.


class TreeNode {
  // Binary tree data structure
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function countNodes(root) {
  // Creating function to count nodes in a tree
  if (root === null) {
    return 0; // Base case: empty tree has 0 nodes
  }

  let count = 0;
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    count++;

    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }
  return count;
}

// Test the code
let root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(12);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(14);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(16);

console.log(countNodes(root));

//OUTPUT   7

