// Question 4
// Find the leftmost value in the last row of a binary tree with distinct node values. Use the TreeNode class, which defines a node's structure. Implement the 'searchBottomLeftValue(root)' function, taking the root of the binary tree as input. This function should return the value of the leftmost node in the last row of the tree. Test your function by using a binary tree with nodes [2,1,3,4,5,6] as input. The 'searchBottomLeftValue(root)' function should then return an output of 6.


class TreeNode {
  // Binary tree data structure
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function searchBottomLeftValue(root) {
  // Creating function to find the bottom leftmost node
  if (!root) return null;
  let queue = [];
  queue.push(root);

  let bottomLeft = root.val;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (i === 0) bottomLeft = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return bottomLeft;
}

let root = new TreeNode(2);
root.right = new TreeNode(3);
root.left = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.left.left = new TreeNode(6);
console.log(searchBottomLeftValue(root));

//OUTPUT 6
