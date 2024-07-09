// Object-Oriented Programming (OOP) Concepts: Inheritance

// Theory:
// - Inheritance is a mechanism where one class (child/subclass) inherits properties and methods from another class (parent/superclass).
// - It promotes code reusability and establishes a relationship between classes.

// Example:

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call the constructor of the parent class
        this.breed = breed;
    }

    // Method overriding
    makeSound() {
        console.log(`${this.name} barks.`);
    }

    displayBreed() {
        console.log(`${this.name} is a ${this.breed}.`);
    }
}

// Create an object of the Dog class
const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.makeSound();  // Output: Buddy barks.
myDog.displayBreed();  // Output: Buddy is a Golden Retriever.
