/*
block scope vs function scope
When we looked at var we saw that if we defined a variable inside of a function, it created the variable in there, and it is available inside of that function but not outside of it.

*/

/*
function setName(){
 var name = "Ryan";
};

console.log(name);

// error: name is not defined
*/

/*
If we declared a variable using var inside of a block statement, or anything with {} (like a conditional for example), it will make that variable available outside of that block!
*/

if(true){
var name = "Ryan";
}

console.log(name);

/*
And if you are familiar with other languages, say C for example, you might think this to be odd, since C has the ability to create block scope. Enter let, in ES6 let allows us to create a block scoped variable.
*/