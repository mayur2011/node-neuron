function printSum(x,y){
let z= x+y;
console.log(x,y);
console.log("Sum : "+z);
return z;
}
var add5=printSum.bind(undefined,5);

let j=add5(20);

console.log(j);
