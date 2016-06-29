// function callbackfn(error, pathArguments) {
//   if (error) return console.error(error);
//   var filteredFiles = pathArguments.filter(filterByExtn).join();
//   var regex = /,/g;
//   var filteredFilesList = filteredFiles.replace(regex , "\n");
//   console.log(filteredFilesList);
// }

// function filterByExtn(file) {
//   var desiredExtension = process.argv[3];
//   var fileFull = file.toString();
//   //IMPORTANT the indexOf method returns -1 if the search value never occurs 
//   var filehasextn = fileFull.indexOf(".") !== -1;
//   var fileExtn = fileHasExtn && fileFull.substr(fileFull.indexOf(".") +1);

//   var correctExt = fileExtn == desiredExtension;
//   // var notJustExtn = fileFull !== ("." + desiredExtension);

//   return correctExt;
// }
// louis' pointers
// var desiredExt = process.argv[3];

// function hasCorrectExt(file) {
//   var filename = file.toString();
//   var ext = getExt(filename);
//   return ext && ext === desiredExt;
// }

// fs.readdir(process.argv[2], callbackfn);

// trying to match answer style
//
var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
// readdir needs to take a file hence the whole sub-function has to be insde the arguments brackets
// fs.readdir must take a path/to/folder as the first arg, and a callback fn as the second arg, to which it passes the contents of the folder.
fs.readdir(folder, 
    function callbackfn(error, files) {
  if (error) return console.error(error);
  var filteredFiles = files.filter(filterByExtn).join("\n");
  console.log(filteredFiles);

function filterByExtn(file) {
  var desiredExtension = process.argv[3];
  var fileFull = file.toString();
  //IMPORTANT the indexOf method returns -1 if the search value never occurs 
  var fileHasExtn = fileFull.indexOf(".") !== -1;
  var fileExtn = fileHasExtn && fileFull.substr(fileFull.indexOf(".") +1);

  var correctExt = fileExtn == desiredExtension;
  // var notJustExtn = fileFull !== ("." + desiredExtension);

  return correctExt;
}}
)


// export file




function moduleReadDir(dirName, ext, callbackfn) {
  fs.readdir(folder, 
      function (error, files) {
  if (error) return console.error(error);
  var filteredFileList = files.filter(filterByExtn).join("\n");
function filterByExtn(file) {
  var desiredExtension = process.argv[3];
  var fileFull = file.toString();
  var fileHasExtn = fileFull.indexOf(".") !== -1;
  var fileExtn = fileHasExtn && fileFull.substr(fileFull.indexOf(".") +1);

  var correctExt = fileExtn == desiredExtension;

  return correctExt;
}}
);
  }


  
    module.exports = moduleReadDir(dirName, ext, callbackfn)

  // file list printer

  var moduleReadDir = require("./moduleReadDir");
var folder = process.argv[2];
var desiredExtension = process.argv[3];

moduleReadDir(folder, desiredExtension, function {
    if (error) return console.error(error);
    console.log(filteredFileList);
  });

