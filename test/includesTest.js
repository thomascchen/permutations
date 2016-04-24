var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.includes(array, element)', function() {
    var array1 = [1, 2, 3, 4];
    var array2 = [
      [1, 2, 3, 4],
      [1, 3, 2, 4],
      [1, 3, 4, 2],
      [2, 1, 3, 4]
    ];

		it('Returns true if array contains given element', function(done) {
      var boolean = chill.includes(array1, 4);

      assert.equal(boolean, true);
      done();
		});

		it('Returns false if array does not contain given element', function(done) {
      var boolean = chill.includes(array1, 5);

      assert.equal(boolean, false);
      done();
		});

		it('Returns true if 2d array contains given array', function(done) {
      var boolean = chill.includes(array2, [1, 2, 3, 4]);

      assert.equal(boolean, true);
      done();
		});

	});
});