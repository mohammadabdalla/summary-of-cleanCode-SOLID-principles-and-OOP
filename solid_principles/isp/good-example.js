//Good example

class Worker {
    work() {
      console.log("Working");
    }
  }
  
  class Eater {
    eat() {
      console.log("Eating");
    }
  }
  
  // Base class
  class Entity {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Human class implements both work and eat functionalities
  class Human extends Entity {
    constructor(name) {
      super(name);
      this.worker = new Worker();
      this.eater = new Eater();
    }
  
    work() {
      this.worker.work();
    }
  
    eat() {
      this.eater.eat();
    }
  }
  
  // Robot class implements only the work functionality
  class Robot extends Entity {
    constructor(name) {
      super(name);
      this.worker = new Worker();
    }
  
    work() {
      this.worker.work();
    }
  }
  
  // Usage
  const human = new Human("John");
  human.work(); // Output: Working
  human.eat();  // Output: Eating
  
  const robot = new Robot("Robo");
  robot.work(); // Output: Working
  // robot.eat(); // Error: robot.eat is not a function
  