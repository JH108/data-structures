var BinarySearchTree = function(value) {
  var newBST = Object.create(BinarySearchTree.prototype);
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  return newBST;
};

BinarySearchTree.prototype.insert = function(value) {
  var valueInserted = false;
  var insertNode = function() {
    if (valueInserted) {
      return;
    }
    if (value > this.value && this.right === null) {
      this.right = BinarySearchTree(value);
      valueInserted = true;
      return;
    }
    if (value < this.value && this.left === null) {
      this.left = BinarySearchTree(value);
      valueInserted = true;
      return;
    }
    if (value < this.value) {
      var context = this.left;
    } else {
      var context = this.right;
    }
    insertNode.call(context);
  };
  insertNode.call(this);
};


BinarySearchTree.prototype.contains = function(value) {
  var valueFound = false;
  var context;
  var findValue = function() {
    if (value === this.value) {
      valueFound = true;
    }
    if (valueFound) {
      return;
    }
    if (value > this.value) {
      context = this.right;
    } else if (value < this.value) {
      context = this.left;
    } else {
      return;
    }
    findValue.call(context);
  };
  findValue.call(this);
  return valueFound;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  var depthOfLeft = function() {
    if (this.left !== null) {
      callback(this.left.value);
      depthOfLeft.call(this.left);

    } if (this.right !== null) {
      callback(this.right.value);
      depthOfLeft.call(this.right);
    }
    return;
  };
  depthOfLeft.call(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
