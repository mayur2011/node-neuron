function someFunction(a,b,c){
	console.log("Cool", a,b,c);
}

setTimeout(someFunction,2000,10,20,"Good");
console.log("Great");