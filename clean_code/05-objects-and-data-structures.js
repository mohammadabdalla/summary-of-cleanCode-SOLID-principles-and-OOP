// Examples of encapsulation and data structures

// Good example
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name}'s salary is $${this.salary}`;
    }
}

// Bad example
class Stuff {
    constructor(name, salary) {
        this.employeeName = name;
        this.employeeSalary = salary;
    }
}
