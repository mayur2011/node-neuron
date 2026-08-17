// Spread operator to expand out the numbers array into Math.max or Math.min

const numbers = [10,20,30,40,50,60,70,80,90,100];
console.log("Whole Array Numbers: \n", numbers);

const max = Math.max(...numbers);
console.log("Max Number is: ", max);

const min = Math.min(...numbers);
console.log("Min Number is: ", min);