// Bad Example: One large interface

class Worker {
    work() {
      // working
    }
  
    eat() {
      // eating
    }
  }
  
  class Robot extends Worker {
    eat() {
      throw new Error("Robots don't eat!");
    }
  }
  