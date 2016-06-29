var net = require("net");

function twoInt(n) {
  if (n < 10) {
  return "0" + n;
  }
  else {
    return n;
  }
}

function timeNow() {
  var date = new Date();
  //why do you need to create a new date object here? Is it being provided by the connection, and if yes, why do you need a new one why not just print the variable date but with a new format?
  return date.getFullYear() + "-"
    + twoInt(date.getMonth() +1) + "-"
    + twoInt(date.getDate()) + " "
    + twoInt(date.getHours()) + ":"
    + twoInt(date.getMinutes());
}

var server = net.createServer(function (socket) {  
  socket.write(timeNow() + "\n");
  socket.end();
});

server.listen(parseInt(process.argv[2]))  
