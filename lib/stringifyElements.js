// Converts all elements of an array into strings

function stringifyElements(array) {
  return array.map(function(element) {
    return element.toString();
  });
};