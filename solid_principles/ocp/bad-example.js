// Bad Example: Modifying existing code to add new functionality

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class AreaCalculator {
    calculate(shapes) {
      let totalArea = 0;
      shapes.forEach(shape => {
        if (shape instanceof Rectangle) {
          totalArea += shape.area();
        }
        // What if we need to add a new shape?
      });
      return totalArea;
    }
  }
  