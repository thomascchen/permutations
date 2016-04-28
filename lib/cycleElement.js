// Shift array element at index x to every possible position
function cycleElement(array, x) {
  var permutations1 = cycleToEnd(array, x);
  var permutations2 = cycleToFront(array, x);
  permutations2.shift();
  var allPermutations = permutations1.concat(permutations2);
  return uniq(allPermutations);
}