var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.copyArray(array, n)', function() {
    var array = [1, 2, 3, 4];

		it('Copies an array', function(done) {
      var newArray = chill.copyArray(array, 1);
      assert.deepEqual(newArray, array);

      done();
		});

		it('Places multiple copies in a 2d array', function(done) {
			var copies = chill.copyArray(array, 5);
			assert.equal(copies.length, 5);
			copies.forEach(function(copy) {
				assert.deepEqual(copy, array);
			});

      done();
		});

		it('Defaults to one copy if n is omitted', function(done) {
			var newArray = chill.copyArray(array);
			assert.deepEqual(newArray, array);

      done();
		});

	});
});