var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.push = function(value) {
    var keys = Object.keys(storage);
    var nextKey = keys.length ? keys[keys.length - 1] + 1 : 0;
    storage[nextKey] = value;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var lastKeyValue = storage[keys[keys.length - 1]];
    delete storage[keys[keys.length - 1]];
    return lastKeyValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
