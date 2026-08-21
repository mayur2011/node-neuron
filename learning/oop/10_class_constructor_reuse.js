const c = {
	l(message){
		console.log(message);
	}
};

class Employee {

constructor(n){
this.name=n;
}
}

var a=new Employee("Rajesh");
c.l(a.name);

var b=new a.constructor("Gopal");
c.l(b.name);

c.l(a==b); // two different objects
c.l(a instanceof Employee);
c.l(b instanceof Employee);

/*
- On the basis of a'constructor, we can create new object.
- a, already an object
- 


*/