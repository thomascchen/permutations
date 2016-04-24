exports.flatPush = function(targetArray, sourceArray) {
  sourceArray.forEach(function(element) {
    targetArray.push(element);
  });
};