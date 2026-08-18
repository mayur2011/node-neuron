/* Strings, Regex & Unicode : Explore ES6 enhancements for strings including convenient methods such as startsWith endsWith includes and repeat. Understand the new Unicode code point syntax and regex improvements with sticky and Unicode flags. Gain practical skills for handling strings and pattern matching in modern JavaScript.

String Methods: Recently introduced in JavaScript are a few string methods that are more convenient methods for working with strings. These methods include .startsWith, .endsWidth, .includes, and .repeat.
*/

// Regular expression to see if a string started with a specific bit of text
const truth = "JavaScript is a really fun language!";
console.log(truth.match(/^JavaScript/));
console.log(truth.match(/^fun/));

console.log("********************** String Methods *********************");

// With the .startsWith method
const text = "JavaScript is a really fun language!";

console.log("\nWith the .startsWith method")
console.log(text.startsWith("JavaScript"));
console.log(text.startsWith("fun"));

console.log("\nWith the .endsWith method")
console.log(truth.endsWith('language!')); //true
console.log(truth.endsWith('JavaScript')); //false

console.log("\nWith the .includes method")
console.log(truth.includes('fun')); //true
console.log(truth.includes('a')); //true
console.log(truth.includes('go')); //false

console.log("\nWith the .includes method with optional parameter")
console.log(truth.includes('J')); //true
console.log(truth.includes('J', 10)); //false
