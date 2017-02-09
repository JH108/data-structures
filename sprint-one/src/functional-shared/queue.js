var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.sizeA = 0;
  newQueue.lastKey = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var keys = Object.keys(this);
  var nextKey = this.lastKey ? this.lastKey + 1 : 1;
  this[nextKey] = value;
  this.sizeA++;
  this.lastKey = nextKey;
};

queueMethods.dequeue = function() {
  if (this.sizeA) {
    var keys = Object.keys(this);
    var deletedValue = this[keys[0]];
    delete this[keys[0]];
    this.sizeA--;
    return deletedValue;
  }
};

queueMethods.size = function() {
  return this.sizeA;
};