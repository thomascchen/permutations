// Great a sequential array of specified length

function arrayGenerator(length) {
  var array = [];
  for (var i = 1; i <= length; i++) {
    array.push(i);
  }
  return array;
};