function reverse(array) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.unshift(element);
  });
  return newArray;
}