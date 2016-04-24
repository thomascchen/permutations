exports.getPermutations = function(array) {
  var length = array.length;
  var permutations = [];
  var newSet;
  var newArray = lib.copyArray(array);

  for (var i = 0; i < length; i++) {
    newSet = lib.doubleCycleAll(newArray);
    lib.flatPush(permutations, newSet);
    newArray = rotate(newArray, 1);
  }

  permutations = permutations.filter(function(thisArray) {
    return thisArray.length === length;
  });

  return uniq(permutations);
};