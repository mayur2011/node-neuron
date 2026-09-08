/*
Regex: There are two new flags available to use, the y or sticky flag, and the u flag. The u flag is used for unicode characters.
*/

console.log("Man I really love 🚀, they are the best!".match(/\u{1F680}/u));

console.log("Wow I really love this new phone I got 😃! Although the battery is not as good as my old one 😕.".match(/[\u{1F601}-\u{1f637}]/ug));
//["😃", "😕"]

console.log("*********************************")

let regex = /really/g;
let text = "I really love pizza, is there really a better food?";
console.log(regex.exec(text)); // [ 'really', index: 2, input: 'I really love pizza, is there really a better food?' ]

console.log(regex.lastIndex); //8

console.log(regex.exec(text)); //[ 'really', index: 30, input: 'I really love pizza, is there really a better food?' ]

console.log(regex.lastIndex); //36
