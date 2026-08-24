var count = 0;
function someFunction(a,b,c){
count++;
console.log(count,"Cool",a,b,c);
if(count==3) clearInterval(tm);
}

tm=setInterval(someFunction,2000,10,20,"Good");
console.log("Great");