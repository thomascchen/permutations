var config = require('../config/config.js');

var fs = require('fs'),
    files = fs.readdirSync('../lib'),
    allContents = '';

files.forEach(function(file, index) {
  var fileContents = fs.readFileSync('../lib/' + file, 'utf8');
  allContents += fileContents + '\n\n';
  if (index === files.length - 1) {
    fs.writeFileSync('../main.js', allContents);
  }
});