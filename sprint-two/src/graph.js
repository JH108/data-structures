
/* {
  1: [4],
  4: [1 , 5],
  3: []
  5 : [4]
}
*/

// Instantiate a new graph
var Graph = function() {
    this.node = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.node[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.node[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.node[node]) {
    var connectionsToBeDeleted = this.node[node];
    var self = this;
    connectionsToBeDeleted.forEach(function(connection) {
      var connectionIndex = self.node[connection].indexOf(node);
      self.node[connection].splice(connectionIndex, 1);
    });
    delete this.node[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    return this.node[fromNode].indexOf(toNode) > -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.node[fromNode].push(toNode);
  this.node[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var deleteIndexOfToNode = this.node[fromNode].indexOf(toNode);
  var deleteIndexOffromNode = this.node[toNode].indexOf(fromNode);
  this.node[fromNode].splice(deleteIndexOfToNode, 1);
  this.node[toNode].splice(deleteIndexOffromNode, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var keys in this.node) {
    cb(keys);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


