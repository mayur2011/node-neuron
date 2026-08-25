function divide(dividend, divisor){
let p=new Promise(function(doneNotifier,errorNotifier){
setTimeout(function(){
if(divisor==0){
errorNotifier('Cannot divide by zero');
}
else{
let r={
	quotient: Math.floor(dividend/divisor),
	remainder: dividend%divisor
};
doneNotifier(r);
}
},5000);
});
return p;
}


let a=10;
let b=0;
var promise=divide(a,b);
promise.then(function(result){
let quotient=result.quotient;
let remainder=result.remainder;
console.log(`After dividing ${a} by ${b}, the quotient is ${quotient} and remainder is ${remainder}`)
}, function(error){
console.log(`Problem : ${error}`);
});


/*
Starting from divide function,
Whenever this "divide" function will run it will return an address of a promise type object.
"jab bhi divide chalenga toh wo result return nhi karenga wo promise type k object ka address return karenga."

As part of Promise, we've wrapped full divide functionality.
divide functionality is also wrapped under a function,
So whichever fuction'address... we will give to a promise, it should have two parameters.

first param will receive an address of a function which we need to call when everything is fine, basically Once the task is completed successfully then we can call that function (just to intimate) whose address is present as part of first argument.

if there is a problem, then we will call that function whose address is present in the second param.

errorNotifier or doneNotifier functions - we will not call, it will be called by functionality which is behind the promise

On this line of code "let promise = divide(a,b);" -- we got an address of promise type
Then for promise type objct - we called "then" method and passed the addresses of two functions.



*/