function arrayGenerator(length) {
  var array = [];
  for (var i = 1; i <= length; i++) {
    array.push(i);
  }
  return array;
};

// Make n copies of array

function copyArray(array, n) {
  n = n || 1;
  var copies = [];

  for (var i = 0; i < n; i++) {
    var newArray = [];
    array.forEach(function(element, ii) {
      newArray.push(element);
    });
    copies.push(newArray);
  }

  if (n === 1) {
    return copies[0];
  }

  return copies;
};

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

// Shift array element at index x to every possible position
function cycleElement(array, x) {
  var permutations1 = cycleToEnd(array, x);
  var permutations2 = cycleToFront(array, x);
  permutations2.shift();
  var allPermutations = permutations1.concat(permutations2);
  return uniq(allPermutations);
}

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

function deleteAll(array, toDelete) {
  return array.filter(function(element) {
    return element !== toDelete
  });
};

function deleteLeftmost(array, toDelete) {
  var newArray = [];
  var deleted = false;

  array.forEach(function(element) {
    if (element === toDelete && deleted === false) {
      deleted = true;
      return;
    }
    newArray.push(element);
  });

  return (newArray);
};

function deleteRightmost(array, toDelete) {
  var array = reverse(array);
  array = deleteLeftmost(array, toDelete);
  return reverse(array);
};

function doubleCycleAll(array) {
  var permutations1 = cycleAll(array);
  var permutations2 = cycleAll(reverse(array));

  return uniq(permutations1.concat(permutations2));
};

function equalArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  if (typeof array1[0] === 'object') {
    return equalArrays2(array1, array2);
  }
  return equalArrays1(array1, array2);
};

function equalArrays1(array1, array2) {
  var equal = true;
  array1.forEach(function(element, index) {
    if (array1[index] !== array2[index]) {
      equal = false;
    }
  });
  return equal;
}

function equalArrays2(metaArray1, metaArray2) {
  var equal = true;
  metaArray1.forEach(function(subArray, index) {
    if (!equalArrays1(metaArray1[index], metaArray2[index])) {
      equal = false;
    }
  });
  return equal;
}

function factorial(positiveNumber) {
  var n = positiveNumber;
  for (var i = n - 1; i > 0; i--) {
    n *= i;
  }
  return n
};

function flatPush(targetArray, sourceArray) {
  sourceArray.forEach(function(element) {
    targetArray.push(element);
  });
};

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

function getPermutations(array) {
  var length = array.length;
  var permutations = [];
  var newSet;
  var newArray = copyArray(array);

  for (var i = 0; i < length; i++) {
    newSet = doubleCycleAll(newArray);
    flatPush(permutations, newSet);
    newArray = rotate(newArray, 1);
  }

  permutations = permutations.filter(function(thisArray) {
    return thisArray.length === length;
  });

  return uniq(permutations);
};

function includes(array, element) {
  if (typeof array[0] === 'object') {
    return includes2(array, element);
  }
  return includes1(array, element);
};

function includes1(array, element) {
  if (array.indexOf(element) > -1) {
    return true;
  }
  return false;
}

function includes2(metaArray, array) {
  var includes = false;
  metaArray.forEach(function(element) {
    if (equalArrays(array, element)) {
      includes = true;
    }
  });
  return includes;
}

function lastElement(array) {
  return array[array.length - 1];
};

function reverse(array) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.unshift(element);
  });
  return newArray;
}

function rotate(array, n) {
  if (!n) {
    var n = 1;
  }
  while (n > 0) {
    n -= 1;
    var newArray = [];
    newArray.push(array.pop());
    newArray = newArray.concat(array);
    array = newArray;
  }
  return array;
}

function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
    var x = getRandom(0, array.length);
    var y = getRandom(0, array.length);
    array = swapElements(array, x, y);
  }
  return array;
};

function getRandom(min, max) {
  return Math.floor((Math.random() * max) + min);
}

function stringifyElements(array) {
  return array.map(function(element) {
    return element.toString();
  });
};

function swapElements(array, index1, index2) {
  var newArray = copyArray(array, 1);
  newArray[index1] = array[index2];
  newArray[index2] = array[index1];
  return newArray;
}

function uniq(array, element) {
  if (typeof array[0] === 'object') {
    return uniq2(array);
  }
  return uniq1(array);
};

function uniq1(array) {
  var uniqArray = [];
  array.forEach(function(element, index) {
    if (includes(uniqArray, element)) {
      return;
    }
    uniqArray.push(array[index]);
  })
  return uniqArray;
};

function uniq2(array) {
  var uniqArray = [];
  array.forEach(function(element, index) {
    if (includes(uniqArray, element)) {
      return;
    }
    uniqArray.push(array[index]);
  })
  return uniqArray;
};

module.exports = {
  arrayGenerator: arrayGenerator,
  copyArray: copyArray,
  cycleAll: cycleAll,
  cycleElement: cycleElement,
  cycleToEnd: cycleToEnd,
  cycleToFront: cycleToFront,
  deleteAll: deleteAll,
  deleteLeftmost: deleteLeftmost,
  deleteRightmost: deleteRightmost,
  doubleCycleAll: doubleCycleAll,
  equalArrays: equalArrays,
  factorial: factorial,
  flatPush: flatPush,
  getAllPermutations: getAllPermutations,
  getPermutations: getPermutations,
  includes: includes,
  lastElement: lastElement,
  reverse: reverse,
  rotate: rotate,
  shuffle: shuffle,
  stringifyElements: stringifyElements,
  swapElements: swapElements,
  uniq: uniq
};