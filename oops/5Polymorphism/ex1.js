// Polymorphism
// Polymorphism allows objects of different classes to be treated as objects of a common superclass.
//  It allows methods to behave differently based on the object that invokes them.

// In JavaScript, polymorphism is achieved through method overriding and method
//  overloading (though method overloading is less common).

class Shape {

    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

const shapes = [new Circle(5), new Rectangle(10, 20)];

shapes.forEach(shape => {
    console.log(shape.area());
});
