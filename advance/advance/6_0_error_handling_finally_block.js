let a = process.argv[2]
try{
if(a=="Good") b=20;
console.log(b);
}catch(error){
console.log(error.message);
}finally{
console.log("The end");
}



/*
- finally block will always gets executed
*/