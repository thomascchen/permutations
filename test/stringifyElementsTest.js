var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.stringifyElements(array)', function() {
		var array = [
			[1, 2, 3, 4],
			[1, 3, 2, 4],
			[1, 3, 4, 2],
			[2, 1, 3, 4]
		];

		var expectation = [
			'1,2,3,4',
			'1,3,2,4',
			'1,3,4,2',
			'2,1,3,4'
		];

		it('It terms each array element to a string', function(done) {
      assert.deepEqual(chill.stringifyElements(array), expectation);
      done();
		});

	});
});