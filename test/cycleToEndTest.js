var assert = require('assert');
var chill = require('../main.js');
var cycleToEnd = chill.cycleToEnd;

describe('Function', function() {
	describe('cycleToEnd(array)', function() {

		it('Shifts array element at index x towards end', function(done) {
      var array = [1, 2, 3, 4];

      var expectation = [
        [1, 2, 3, 4],
        [1, 3, 2, 4],
        [1, 3, 4, 2]
      ];

      var permutations = cycleToEnd(array, 1);

      assert.deepEqual(expectation, permutations);
      done();
		});

	});
});