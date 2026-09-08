const person ={
	name : 'Ram Singh',
	id : 101
}

Object.freeze(person);

person.name = 'Dr Ram Singh'
person.age = 31;

console.log(person);