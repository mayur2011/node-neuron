/*
Tried to achieve multiple inheritance use-case dynamically which doesn't exist in actual
*/

aaa=(someClass) => class extends someClass{
constructor(){
super();
console.log("returning anonymouse class with property:x");
this.x=10;
}
}

bbb=(someClass) => class extends someClass{
constructor(){
super();
console.log("returning anonymouse class with property:y");
this.y=20;
}
}

class ccc extends bbb(aaa(Object)){
constructor(){
super();
console.log("class ccc with property:x,y,z");
this.z=30;
}
}

class ddd extends bbb(Object){
constructor(){
super();
this.z=50;
}
}

let c = new ccc();
console.log(c);
let d = new ddd();
console.log(d);


/*
- Tried to achieve multiple inheritance
- Best part is bbb class doesn't have any burdon that it extends aaa
- The core part that "Whom should be inherited by bbb" is what made dynamic in this code.
- 
- 

*/