function deleteAll(array, toDelete) {
  return array.filter(function(element) {
    return element !== toDelete
  });
};