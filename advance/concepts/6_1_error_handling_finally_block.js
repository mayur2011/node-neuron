function divide(x,y){
	if(y==0) throw new Error("Can't divide by zero");
	return x/y;
}

try{
let a=divide(10,0);
console.log(a);
}catch(error){
console.log(error.message);
}
