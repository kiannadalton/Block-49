// Question 2
// Create a Node class in JavaScript to build parts of a binary tree. Then, make an 'isSameTree' function. This function checks two binary trees and tells if they are the same or not. Test your function by making two binary trees and comparing them. For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise.

class Node {
  // This is the binary tree data structure
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function checkSameTree(a, b) {
  // this is a function to check if the trees are same
  let queue = [];
  queue.push(a);
  queue.push(b);

  while (queue.length > 0) {
    let node1 = queue.shift();
    let node2 = queue.shift(); // One of the nodes is null

    if (!node1 && !node2) {
      continue;
    }

    if (!node1 || !node2 || node1.value !== node2.value) {
      return false;
    }

    queue.push(node1.left);
    queue.push(node2.left);

    queue.push(node1.right);
    queue.push(node2.right);
  }

  return true;
}

let a = new Node(1, new Node(2), new Node(3));
let b = new Node(1, new Node(2), new Node(3));
console.log(checkSameTree(a, b)); // This should print 'true'

a = new Node(1, null, new Node(2));
b = new Node(1, new Node(2));
console.log(checkSameTree(a, b)); // This should print 'false'

// outputs work
