var assert = require('assert');
var chill = require('../main.js');
var reverse = chill.reverse;

describe('Function', function() {
	describe('chill.reverse(array)', function() {
    var array = [1, 2, 3, 4];

		it('It reverses an array', function(done) {
      var reversed = chill.reverse(array);

      assert.deepEqual(reversed, [4, 3, 2, 1]);
      done();
		});

	});
});