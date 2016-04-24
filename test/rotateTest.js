var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.rotate(array, n)', function() {

		it('It an array n degrees', function(done) {
      assert.deepEqual(chill.rotate([1, 2, 3, 4], 1), [4, 1, 2, 3]);
			assert.deepEqual(chill.rotate([1, 2, 3, 4], 2), [3, 4, 1, 2]);
			assert.deepEqual(chill.rotate([1, 2, 3, 4], 3), [2, 3, 4, 1]);
			assert.deepEqual(chill.rotate([1, 2, 3, 4], 4), [1, 2, 3, 4]);

      done();
		});

		it('Defaults to 1 degree if n is omitted', function(done) {
      assert.deepEqual(chill.rotate([1, 2, 3, 4]), [4, 1, 2, 3]);

      done();
		});

		it('Multiple rotations do not effect alter the array', function(done) {
			var array = [1, 2, 3, 4];

			array = chill.rotate(array);
			assert.deepEqual(array, [4, 1, 2, 3]);

			array = chill.rotate(array);
			assert.deepEqual(array, [3, 4, 1, 2]);

			array = chill.rotate(array);
			assert.deepEqual(array, [2, 3, 4, 1]);

			array = chill.rotate(array);
			assert.deepEqual(array, [1, 2, 3, 4]);

      done();
		});

	});
});