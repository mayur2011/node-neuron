const readline = require("readline");
const lineReader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

lineReader.question("Enter your name :",function(line){
console.log(line);
lineReader.close();
});


/*
- "lineReader.question" this works in Async mode
- Question name funciton is there which is getting two arguments 
- This is not multi-threading because Java-Script is strictly single-threaded
- then how things are happening in parallel - To be learned later

IMP:
***Callback function***:
------------------------
- passing address of a funtion to be notified when actual task is completed ...please call this function. Because I am going ahead with other work.

*/