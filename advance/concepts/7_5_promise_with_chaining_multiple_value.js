function divide(divident,divisor, ){
let p= new Promise(function(doneNotifier, errorNotifier){
setTimeout(function(){
if(divisor==0){
errorNotifier('Cannot divide by zero');
}
else
{
let r={
quotient: Math.floor(divident/divisor),
remainder: divident%divisor
}
doneNotifier(r);
}
},3000);
});
return p;
}

let a=10;
let b=5;
let promise=divide(a,b);
promise.then(function(result){
let quotient=result.quotient;
let remainder=result.remainder;
console.log(`After dividing ${a} by ${b}, the quotient is ${quotient} and remainder is ${remainder}`);
}).catch(function(error){
console.log(`Problem : ${error}`);
}).then(function(){
console.log("Very cool");
}).then(function(){
console.log("Super cool");
});


// this chainining of functionality is to address complex nesting of functionality
//promise.then().catch().then()
//promise.then(address of a function).catch(address of a function).then(address of a function)
//promise.then(function(){}).catch(function(){}).then(function(){})