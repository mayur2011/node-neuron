const k={
"from": "ramesh",
"to": "suresh",
"message" : "Hello"
};

console.log(typeof(k)," --> ", k);

let a = JSON.stringify(k);

console.log(typeof(a)," --> ", a);

let b = JSON.parse(a);
console.log(typeof(b)+" --> "+ b);

console.log(b.from);
console.log(b.to);
console.log(b.message);