// Shift array element at index x to every possible position from current to end
exports.cycleToEnd = function(array, indexToCycle) {
  var i = indexToCycle
  var length = array.length;
  var permutations = [array];

  while (i < length - 1) {
    var currentPermutation = exports.lastElement(permutations);
    var nextPermutation = exports.swapElements(currentPermutation, i, i + 1);
    permutations.push(nextPermutation);
    i += 1;
  }
  return permutations;
};