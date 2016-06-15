
function addStuff(x, y, callbackfn) {
callbackfn(x +y);
}

function logger (result) {
    console.log(result);
}

addStuff (7, 3, logger);
