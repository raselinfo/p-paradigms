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

//  To extend/inherit we can create an Extend Function
function extend(child, parent) {
    // Inherit Shape class property
    child.prototype = Object.create(parent.prototype)
    //  Best Practice: Whenever you update any class prototype  you should reset that class constructor as wall.
    child.prototype.constructor = Circle
}

Circle.prototype.draw = function () {
    console.log("draw")
}
const c1 = new Circle(1, "red")

console.log(c1)