// Object-Oriented Programming (OOP) Concepts: Abstraction

// Theory:
// - Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of the object.
// - It helps in reducing programming complexity and effort.
// - Abstract classes cannot be instantiated directly. They are meant to be subclassed, and they often include abstract methods that must be implemented by subclasses.

// Example:

// Abstract class
class Vehicle {
    constructor(type) {
        if (this.constructor === Vehicle) {
            throw new Error("Cannot instantiate abstract class Vehicle.");
        }
        this.type = type;
    }

    startEngine() {
        throw new Error("Abstract method 'startEngine' must be implemented.");
    }
}

// Concrete class extending abstract class
class Car extends Vehicle {
    constructor(type, model) {
        super(type);
        this.model = model;
    }

    startEngine() {
        console.log(`The ${this.model} car's engine starts.`);
    }
}

const myCar = new Car('Sedan', 'Toyota');
myCar.startEngine();  // Output: The Toyota car's engine starts.
