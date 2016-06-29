var moduleReadDir = require('./module-read-dir.js');
var dirName = process.argv[2];
var desiredExtension = process.argv[3];

moduleReadDir(dirName, desiredExtension, function callbackfn(error, filteredFileList) {
  if (error) return console.error("there was an error:", error);
  console.log(filteredFileList);
});

