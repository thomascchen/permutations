// Return factorial of n

function factorial(positiveNumber) {
  var n = positiveNumber;
  for (var i = n - 1; i > 0; i--) {
    n *= i;
  }
  return n
};