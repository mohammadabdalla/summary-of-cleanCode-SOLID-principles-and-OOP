// Object-Oriented Programming (OOP) Concepts: Classes and Objects

// Theory:
// - A class is a blueprint for creating objects (instances).
// - An object is an instance of a class, containing properties and methods defined by the class.

// Example:

// Define a class
class Animal {
    // Constructor method to initialize object properties
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    // Method to display animal details
    displayInfo() {
        console.log(`${this.name} is a ${this.type}.`);
    }
}

// Create an object of the Animal class
const dog = new Animal('Buddy', 'Dog');
dog.displayInfo();  // Output: Buddy is a Dog.
