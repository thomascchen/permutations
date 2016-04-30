// Switchs element at inde1 with element at index2

function swapElements(array, index1, index2) {
  var newArray = copyArray(array, 1);
  newArray[index1] = array[index2];
  newArray[index2] = array[index1];
  return newArray;
}