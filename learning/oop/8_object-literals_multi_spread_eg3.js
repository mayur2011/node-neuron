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

- k is not pointing to address which is pointed by someFunction
k is pointing to new function type object which is created using bind.

And if we are calling k(); 
k jisko point karra hai usko call kiya toh wo jo k me jiss object ka address hai, wo jiske sath bound hai wo wala function chal jayenga, toh iski wajah se someFunction chal jayenga




*/