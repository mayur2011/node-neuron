let a={
	someFunction(g){
		console.log(g);
	}
};

a.someFunction("Great");
a.someFunction.call(a, "Cool"); 



/*
Notes:
- What is someFunction in this example?
Ans: Technically, someFunction is a pointer which points to a Function type object.

Also in that function type object, there is a function named "call"
a.someFunction.call(address of an object, arguments);
example:
a.someFunction.call(a, "Cool");

Now, What will Call named function do?
Ans: It will execute actual someFunction instructions and while executing ...that this will have value = given object address.

IMP: this concept will be used in future, in one of the algorithm scenario.


*/