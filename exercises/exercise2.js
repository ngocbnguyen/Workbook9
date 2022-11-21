class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let person1 = new Person("Ngoc", "Nguyen");
console.log(person1.getFullName());

class Employee extends Person {
  constructor(firstName, lastName, id, jobTitle, payRate) {
    super(firstName, lastName);
    this.id = id;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }
  getPayStub() {
    return `Employee Name: ${this.getFullName()}
Job Title: ${this.jobTitle}
Weekly Pay: $${this.payRate * 40}`;
  }
}
let employee = new Employee(
  "Ngoc",
  "Nguyen",
  1,
  "Software Development goddess lol",
  2000000
);
console.log(employee.getFullName());
console.log(employee.getPayStub());
