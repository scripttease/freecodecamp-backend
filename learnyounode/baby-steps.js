var array = (process.argv);
var array2 = array.splice(2);
var sum = array2.reduce(add, 0);

function add(a, b) {
    return +a + +b;
}

//console.log(array);
//console.log(array2);
console.log(sum);
