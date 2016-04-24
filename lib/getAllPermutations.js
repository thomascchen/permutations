exports.getAllPermutations = function(array, debugMode) {
  if (array.length <= 1) {
    return array;
  }

  if (array.length === 2) {
    return [array, array.reverse()];
  }

  var possibilities = factorial(array.length);
  var permutations = getPermutations(array);
  console.log(permutations);

  while (permutations.length < possibilities) {
    if (debugMode) {
      console.log(permutations.length);
    }
    array = shuffle(array);
    lib.flatPush(permutations, getPermutations(array));
  }

  if (debugMode) {
    console.log(permutations.length);
    console.log('Success!');
  }
  return permutations;
}