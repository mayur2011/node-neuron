class Employee{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

const employee = new Employee("John", 30);
console.log(employee.getName());
console.log(employee.getAge());
console.log(employee);

employee.city = "Mumbai";
console.log(employee.city);

console.log(employee);
