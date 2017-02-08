var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    var nextKey = keys.length ? keys[keys.length - 1] + 1 : 0;
    storage[nextKey] = value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var deletedValue = storage[keys[0]];
    delete storage[keys[0]];
    return deletedValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
