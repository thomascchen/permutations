var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.bogoSomePermutations(Array)', function() {

		it('Returns many permutations of an array', function(done) {
			var array = chill.arrayGenerator(9);
      var permutations = chill.bogoSomePermutations(array);

      var boolean = permutations.every(function(permutation) {
        return chill.equalArrays(permutation.sort(), array);
      });

			assert.ok(permutations.length > 0)
			assert.equal(boolean, true);
      done();
		});

		it('Doesn\'t alter the original array', function(done) {
			var array = chill.arrayGenerator(9);
			var permutations = chill.bogoSomePermutations(array);
      assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

      done();
		});

	});
});