//  Let's create a Circle class. 
//  Shape class property member inherit by Circle class

function Shape(color) {
    this.color = color
}
Shape.prototype.duplicate = function () {
    console.log("duplicate")
}

function Circle(radius, color) {
    // Shape(color) it's bind the color with window object
    // new Shape(color) {color:undefined}
    // this.color = new Shape(color).color 
    Shape.call(this, color)
    this.radius = radius
}


// Inherit Shape class property
Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.name = "Rasel"

//  Best Practice: Whenever you update any class prototype  you should reset that class constructor as wall.
Circle.prototype.constructor = Circle

Circle.prototype.draw = function () {
    console.log("draw")
}
const c1 = new Circle(1, "red")

console.log(c1)