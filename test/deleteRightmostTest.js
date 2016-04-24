var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('deleteRightmost(array, toDelete)', function() {

		it('Deletes the rightmost instance of a given element', function(done) {
      var array = [2, 2, 3, 2];
      array = chill.deleteRightmost(array, 2);

      assert.deepEqual(array, [2, 2, 3]);
      done();
		});

	});
});