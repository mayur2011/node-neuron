"use strict";

var numbers = [10,2,3,14,5];
console.log(numbers);

var max = Math.max.apply(Math, numbers);
var min = Math.min.apply(Math, numbers);

console.log(max);
console.log(min);
