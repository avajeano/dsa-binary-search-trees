class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    // insert at the root if the tree is empty
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (val < currentNode.val) { 
        // if there is no next node to the left add the node
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          // if the value is less than the current node insert to the left
        currentNode = currentNode.left;
        } 
      } else if (val > currentNode.val) {
        // if there is no next node to the right add the node
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          // if the value is greater than the current node insert to the right
          currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    const newNode = new Node(val);

    // insert at the root if the tree is empty
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    
    if (val < currentNode.val) {
      // if there is no next node to the left add the node
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return this;
      }
      // if the value is less than the current node insert to the left
      return this.insertRecursively(val, currentNode.left);
    } else {
      // if there is no next node to the right add the node
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return this;
      }
      // if the value is greater than the current node insert to the right
      return this.insertRecursively(val, currentNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // start searching at the root
    let currentNode = this.root;
    let found = false;
    
    // if we found the value at the current node return the current node
    if (val === currentNode.val) return currentNode;

    // until we find the value
    while (currentNode && !found) {
      // if the value is less than the current node we search left
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      // if the value is greater than the current node we search right
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }

    // if value is not found 
    if (!found) return undefined;

    // return current node when value is found
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    // if the tree is empty return undefined
    if (this.root === null) return undefined;

    // search to the left if the value is less than the current node
    if (val < currentNode.val) {
      // if there is nothing to the left the  value is not in the tree
      if (currentNode.left === null) return undefined;
      // keep going to the left until you find it or not
      return this.findRecursively(val, currentNode.left);
      // search to the right if the value is greater than the current node
    } else if (val > currentNode.val) {
      // if there is nothing to the right the value is not in the tree
      if (currentNode.right === null) return undefined;
      // keep going to the right until you find it or not 
      return this.findRecursively(val, currentNode.right);
    }
    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. 
   * “myself, traverse left, traverse right” is “pre-order” */

  dfsPreOrder(currentNode = this.root) {
    let visitedNodes = [];

    function traverse(node) {
    visitedNodes.push(node.val);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
    }

    traverse(currentNode);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. 
   * “traverse left, myself, traverse right” is “in-order” */

  dfsInOrder(currentNode = this.root) {
    let visitedNodes = [];

    function traverse(node) {
      node.left && traverse(node.left);
      visitedNodes.push(node.val);
      node.right && traverse(node.right);
    }

    traverse(currentNode);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. 
   * “traverse left, traverse right, myself” is “post-order”*/

  dfsPostOrder(currentNode = this.root) {
    let visitedNodes = [];

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      visitedNodes.push(node.val);
    }

    traverse(currentNode);
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    // keep track of the visited nodes (queue is first-in-first-out)
    let queue = []; 
    let data = [];

    queue.push(node);
    
    // while there are nodes in the tree add them to the queue
    while (queue.length) {
      // remove the first node from the queue
      node = queue.shift();
      // adding the node to the end of the returned array 
      data.push(node.val);
      // if the current node has a left child add it to the queue
      if (node.left) {
        queue.push(node.left);
      }
      // if the current node has a right child add it to the queue
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
