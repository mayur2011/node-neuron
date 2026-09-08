for(var i=0;i<10;i++){
console.log(i);
}

console.log(i);

/*
One place this works particularly well is when we are creating a variable to use in a for loop. Since var is function scoped it does not create a value that stays inside the loop.
*/