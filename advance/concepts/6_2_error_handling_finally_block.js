function divide(x,y){
	if(y==0) throw new Error("Can't divide by zero");
	return x/y;
}

try{
let a=divide(Number(process.argv[2]),Number(process.argv[3]));
console.log(a);
}catch(error){
console.log(error.message);
}
