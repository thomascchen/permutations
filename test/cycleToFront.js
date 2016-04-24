var assert = require('assert');
var chill = require('../main.js');
var cycleToFront = chill.cycleToFront;

describe('Function', function() {
	describe('cycleToFront(array)', function() {

		it('Shifts array element at index x towards end', function(done) {
      var array = [1, 2, 3, 4];

      var expectation = [
				[1, 2, 3, 4],
        [2, 1, 3, 4]
      ];

      var permutations = cycleToFront(array, 1);

      assert.deepEqual(permutations, expectation);
      done();
		});

	});
});