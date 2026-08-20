function someFunc(g){
	console.log(g);
}

var k=someFunc.bind(undefined, "great");
console.log(k);
k();

/*
Internally iski "someFunc.bind(undefined,"")" ki wajah se ek object banega jisko variable "k" point karenga, uss object k against essa code hai... ki someFunc call hojaye and param "great" pass ho jaye. Or wo kissi object "undefined" k liye nhi chalenga.

if instead of undefined some object address would have been there then it supposed to run for an object.

- This is independent function it has nothing to do with any object.

- so we created a bound function

- whenever that bound function gets called

- bound function will call that function with which it was bind with argument

- bound function has all details like
	- which function should execute exactly
	- for which object it should run
	- and what should get passed as arguments

So "for which object it should run" has got undefined because its an idependent func but yes what should get passed ..so that is "great".


Use-case: straight away it won't be used
but to build a framework or library then it will be used


*/