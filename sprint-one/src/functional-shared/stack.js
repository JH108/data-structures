var Stack = function() {
  var newStack = {};
  newStack._storage = {};
  newStack._start = 0;
  newStack._end = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._end++] = value;
};

stackMethods.pop = function() {
  var deletedValue = this._storage[this._end - 1];
  if(this.size()) {
    delete this._storage[this._end - 1];
    this._end--;
  }
  return deletedValue;
};

stackMethods.size = function() {
  return this._end - this._start;
};