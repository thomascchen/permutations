// Shift array element at index x to every possible position from current to end

function cycleToEnd(array, indexToCycle) {
  var i = indexToCycle
  var length = array.length;
  var permutations = [array];

  while (i < length - 1) {
    var currentPermutation = lastElement(permutations);
    var nextPermutation = swapElements(currentPermutation, i, i + 1);
    permutations.push(nextPermutation);
    i += 1;
  }
  return permutations;
};