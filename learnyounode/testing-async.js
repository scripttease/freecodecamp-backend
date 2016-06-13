var fs = require('fs');

function newLinesInBuffer (file, callbackfn) {
var newLines = fs.readFile(file).toString().split('\n').length -1;
callbackfn(newLines);
}

function logger (res) {
    console.log(res);
}

newLinesInBuffer (process.argv[2], logger);
