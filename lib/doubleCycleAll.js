function doubleCycleAll(array) {
  var permutations1 = cycleAll(array);
  var permutations2 = cycleAll(reverse(array));

  return uniq(permutations1.concat(permutations2));
};