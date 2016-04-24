var assert = require('assert');
var chill = require('../main.js');

describe('Function', function() {
	describe('chill.equalArrays(array2, array2))', function() {
    var array1 = [1, 2, 3, 4];
		var array2 = [1, 2, 3, 4];
		var array3 = [1, 2, 3, 5];
		var array4 = [1, 2, 4, 3];
		var array5 = [1, 2, 3];
		var array6 = [
			[1, 2, 3],
			[4, 5, 6]
		];
		var array7 = [
			[1, 2, 3],
			[4, 5, 6]
		];
		var array8 = [
			[1, 2, 3],
			[7, 8, 9]
		];

		it('Returns true if arrays have same contents and order', function(done) {
      var boolean = chill.equalArrays(array1, array2);

      assert.equal(boolean, true);
      done();
		});

		it('Returns false if arrays differ in contents', function(done) {
      var boolean1 = chill.equalArrays(array1, array3);
			var boolean2 = chill.equalArrays(array1, array5);

      assert.equal(boolean1, false);
			assert.equal(boolean2, false);
      done();
		});

		it('Returns false if arrays differ in order', function(done) {
      var boolean = chill.equalArrays(array1, array4);

      assert.equal(boolean, false);
      done();
		});

		it('Works for 2d arrays', function(done) {
      var boolean1 = chill.equalArrays(array6, array7);
			var boolean2 = chill.equalArrays(array6, array8);

      assert.equal(boolean1, true);
			assert.equal(boolean2, false);
      done();
		});

	});
});