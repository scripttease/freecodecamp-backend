var fs = require('fs');
var path = require('path');

function callbackfn(error, pathArguments) {
  if (error) return console.error(error);
  // var filteredFiles = pathArguments.filter(filterByNotDot).join();
  var filteredFilesB = pathArguments.filter(filterByExtn).join();
  var regex = /,/g;
  var filteredFilesList = filteredFilesB.replace(regex , "\n");
  console.log(filteredFilesList);

}

// function filterByNotDot(fileA) {
//   var filestr = fileA.toString();
//   var regexA = /(\'\w+\W\w+\')/;
//   return filestr == regexA;
// }
// is it because there is commas or somethig o e array item, or quotation marks...

function filterByExtn(file) {
  var desiredExtension = process.argv[3];
  var fileFull = file.toString();
  //need to make it so that must have a dot
  var fileExtn = fileFull.substr(fileFull.indexOf(".") +1);
  // var withDot = fileFull.substr(fileFull.indexOf("."));

  var correctExt = fileExtn == desiredExtension;
  // var correctExtWithDot = withDot == ("." + correctExt);
  // var notJustExtn = fileFull !== ("." + desiredExtension);

  return correctExt;


  // function filterByExtn(file) {
  //   var fileFull = file.toString();
  //     // var fileExtn = fileFull.substr(fileFull.indexOf(".") +1);
  //     var reg = /\X/;
  //     var notDot = fileFull.match(reg);
  // return fileFull == notDot; 

}

fs.readdir(process.argv[2], callbackfn);

// need to use to string and split on ' ' so that it returns just csvs in the list then i can use a regex to filter on the . and extension.
