function getAllPermutations(array, debugMode) {
  if (array.length <= 1) {
    return array;
  }

  if (array.length === 2) {
    return [array, array.reverse()];
  }

  var possibilities = factorial(array.length);
  var permutations = getPermutations(array);

  while (uniq(permutations).length < possibilities) {
    if (debugMode) {
      console.log(permutations.length);
    }
    array = shuffle(array);
    flatPush(permutations, getPermutations(array));
  }

  if (debugMode) {
    console.log(permutations.length);
    console.log(possibilities);
    console.log('Success!');
  }

  return uniq(permutations);
}