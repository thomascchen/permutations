var assert = require('assert');
var chill = require('../main.js');
var lastElement = chill.lastElement;

describe('Function', function() {
	describe('chill.lastElement(array)', function() {
    var array = [1, 2, 3, 4];

		it('Returns the last element of an array', function(done) {
      assert.deepEqual(chill.lastElement(array), 4);
      done();
		});

	});
});