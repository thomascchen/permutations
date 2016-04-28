function cycleAll(array) {
  var n = array.length;
  var permutations = [];

  for (var i = 0; i < n; i++) {
    var nextCycle = cycleElement(array, i)
    nextCycle.shift();
    flatPush(permutations, nextCycle);
  }

  permutations.push(array);
  return uniq(permutations);
};