var assert = require('assert');
var chill = require('../main.js');
var copyArray = chill.copyArray;

describe('Function', function() {
	describe('copyArray(array, n)', function() {
    var array = [1, 2, 3, 4];

		it('Copies an array', function(done) {
      var newArray = copyArray(array, 1);
      assert.deepEqual(newArray, array);
      done();
		});

		it('Places multiple copies in a 2d array', function(done) {
			var copies = copyArray(array, 5);
			assert.equal(copies.length, 5);
			copies.forEach(function(copy) {
				assert.deepEqual(copy, array);
			});
      done();
		});

	});
});