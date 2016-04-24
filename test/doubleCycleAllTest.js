var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.doubleCycleAll(array)', function() {

		it('cycleAll, reverse, cycleAll again', function(done) {
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
			  [ 1, 2, 3, 4 ],
			  [ 3, 4, 2, 1 ],
			  [ 3, 2, 4, 1 ],
			  [ 3, 2, 1, 4 ],
			  [ 4, 2, 3, 1 ],
			  [ 4, 2, 1, 3 ],
			  [ 4, 3, 1, 2 ],
			  [ 2, 4, 3, 1 ],
			  [ 4, 1, 3, 2 ],
			  [ 1, 4, 3, 2 ],
			  [ 4, 3, 2, 1 ]
			];

      var permutations = chill.doubleCycleAll(array);

      assert.deepEqual(permutations, expectation);
      done();
		});

		it('Doesn\'t alter the original array', function(done) {
			var array = chill.arrayGenerator(9);
			var permutations = chill.doubleCycleAll(array);
      assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

      done();
		});

	});
});