class Rectangle {
constructor(length, breadth){
this.length = length;
this.breadth = breadth;
}
}
class Box extends Rectangle {
constructor(length, breadth,height) {
super(length,breadth);
this.height=height;
}
}

console.log("*********** Object of Rectangle Class ***********");
var r = new Rectangle(10,20);
console.log(r);
console.log("*********** Object of Box Class ***********");

var b = new Box(10,2,30);
console.log(b);