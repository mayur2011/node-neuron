// static method example

class aaa{
static x=100;
constructor(){
this.y=500;
}
static sam(){
console.log(aaa.x);
console.log("Great");
console.log(this.y); //undefined for this.y which is non static member
console.log(this); // this is represending the class itself, (static: representing class)
}
tom(){
console.log(aaa.x);
console.log("Cool");
console.log(this.y); // actual value of y which is 500
console.log(this); // this has address of object of aaa, (non-static: representing object)
}
}

let a = new aaa();
// a.sam(); // TypeError: a.sam is not a function
aaa.sam();
a.tom();


/*
- static method is accessed only with class name
- 

output:
100
Great
undefined
[class aaa] { x: 100 }  <-- static: representing class
100
Cool
500
aaa { y: 500 } <-- non-static: representing object
*/