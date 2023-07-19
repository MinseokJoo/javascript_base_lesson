var numbers = [10, 20, 3, 16, 45];

// apply, ({}, [])
// var max = Math.max.apply({}, numbers);
// var min = Math.min.apply({}, numbers);
// console.log(max, min);

// spread operator
// console.log(...numbers);

var max = Math.max(...numbers);
var min = Math.min(...numbers);
console.log(max, min);
