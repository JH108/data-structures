var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

// tree.children[0].addChild(6);
// expect(tree.children[0].children[0].value).to.equal(6);

var treeMethods = {};

treeMethods.addChild = function(value) {
  // if (this.children === undefined) {
  //   this.children = {};
  // }
  //this.children.push({value: value, children : [], addChild: treeMethods.addChild});
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var targetFound = false;

  function recurseOverChildren(node) {
    for(var i = 0; i < node.length; i++) {
      if(node[i].value === target) {
        targetFound = true;
        return targetFound;
      } else if(node[i].children.length > 0) {
        recurseOverChildren(node[i].children);
      }
    }
  }
  recurseOverChildren(this.children);
  return targetFound;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
