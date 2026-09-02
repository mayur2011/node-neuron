function  abcd([a,b]){
console.log(a);
console.log(b);
}

let b=[100,400];
abcd(b);



/*
With this we don't need to create an object with properties name, instead we can pass all those values in an array as we did above.

meaning this way:
let r={
	quotient: Math.floor(dividend/divisor),
	remainder: dividend%divisor
}

new code can this -->

// passsing end
doneNotifier([Math.floor(dividend/divisor), dividend%divisor]);
//passing only one thing, an address of an array object


// receiving end 
promise.then(function([quotient, remainder]){})
*/
