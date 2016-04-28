var fs = require('fs'),
    files = fs.readdirSync('../lib'),
    allContents = '';

files.forEach(function(file, index) {
  var fileContents = fs.readFileSync('../lib/' + file, 'utf8');
  allContents += fileContents + '\n\n';
  if (index === files.length - 1) {
    allContents += addExports(files);
    fs.writeFileSync('../main.js', allContents);
  }
});

function addExports(files) {
  var functionNames = files.map(function(file) {
    return file.split('.')[0];
  });
  exportString = []

  functionNames.forEach(function(functionName) {
    exportString.push('  ' + functionName + ': ' + functionName)
  });

  exportString.forEach(function(functionName, index) {
    if (index !== exportString.length - 1) {
      exportString[index] = functionName + ',';
    }
  });

  exportString.unshift('module.exports = {')
  exportString.push('};')
  return exportString.join('\n');
}