// randomly generated n = 500 length array 0 <= array[n] <= 1000
let randomArray=Array.from({length: 500}, () => Math.floor(Math.random() * 1001));

// Get nth smallest
Array.min = function( array ){
    return Math.min.apply( Math, array );
};
let nthsmallest = Array.min(randomArray);
console.log(randomArray)
console.log(nthsmallest)