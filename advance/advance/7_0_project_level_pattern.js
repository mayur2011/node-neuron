function divide(dividend, divisor, onSuccess, onError){
setTimeout(function(){
if(divisor==0){
onError("Can't divide by zero");
}else{
let quotient=Math.floor(dividend/divisor);
let remainder=dividend%divisor;
onSuccess(quotient, remainder);
}
}, 5000);
}


let a=10;
let b=0;
function processResult(q,r){
console.log(`After dividing ${a} by ${b}, the quotient is ${q} and the remainder is ${r}`);
}

function processError(e){
console.log(`Problem : ${e}`);
}

divide(a,b,processResult,processError);

/*
``

*/