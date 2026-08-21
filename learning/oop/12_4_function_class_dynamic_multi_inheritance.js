class aaa{
constructor(){
this.x=10;
}
}

/*
- below funtions takes a reference of a class and returns an anonymous class
Whenver below function runs, then it will return an anonymous class which will extends whatever is avaialble in the someClass (someClass will have dynamic reference of a class)
*/
function aFunction(someClass){
return class extends someClass{
constructor(){
super();
this.y=20;
}
};
}

/*
- an anonymous class will get created which will inherit to aaa class
- and this newly created anonymous class will be interited by class bbb
*/
class bbb extends aFunction(aaa){
constructor(){
super();
this.z=30;
}
}

let b = new bbb();
console.log(b);

/*
- aaa class is created
- aFunction takes a reference of a class and returns an anonymous class
- bbb class calls aFuction by passing the obj of aaa
- aFunction returns a class which inherits aaa class
****************************************************************************

But this is not what we wanted to achieve, We wanted to achieve following scenarios:

1. bbb class is getting used without bbb inheriting class aaa

2. bbb class is getting used where bbb inheriting class aaa


reference: 16_Oop
*/