var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.flatPush(targetArray, sourceArray)', function() {
		var targetArray = [
			[1, 2, 3, 4],
			[1, 3, 2, 4],
			[1, 3, 4, 2]
		];

		var sourceArray = [
			[1, 2, 3, 4],
			[1, 3, 2, 4],
			[1, 3, 4, 2]
		];

		var expectation = [
			[ 1, 2, 3, 4 ],
		  [ 1, 3, 2, 4 ],
		  [ 1, 3, 4, 2 ],
		  [ 1, 2, 3, 4 ],
		  [ 1, 3, 2, 4 ],
		  [ 1, 3, 4, 2 ]
		];

		it('Combines two 2d arrays into a single 2d array', function(done) {
      chill.flatPush(targetArray, sourceArray);
			assert.deepEqual(targetArray, expectation)
      done();
		});

	});
});