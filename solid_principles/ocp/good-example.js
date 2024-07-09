// Good Example: Extending code without modifying existing logic

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class AreaCalculator {
    calculate(shapes) {
      return shapes.reduce((total, shape) => total + shape.area(), 0);
    }
  }
  