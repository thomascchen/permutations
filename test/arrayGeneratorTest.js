var assert = require('assert');
var chill = require('../main.js');
var arrayGenerator = chill.arrayGenerator;

describe('Function', function() {
	describe('arrayGenerator(n)', function() {

		it('Generates an array of length n', function(done) {
      for (var i = 1; i <= 10; i++) {
        assert.equal(typeof arrayGenerator(i), 'object');
        assert.equal(arrayGenerator(i).length, i);
      }

      done();
		});

    it('Generated arrays contain 1 to n in sequence', function(done) {
      var expectation = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      assert.deepEqual(arrayGenerator(10), expectation);

      done();
		});

	});
});