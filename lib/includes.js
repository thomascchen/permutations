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