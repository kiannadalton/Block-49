// Question 2
// Create a Node class in JavaScript to build parts of a binary tree. Then, make an 'isSameTree' function. This function checks two binary trees and tells if they are the same or not. Test your function by making two binary trees and comparing them. For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise. 


class Node {
  // Binary tree data structure
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSameTree(p, q) {
  // Creating function to check if the trees are same
  let queue = [];
  queue.push(p);
  queue.push(q);

  while (queue.length > 0) {
    let node1 = queue.shift();
    let node2 = queue.shift(); // One of the nodes is null

    if (!node1 && !node2) {
      continue;
    }

    if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }

    queue.push(node1.left);
    queue.push(node2.left);

    queue.push(node1.right);
    queue.push(node2.right);
  }

  return true;
}

// Testing the code:
let p = new Node(1, new Node(2), new Node(3));
let q = new Node(1, new Node(2), new Node(3));
console.log(isSameTree(p, q)); // This should print 'true'

p = new Node(1, new Node(2));
q = new Node(1, null, new Node(2));
console.log(isSameTree(p, q)); // This should print 'false'