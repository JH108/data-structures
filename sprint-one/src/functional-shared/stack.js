var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.sizeA = 0;
  newStack.lastKey = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};
var stackMethods = {};


stackMethods.push = function(value) {
  var keys = Object.keys(this);
  var nextKey = this.lastKey ? this.lastKey + 1 : 1;
  this[nextKey] = value;
  this.sizeA++;
  this.lastKey = nextKey;
};


stackMethods.pop = function() {
  if (this.sizeA) {
    var keys = Object.keys(this);

    var deletedValue = this[this.lastKey];
    delete this[this.lastKey];
    this.sizeA--;
    this.lastKey--;
    return deletedValue;
  }
};

stackMethods.size = function() {
  return this.sizeA;
};