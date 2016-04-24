exports.deleteRightmost = function(array, toDelete) {
  var array = exports.reverse(array);
  array = exports.deleteLeftmost(array, toDelete);
  return exports.reverse(array);
};