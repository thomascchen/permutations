exports.arrayGenerator = function (length) {
  var array = [];
  for (var i = 1; i <= length; i++) {
    array.push(i);
  }
  return array;
};