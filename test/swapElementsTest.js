var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.swapElements(array)', function() {
    var array = [1, 2, 3, 4];

		it('It swaps elements at indexes specified', function(done) {
			var swapped1 = chill.swapElements(array, 0, 0);
      var swapped2 = chill.swapElements(array, 0, 1);
			var swapped3 = chill.swapElements(array, 0, 2);
			var swapped4 = chill.swapElements(array, 0, 3);
			var swapped5 = chill.swapElements(array, 1, 0);
			var swapped6 = chill.swapElements(array, 1, 1);
			var swapped7 = chill.swapElements(array, 1, 2);
			var swapped8 = chill.swapElements(array, 1, 3);

      assert.deepEqual(swapped1, [1, 2, 3, 4]);
			assert.deepEqual(swapped2, [2, 1, 3, 4]);
			assert.deepEqual(swapped3, [3, 2, 1, 4]);
			assert.deepEqual(swapped4, [4, 2, 3, 1]);
			assert.deepEqual(swapped5, [2, 1, 3, 4]);
			assert.deepEqual(swapped6, [1, 2, 3, 4]);
			assert.deepEqual(swapped7, [1, 3, 2, 4]);
			assert.deepEqual(swapped8, [1, 4, 3, 2]);

      done();
		});

	});
});