class aaa{
constructor(){
this.x=10;
}
}

class bbb extends aaa{
constructor(){
super(); // necessary - this is rule, required only in derived class
this.y;
}
}

var m=new bbb();
console.log(m);