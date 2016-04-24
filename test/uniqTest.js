var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.uniq(array)', function() {

		it('Returns a duplicate-free copy of a 1d array', function(done) {
			var array = [1, 2, 2, 3, 4];
      var uniqArray = chill.uniq(array);

      assert.deepEqual(uniqArray, [1, 2, 3, 4]);
      done();
		});

		it('Returns a duplicate-free copy of a 2d array', function(done) {
			var expectation = [
	      [1, 2, 3, 4],
	      [4, 3, 2, 1],
	    ];

			var array = [
	      [1, 2, 3, 4],
	      [1, 2, 3, 4],
	      [4, 3, 2, 1],
	    ];

      var uniqArray = chill.uniq(array);

      assert.deepEqual(uniqArray, expectation);
      done();
		});

	});
});