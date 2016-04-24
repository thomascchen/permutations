var assert = require('assert');
var chill = require('../main.js');
var cycleAll = chill.cycleAll;
var cycleElement = chill.cycleElement;
var arrayGenerator = chill.arrayGenerator;

describe('Function', function() {
	describe('cycleAll(array)', function() {

		it('Shifts every element to every position', function(done) {
      var array = [1, 2, 3, 4];

      var expectation = [
				[ 2, 1, 3, 4 ],
			  [ 2, 3, 1, 4 ],
			  [ 2, 3, 4, 1 ],
			  [ 1, 3, 2, 4 ],
			  [ 1, 3, 4, 2 ],
			  [ 1, 2, 4, 3 ],
			  [ 3, 1, 2, 4 ],
			  [ 1, 4, 2, 3 ],
			  [ 4, 1, 2, 3 ],
			  [ 1, 2, 3, 4 ]
			];

      var permutations = cycleAll(array);

      assert.deepEqual(expectation, permutations);
      done();
		});

		it('Returns arrays of consistent length', function(done) {
      var array = [1, 2, 3, 4, 5];

      var permutations = cycleAll(array);
      var boolean = permutations.every(function(permutation) {
				return permutation.length === 5;
			});

      assert.equal(boolean, true);
      done();
		});

		it('Doesn\'t alter the original array', function(done) {
			var array = arrayGenerator(9);
			var permutations = cycleAll(array);

      assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
      done();
		});

	});
});