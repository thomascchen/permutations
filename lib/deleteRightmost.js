// Delete rightmost occurence of given element

function deleteRightmost(array, toDelete) {
  var array = reverse(array);
  array = deleteLeftmost(array, toDelete);
  return reverse(array);
};