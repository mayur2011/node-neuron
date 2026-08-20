let a={
	x:10,
	y:20
};

let b={
	p:100,
	q:200
};

let c={...a, ...b, z:300};
console.log(c);

let d=c;
d.z=400;

console.log(c);
console.log(d);

let e={...d, zz:500};
e.z=450;

console.log(e);