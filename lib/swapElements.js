exports.swapElements = function(array, index1, index2) {
  var newArray = exports.copyArray(array, 1);
  newArray[index1] = array[index2];
  newArray[index2] = array[index1];
  return newArray;
}