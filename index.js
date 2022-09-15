// Constructor Function
function Circle(radius) {
//   console.log(this);
  this.radius = radius;
  this.draw = () => {
    console.log("Draw");
  };
}

// Circle.call({}, 5);  it's only return an object if return this from the Constructor function
// Circle.apply({}, 5); it's only return an object if return this from the Constructor function
// Circle.bind({}, 5); it's only return an object if return this from the Constructor function
const circle = new Circle(5);  // new keyword make an empty object {}
console.log(circle)

