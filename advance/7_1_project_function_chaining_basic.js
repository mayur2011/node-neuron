const readline=require('readline');
function divide(dividend,divisor, onSuccess,onError){
setTimeout(function(){

if(divisor==0){
onError("Can't divide by zero.")
}else{
let quotient=Math.floor(dividend/divisor);
let remainder= dividend%divisor;
onSuccess(quotient, remainder);
}
},5000);
}

let iointerface = readline.createInterface({
input:process.stdin,
output:process.stdout
});


function processResult(q,r){
console.log(`After dividing ${a} by ${b}, result is quotient is ${q} and remainder is ${r}`);
}

function processError(e){
console.log(`Problem : ${e}`);
}

let a=0;
let b=0;

iointerface.question("Enter divident :", function(answer){
a=answer;
// when first question is received, move to next question
iointerface.question("Enter divisor :", function(answer){
// when second question is received, close the io-interface
iointerface.close(); //to end the application
b=answer;
divide(a,b,processResult, processError);
});
});



