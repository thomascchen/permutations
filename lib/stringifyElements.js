exports.stringifyElements = function(array) {
  return array.map(function(element) {
    return element.toString();
  });
};