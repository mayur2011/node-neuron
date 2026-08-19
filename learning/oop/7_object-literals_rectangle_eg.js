let rectangle={
	length:20,
	breadth:2
};

let box={
	...rectangle,  //spread the rectangle features to get all his properties in derivce calss (box)
	height:3
}

console.log(rectangle);
console.log(box);


/*
Such a cool feature where you can spread the base class features with this syntax "...class-name"


*/