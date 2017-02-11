var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
//arr0          1[0]            1[1]
//[ [], [['cat', 'meow'], ['dog', 'bark']] ]

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  if (currentBucket) {
    currentBucket.push([k, v]);
    return;
  }
  this._storage.set(index, [[k, v]]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  var storageBucket = this._storage.get(index);
// If there are collisions, we save key,value pairs with same hashkey (returned by hash fn)
// on same index but as nested array.
  storageBucket.forEach(function(bucket){
    if (bucket[0] === k) {
      result = bucket[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var indexToDelete = getIndexBelowMaxForKey(k, this._limit);

  this._storage.each(function(currentVal, index, storage) {       // check which element(currentVal) in storage to delete
    if (index === indexToDelete) {                                // currentVal is same as arr[1]
      currentVal.forEach(function(val, i, arr){                   // val is same as arr[1][0]
        if (val[0] === k) {                                       // Check which inner array in arr[1]
          arr.splice(i, 1);
        }
      });
    }
  });
};

// if tuples / storage.length > .75 _limit * 2
// if tuples / storage.length < .25 _limit / 2

/*
 * Complexity: What is the time complexity of the above functions?
 */


