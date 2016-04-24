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