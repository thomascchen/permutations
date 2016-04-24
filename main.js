exports.arrayGenerator = function (length) {
  var array = [];
  for (var i = 1; i <= length; i++) {
    array.push(i);
  }
  return array;
};

// Make n copies of array

exports.copyArray = function(array, n) {
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

exports.cycleAll = function(array) {
  var n = array.length;
  var permutations = [];

  for (var i = 0; i < n; i++) {
    var nextCycle = exports.cycleElement(array, i)
    nextCycle.shift();
    exports.flatPush(permutations, nextCycle);
  }

  permutations.push(array);
  return exports.uniq(permutations);
};

// Shift array element at index x to every possible position
exports.cycleElement = function(array, x) {
  var permutations1 = exports.cycleToEnd(array, x);
  var permutations2 = exports.cycleToFront(array, x);
  permutations2.shift();
  var allPermutations = permutations1.concat(permutations2);
  return exports.uniq(allPermutations);
}

// Shift array element at index x to every possible position from current to end
exports.cycleToEnd = function(array, indexToCycle) {
  var i = indexToCycle
  var length = array.length;
  var permutations = [array];

  while (i < length - 1) {
    var currentPermutation = exports.lastElement(permutations);
    var nextPermutation = exports.swapElements(currentPermutation, i, i + 1);
    permutations.push(nextPermutation);
    i += 1;
  }
  return permutations;
};

// Shift array element at index x to every possible position toward front
exports.cycleToFront = function(array, indexToCycle) {
  var i = indexToCycle
  var permutations = [array];

  while (i > 0) {
    var currentPermutation = exports.lastElement(permutations);
    var nextPermutation = exports.swapElements(currentPermutation, i, i - 1);
    permutations.push(nextPermutation);
    i -= 1;
  }
  return permutations;
};

exports.deleteLeftmost = function(array, toDelete) {
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

exports.deleteRightmost = function(array, toDelete) {
  var array = exports.reverse(array);
  array = exports.deleteLeftmost(array, toDelete);
  return exports.reverse(array);
};

exports.doubleCycleAll = function(array) {
  var permutations1 = exports.cycleAll(array);
  var permutations2 = exports.cycleAll(exports.reverse(array));

  return exports.uniq(permutations1.concat(permutations2));
};

exports.equalArrays = function(array1, array2) {
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

exports.factorial = function(positiveNumber) {
  var n = positiveNumber;
  for (var i = n - 1; i > 0; i--) {
    n *= i;
  }
  return n
};

exports.flatPush = function(targetArray, sourceArray) {
  sourceArray.forEach(function(element) {
    targetArray.push(element);
  });
};

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

exports.includes = function(array, element) {
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
    if (exports.equalArrays(array, element)) {
      includes = true;
    }
  });
  return includes;
}

exports.lastElement = function(array) {
  return array[array.length - 1];
};

exports.reverse = function(array) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.unshift(element);
  });
  return newArray;
}

exports.rotate = function(array, n) {
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

exports.shuffle = function(array) {
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

exports.stringifyElements = function(array) {
  return array.map(function(element) {
    return element.toString();
  });
};

exports.swapElements = function(array, index1, index2) {
  var newArray = exports.copyArray(array, 1);
  newArray[index1] = array[index2];
  newArray[index2] = array[index1];
  return newArray;
}

exports.uniq = function(array, element) {
  if (typeof array[0] === 'object') {
    return uniq2(array);
  }
  return uniq1(array);
};

function uniq1(array) {
  var uniqArray = [];
  array.forEach(function(element, index) {
    if (exports.includes(uniqArray, element)) {
      return;
    }
    uniqArray.push(array[index]);
  })
  return uniqArray;
};

function uniq2(array) {
  var uniqArray = [];
  array.forEach(function(element, index) {
    if (exports.includes(uniqArray, element)) {
      return;
    }
    uniqArray.push(array[index]);
  })
  return uniqArray;
};

