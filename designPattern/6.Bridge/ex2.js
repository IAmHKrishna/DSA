// Implementor Interface
class Renderer {
    renderShape(shape) {
        throw new Error("renderShape() must be implemented");
    }
}

// Concrete Implementations
class SVGRenderer extends Renderer {
    renderShape(shape) {
        console.log(`Rendering ${shape.name} as an SVG.`);
    }
}

class CanvasRenderer extends Renderer {
    renderShape(shape) {
        console.log(`Rendering ${shape.name} on a Canvas.`);
    }
}

// Abstraction
class Shape {
    constructor(renderer) {
        this.renderer = renderer;
    }

    draw() {
        throw new Error("draw() must be implemented");
    }
}

// Refined Abstractions
class Circle extends Shape {
    constructor(renderer, radius) {
        super(renderer);
        this.radius = radius;
        this.name = "Circle";
    }

    draw() {
        this.renderer.renderShape(this);
    }
}

class Rectangle extends Shape {
    constructor(renderer, width, height) {
        super(renderer);
        this.width = width;
        this.height = height;
        this.name = "Rectangle";
    }

    draw() {
        this.renderer.renderShape(this);
    }
}


const svgRenderer = new SVGRenderer();
const canvasRenderer = new CanvasRenderer();

const circle1 = new Circle(svgRenderer, 10);
circle1.draw(); // ✅ Rendering Circle as an SVG.

const rectangle1 = new Rectangle(canvasRenderer, 20, 30);
rectangle1.draw(); // ✅ Rendering Rectangle on a Canvas.

const circle2 = new Circle(canvasRenderer, 40);
circle2.draw(); // ✅ Rendering Circle on a Canvas.