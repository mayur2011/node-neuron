let a={
	someFunction(g){
		console.log(g);
	}
};

console.log(a.someFunction);

let k = a.someFunction.bind(a, "Great"); // this statement will not execute the function
k();

console.log(k);

/*
- a new function address is returned which will get stored into varible k

So basically dynamically one function got created because of using "bind",
and that function address is returned
which is assigned a variable k

*/