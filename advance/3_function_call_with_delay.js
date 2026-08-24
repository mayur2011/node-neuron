function someFunction(){
	console.log("Cool");
}

function someOtherFunction(message){
	console.log(message+" its complete.!")
}

// setTimeout for adding a delay and passing the address of a function
setTimeout(someFunction,2000);
console.log("Great");

setTimeout(someOtherFunction("Done"),2500);
console.log("The End..!");


/*
Here we are making setTimeout call by passing the address of a function and with 2 sec delay.
By passing someFunction as a reference we are saying that you go and sleep for 2 seconds and when you wake (basically done with delay) then notify me, how ? by calling this someFunction.
*/