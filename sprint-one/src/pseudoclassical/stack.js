var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the newyle.

  if (arguments.length > 0) {
    this.args = arguments[0];
  }
};

Stack.prototype.push = function(value) {
  var keys = Object.keys(this);
  var nextKey = keys.length ? keys[keys.length - 1] + 1 : 0;
  this[nextKey] = value;
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this);
  var lastKeyValue = this[keys[keys.length - 1]];
  delete this[keys[keys.length - 1]];
  return lastKeyValue;
};

Stack.prototype.size = function() {
  return Object.keys(this).length;
};
