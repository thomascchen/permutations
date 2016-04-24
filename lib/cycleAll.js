exports.cycleAll = function(array) {
  var n = array.length;
  var permutations = [];

  for (var i = 0; i < n; i++) {
    var nextCycle = exports.cycleElement(array, i)
    nextCycle.shift();
    exports.flatPush(permutations, nextCycle);
  }

  permutations.push(array);
  return exports.uniq(permutations);
};