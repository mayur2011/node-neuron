// aaa class
class aaa{
constructor(){
this.x=10;
}
};

// func aFunction which returns a reference of aaa class (not the ref of object)
function aFunction(){
return aaa;
}


/* bFunction: when it runs, it receives a reference of a class, and returns a reference of an anonymous class which inherits the same class whose reference was received by bFunction.
*/

function bFunction(someClass){
return class extends someClass{
constructor(){
super();
this.y=20;
}
};
}

/*
- calling bFunction below by passing the reference of an Object class
- bFunction returns a reference of an anonymous class
- which is assigned to bbb variable
- so if we write "new bbb()" - it will create an object of that anonymous class (which bbb represents internally)
- 
*/
let bbb = bFunction(Object);

// --- 
class ccc extends bFunction(aFunction()){
constructor(){
super();
this.z=30;
}
}

// class ddd 
class ddd extends bFunction(Object){
constructor(){
super();
this.t=503;
}
}

let b=new bbb(); // bbb is a variable which holds the reference of anonymous class
console.log(b);

let c=new ccc();
console.log(c);

let d=new ddd();
console.log(d);

/*
Most Important implementation for dynamically inherits the multiple classes
- which class to be inherited
- which class needs to be inherited
- which class etc etc

this is called Mixins

reference- 16_Oop_Part_6
*/
