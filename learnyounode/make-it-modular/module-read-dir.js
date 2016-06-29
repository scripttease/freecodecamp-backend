var fs = require('fs');
var dirName = process.argv[2];
var desiredExtension = process.argv[3];

module.exports = function moduleReadDir(dirName, ext, callbackfn) {
  fs.readdir(dirName, 
      function (error, files) {
        if (error) 
          return callback(error);
        
        var filteredFileList = files.filter(filterByExtn).join("\n");

        function filterByExtn(file) {
          var desiredExtension = process.argv[3];
          var fileFull = file.toString();
          var fileHasExtn = fileFull.indexOf(".") !== -1;
          var fileExtn = fileHasExtn && fileFull.substr(fileFull.indexOf(".") +1);

          var correctExt = fileExtn == desiredExtension;

          return correctExt;
          
        }
      
      callbackfn(null, filteredFileList)
      });
}



// module.exports = moduleReadDir(dirName, ext, callbackfn)
