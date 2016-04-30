var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('bogoAllPermutations(Array)', function() {

		it('Returns all permutations of an array', function(done) {
			var array = chill.arrayGenerator(3);
			var permutations = chill.bogoAllPermutations(array);

      assert.equal(permutations.length, chill.factorial(array.length));
      done();
		});

	});
});