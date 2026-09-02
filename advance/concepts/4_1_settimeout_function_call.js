let count = 0;

function someFunction(){
	console.log("Cool");
	count++;
	if(count>3) console.log("Someway to stop - automatically");
	setTimeout(someFunction,2000)
}

setTimeout(someFunction,2000);
console.log("Great");