let rectangle={
	length:20,
	breadth:2
};

let box={
	...rectangle,
	height:3
};

let box2= box;  // object box address is assigned to box2, both box & box2 are now pointing to same
box2.height=100;
console.log(box);
console.log(box2);

// spread way can be used to create new object also

let box3= {...box};
box3.height=50;
console.log(box);
console.log(box2);
console.log(box3);


/*
let box2=box;  // same object address

let box3={...box}; // different object created with name box3 where properties of box is spread
*/