var assert = require('assert');
var chill = require('../main.js');
var cycleElement = chill.cycleElement;

describe('Function', function() {
	describe('cycleElement(array)', function() {

		it('Shifts array element at index x to every position', function(done) {
      var array = [1, 2, 3, 4];

      var expectation = [
        [1, 2, 3, 4],
        [1, 3, 2, 4],
        [1, 3, 4, 2],
        [2, 1, 3, 4]
      ];

      var permutations = cycleElement(array, 1);

      assert.deepEqual(permutations, expectation);
      done();
		});

	});
});