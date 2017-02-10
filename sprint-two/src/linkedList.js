var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.tail = new Node(value);
    if(list.head === null) {
      list.head = list.tail;
    } else {
      list.head.next = list.tail.value;
    }
  };

  list.removeHead = function() {
    var valueToBeDeleted = list.head.value;
    list.head.value = list.head.next;
    list.head.next = null;
    return valueToBeDeleted;
  };

  list.contains = function(target) {
    for(var key in list.head) {
      if(list.head[key] === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
