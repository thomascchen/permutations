var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('deleteLeftmost(array, toDelete)', function() {

		it('Deletes the leftmost instance of a given element', function(done) {
      var array = [2, 2, 3, 2];
      array = chill.deleteLeftmost(array, 2);

      assert.deepEqual(array, [2, 3, 2]);
      done();
		});

	});
});