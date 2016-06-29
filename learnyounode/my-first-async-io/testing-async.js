
function addStuff(x,y, callbackfn) {
var thisAddsStuff = x + y;
callbackfn(thisAddsStuff);
}

function logger (res) {
    console.log(res);
}

addStuff (7, 2, logger);
