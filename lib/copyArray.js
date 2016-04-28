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