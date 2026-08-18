/*
Temporal Dead Zone#
There is one more gotcha that I want to point out, and this is something called the Temporal Dead Zone. In JavaScript, when the browser interprets your code it will do a pass where it looks for any declarations. However, it will not assign the value just yet. Because of this it is possible to use a variable before it has a value: it will simply print undefined.
*/

console.log(person);
var person ="Ryan";

console.log("*************************");

console.log(personTwo);
let personTwo = "Ryan";
