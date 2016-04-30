// Randomly shuffles an array

function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
    var x = getRandom(0, array.length);
    var y = getRandom(0, array.length);
    array = swapElements(array, x, y);
  }
  return array;
};

function getRandom(min, max) {
  return Math.floor((Math.random() * max) + min);
}