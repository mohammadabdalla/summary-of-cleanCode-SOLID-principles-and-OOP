// Bad Example: Violating Liskov Substitution Principle

class Bird {
    fly() {
      console.log("Flying");
    }
  }
  
  class Ostrich extends Bird {
    fly() {
      throw new Error("Ostriches can't fly!");
    }
  }
  
  function makeBirdFly(bird) {
    bird.fly();
  }
  
  const ostrich = new Ostrich();
  makeBirdFly(ostrich); // Throws an error: "Ostriches can't fly!"
  