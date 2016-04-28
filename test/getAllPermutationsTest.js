var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('getAllPermutations(Array)', function() {

		it('Returns all permutations of an array', function(done) {
			var array = chill.arrayGenerator(6);
			var permutations = chill.getAllPermutations(array, true);

      assert.equal(permutations.length, chill.factorial(array.length));
      done();
		});

	});
});