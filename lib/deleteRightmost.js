function deleteRightmost(array, toDelete) {
  var array = reverse(array);
  array = deleteLeftmost(array, toDelete);
  return reverse(array);
};