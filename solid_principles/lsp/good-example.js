// Good Example: Adhering to Liskov Substitution Principle

class Bird {
    // Bird class doesn't assume all birds can fly
  }
  
  class FlyingBird extends Bird {
    fly() {
      console.log("Flying");
    }
  }
  
  class Ostrich extends Bird {
    // Ostrich doesn't need a fly method
  }
  
  function makeBirdFly(bird) {
    if (bird instanceof FlyingBird) {
      bird.fly();
    }
  }
  
  const ostrich = new Ostrich();
  const sparrow = new FlyingBird();
  makeBirdFly(sparrow); // Works fine
  makeBirdFly(ostrich); // Doesn't try to fly
  