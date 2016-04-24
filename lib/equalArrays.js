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