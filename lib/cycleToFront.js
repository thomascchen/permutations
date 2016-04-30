// Shift array element at index x to every possible position toward front

function cycleToFront(array, indexToCycle) {
  var i = indexToCycle
  var permutations = [array];

  while (i > 0) {
    var currentPermutation = lastElement(permutations);
    var nextPermutation = swapElements(currentPermutation, i, i - 1);
    permutations.push(nextPermutation);
    i -= 1;
  }
  return permutations;
};