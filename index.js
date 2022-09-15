const circle = {
  radius: 4,
  draw() {
    console.log("Draw");
  },
};

const circle2 = {
  radius: 4,
  draw() {
    console.log("Draw");
  },
};
// if the object has one or more object , it's call "Behavior"
// Factory Function : The Factory Function is similar to constructor functions/class functions, but instead of using new to create an object, factory functions simply creates an object and returns it. Factory Functions are a very useful tool in JavaScript

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw");
    },
  };
}
