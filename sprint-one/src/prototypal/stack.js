var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  // newStack.sizeA = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var keys = Object.keys(this);
  var nextKey = keys.length ? keys[keys.length - 1] + 1 : 0;
  this[nextKey] = value;
};

stackMethods.pop = function() {
  var keys = Object.keys(this);
  var lastKeyValue = this[keys[keys.length - 1]];
  delete this[keys[keys.length - 1]];
  return lastKeyValue;
};

stackMethods.size = function() {
  return Object.keys(this).length;
};

