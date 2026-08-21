function someFunction(){ //factory function which creates a class

return class{
constructor(){
this.x=10;
}
};
}

class bbb extends someFunction(){
constructor(){
super();
this.y=20;
}
}

let b = new bbb();
console.log(b);


/*
- bbb extends a class dynamically if we add if else based class return
- here "class bbb extends someFunction()", someFunction won't extend... someFunction will be called and its returned class will get extended.

- so someFunction() is like factory function "jo kuch bana k deta hai"
- usne ek class bana k diya
- and bbb class ne uss class ko extends kiya jo factory function ne return kiya hai
*/