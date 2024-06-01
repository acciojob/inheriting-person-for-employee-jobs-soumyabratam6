// complete this js code
function Person(name, age) {
	this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}https://www.svgrepo.com/show/345223/three-dots-vertical.svg
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

// Do not change code below this line
const person = new window.Person('Alice', 25);
window.Person = Person;
const employee = new window.Employee('Bob', 30, 'Manager');
window.Employee = Employee;
