var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.factorial(number)', function() {

		it('Returns the chill.factorial of a number', function(done) {
      assert.equal(chill.factorial(1), 1);
			assert.equal(chill.factorial(2), 2);
			assert.equal(chill.factorial(3), 6);
			assert.equal(chill.factorial(4), 24);
			assert.equal(chill.factorial(5), 120);

      done();
		});

	});
});