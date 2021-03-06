var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  if (arguments.length > 0) {
    this.args = arguments[0];
  }
};

Queue.prototype.enqueue = function(value) {
  var keys = Object.keys(this);
  var nextKey = keys.length ? keys[keys.length - 1] + 1 : 0;
  this[nextKey] = value;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this);
  var deletedValue = this[keys[0]];
  delete this[keys[0]];
  return deletedValue;
};

Queue.prototype.size = function() {
  return Object.keys(this).length;
};

