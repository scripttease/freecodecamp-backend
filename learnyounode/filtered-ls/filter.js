var fs = require('fs');
var path = require('path');

function callbackfn(error, pathArguments) {
  if (error) return console.error(error);
  var filteredFiles = pathArguments.filter(filterByExtn).join();
  var regex = /,/g;
  var filteredFilesList = filteredFiles.replace(regex , "\n");
  console.log(filteredFilesList);

}

function filterByExtn(file) {
  var desiredExtension = process.argv[3];
  var fileFull = file.toString();
  //IMPORTANT the indexOf method returns -1 if the search value never occurs 
  var fileHasExtn = fileFull.indexOf(".") !== -1;
  var fileExtn = fileHasExtn && fileFull.substr(fileFull.indexOf(".") +1);


  var correctExt = fileExtn == desiredExtension;
  // var notJustExtn = fileFull !== ("." + desiredExtension);

  return correctExt;

}

fs.readdir(process.argv[2], callbackfn);
