const readline = require("readline");
const lineReader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

lineReader.question("Enter your name :",function(line){
console.log(line);
lineReader.close();
});

console.log("This is really a cool thing");