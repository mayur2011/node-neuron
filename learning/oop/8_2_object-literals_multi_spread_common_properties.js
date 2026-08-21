let a={
x:10, 
y:20
}

var b={
x:100,
z:30
}

var c={...a,...b}
console.log(c);

/*
if something is common betwen objects then whatever is added later will be considered final/ latest value.

*/

console.log("***********************")
console.log("Freeze the object member values")

let p=Object.freeze({x:30,y:70});
console.log(p);
p.x=300;
p.y=700;
console.log(p);
let q=Object.freeze({...a,...b});
console.log(q);
q.x=1000;
console.log(q);
