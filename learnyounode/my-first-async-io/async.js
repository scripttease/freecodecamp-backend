var fs = require('fs');

  
function callbackfn(error, fileContents) {
  if (error) return console.error(error);
  var newLines = fileContents.toString().split('\n').length -1;
  console.log(newLines);
}

fs.readFile(process.argv[2],callbackfn);
