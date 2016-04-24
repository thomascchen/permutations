// Shift array element at index x to every possible position toward front
exports.cycleToFront = function(array, indexToCycle) {
  var i = indexToCycle
  var permutations = [array];

  while (i > 0) {
    var currentPermutation = exports.lastElement(permutations);
    var nextPermutation = exports.swapElements(currentPermutation, i, i - 1);
    permutations.push(nextPermutation);
    i -= 1;
  }
  return permutations;
};