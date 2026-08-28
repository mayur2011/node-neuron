console.log("-----* String TO Object *-----");
let a='{"from":"ramesh", "to":"suresh", "message": "Hello"}';
console.log(a);
console.log(typeof(a));

let b=JSON.parse(a);
console.log(b);
console.log(b.from);
console.log(b.to);
console.log(b.message);

console.log(typeof(b));

console.log("-----* Object to something??? *-----");
const k = {
"from":"ramesh",
"to":"suresh",
"message":"Hello"
};

console.log(k);
console.log(typeof(k));

let j = JSON.stringify(k);
console.log(j);
console.log(typeof(j));