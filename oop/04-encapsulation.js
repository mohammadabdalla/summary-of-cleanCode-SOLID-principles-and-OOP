// Object-Oriented Programming (OOP) Concepts: Encapsulation

// Theory:
// - Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit (class).
// - It restricts direct access to some of an object's components, which is a means of preventing accidental interference and misuse of the data.
// - Access to the data is typically provided through getter and setter methods.
// - When a class inherits from another class, it cannot directly access the private properties of the parent class. It must use the public getter and setter methods provided by the parent class to access or modify the data.

// Example:

class Person {
    constructor(name, age) {
        this._name = name;  // Private property convention (underscore)
        this._age = age;    // Private property convention (underscore)
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log('Name cannot be empty.');
        }
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log('Age must be positive.');
        }
    }
}

// Subclass Employee inherits from Person
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);  // Call the constructor of the parent class
        this.position = position;
    }

    // Method to display employee details
    displayEmployeeInfo() {
        // Accessing parent class properties using getter methods
        console.log(`Name: ${this.name}, Age: ${this.age}, Position: ${this.position}`);
    }

    // Method to update employee name
    updateEmployeeName(newName) {
        // Using the setter method of the parent class
        this.name = newName;
    }
}

const employee = new Employee('Alice', 28, 'Developer');
employee.displayEmployeeInfo();  // Output: Name: Alice, Age: 28, Position: Developer

// Attempting to directly access the private properties of the parent class (not allowed)
// console.log(employee._name);  // Error: Cannot access '_name' directly
// console.log(employee._age);   // Error: Cannot access '_age' directly

// Accessing and modifying properties using getter and setter methods
console.log(employee.name);  // Output: Alice
employee.updateEmployeeName('Bob');
console.log(employee.name);  // Output: Bob

// Demonstrating encapsulation by preventing invalid data
employee.age = -5;  // Output: Age must be positive.
console.log(employee.age);  // Output: 28
