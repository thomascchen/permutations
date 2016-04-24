// Shift array element at index x to every possible position
exports.cycleElement = function(array, x) {
  var permutations1 = exports.cycleToEnd(array, x);
  var permutations2 = exports.cycleToFront(array, x);
  permutations2.shift();
  var allPermutations = permutations1.concat(permutations2);
  return exports.uniq(allPermutations);
}