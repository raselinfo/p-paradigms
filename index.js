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

const keys = Object.keys(c1); // Object.keys only returns Instance/Own Member
console.log(c1.hasOwnProperty("draw")); // false

// for in loop can iterate th row instance and prototype member
for (key in c1) {
  console.log(key);
}
console.log("draw" in c1);
