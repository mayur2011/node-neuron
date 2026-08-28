let a = process.argv[2];
try
{
if(a=="Good") b=20;
console.log(b);
}catch(error){
console.log(error.message);
}
console.log(a);


/*
- when error will happen, try & catch implementatio will avoid crashing the application
- will go to end of try block
- 
*/
