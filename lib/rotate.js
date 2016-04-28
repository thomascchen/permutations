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