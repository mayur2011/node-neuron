class PostCard{
constructor(from,to,message){
this.from=from;
this.to=to;
this.message=message;
}
};

let k = new PostCard("ramesh","suresh","Hello");
console.log(k);
console.log(typeof(k)+" --> "+k);

console.log(k.from+" -- "+k.to);

let a = JSON.stringify(k);
console.log(a);
console.log(typeof(a)+" --> "+a);
console.log(a.from);

let b = JSON.parse(a);
console.log(b);
console.log(typeof(b)+" --> "+b);
console.log(b.from);
console.log(b.message);
