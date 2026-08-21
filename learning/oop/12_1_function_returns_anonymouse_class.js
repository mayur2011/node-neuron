function someFunc(){

// returning anonymous
return class{
constructor(){
this.x=10;
}
};
}

var a=someFunc();
var b=new a();

console.log(b);

/*
- returns address of anonymous class
- 
*/