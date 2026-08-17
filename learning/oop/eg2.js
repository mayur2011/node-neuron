class Rectangle{
constructor(length,breadth){
this.length=length;
this.breadth=breadth;
}
}

class Box extends Rectangle{
constructor(length,breadth,height){
super(length,breadth);
this.height=height;
}
}

var boxObj = new Box(10,2,30);
console.log(boxObj);
