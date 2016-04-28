function deleteLeftmost(array, toDelete) {
  var newArray = [];
  var deleted = false;

  array.forEach(function(element) {
    if (element === toDelete && deleted === false) {
      deleted = true;
      return;
    }
    newArray.push(element);
  });

  return (newArray);
};