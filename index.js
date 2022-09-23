function Circle(radius) {
  // Instance Member
  this.radius = radius;
}

// Prototypical member
Circle.prototype.draw = () => {
  console.log("Draw", this.radius);
};

Circle.prototype.toString = function () {
  return "Update To String Method";
};

const c1 = new Circle();
console.log(c1)
