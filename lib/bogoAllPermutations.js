// Crazy bogo way to get permutations of an array

function bogoAllPermutations(array, debugMode) {
  if (array.length <= 1) {
    return array;
  }

  if (array.length === 2) {
    return [array, array.reverse()];
  }

  var possibilities = factorial(array.length);
  var permutations = bogoSomePermutations(array);

  while (uniq(permutations).length < possibilities) {
    if (debugMode) {
      console.log(permutations.length);
    }
    array = shuffle(array);
    flatPush(permutations, bogoSomePermutations(array));
  }

  if (debugMode) {
    console.log(permutations.length);
    console.log(possibilities);
    console.log('Success!');
  }

  return uniq(permutations);
}