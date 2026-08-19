class aaa{
static x; // one copy of x will be maintained
constructor(a,b){
aaa.x = a;
this.y = b;
}
}

let a1 = new aaa(10,20);
console.log(a1);
console.log(aaa.x);
let a2= new aaa(555,666);
console.log(a2);
console.log(aaa.x);

/*
aaa { y: 20 }
aaa { y: 666 }

if you notice aaa object doesn't have x at all, x is a single copy which is stored someother place in memory.

Important point:
Whenever we need to have a common member (property or method) among the 100s of objects then we need to declatre that member (property or method) as static.
To access static member we need to use
class_name.static_member name as shown below:
aaa.x

*/


class bbb{
static z;
constructor(a,b){
this.z=a;
this.p=b;
}
}

let b1 = new bbb(85,65);
console.log(b1);
