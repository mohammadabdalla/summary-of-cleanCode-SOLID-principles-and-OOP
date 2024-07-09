// Object-Oriented Programming (OOP) Concepts: Polymorphism

// Theory:
// - Polymorphism allows objects of different classes to be treated as objects of a common superclass.
// - It enables a single interface to represent different underlying forms (data types).
// - Method overriding is a form of polymorphism where a subclass provides a specific implementation of a method already defined in its superclass.

// Example:

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} meows.`);
    }
}

// Polymorphic function
function makeAnimalSound(animal) {
    animal.makeSound();
}

const myDog = new Dog('Buddy');
const myCat = new Cat('Whiskers');

makeAnimalSound(myDog);  // Output: Buddy barks.
makeAnimalSound(myCat);  // Output: Whiskers meows.
