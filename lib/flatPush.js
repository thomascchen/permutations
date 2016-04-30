// Combine all the elments of two arrays

function flatPush(targetArray, sourceArray) {
  sourceArray.forEach(function(element) {
    targetArray.push(element);
  });
};