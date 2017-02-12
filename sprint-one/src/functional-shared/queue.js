var Queue = function() {
  var newQueue = {};
  newQueue._storage = {};
  newQueue._start = 0;
  newQueue._end = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._end++] = value;
};

queueMethods.dequeue = function() {
  var deletedValue = this._storage[this._start];
  if(this.size()) {
    delete this._storage[this._start];
    this._start++;
  }
  return deletedValue;
};

queueMethods.size = function() {
  return this._end - this._start;
};