var http = require("http")
var concatStream = require("concat-stream")
var input = process.argv;
var urls = input.splice(2);

// Wrap http.get with "new Promise" so that it returns a promise
function httpGetWithPromise(url) {
  return new Promise((resolve, reject) => {
    http.get(url, function(response) {
      response.pipe(concatStream(function(data) {
        resolve(data.toString());
      }));
    });
  })
};

// Maps over URLs and returns an array of unresolved promises.
var promises = urls.map(httpGetWithPromise);

// Merge all three promises into one promise with Promise.all
var bigPromise = Promise.all(promises);

// When bigPromise has finished (i.e. when all 3 component promises 
// have finished) join the resulting array of responses into a 
// string and print it.
bigPromise.then(results => {
  console.log(results.join("\n"));
});
