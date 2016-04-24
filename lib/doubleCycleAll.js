exports.doubleCycleAll = function(array) {
  var permutations1 = exports.cycleAll(array);
  var permutations2 = exports.cycleAll(exports.reverse(array));

  return exports.uniq(permutations1.concat(permutations2));
};