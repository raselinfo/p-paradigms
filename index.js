function Circle() {
  let _ratio = { x: 0, y: 0.5 };
  this.getRatio = () => {
    return _ratio;
  };
  this.setRatio = (value) => {
    return (_ratio = value);
  };
}

const circle=new Circle()
console.log(circle.getRatio())

// Abstraction with define property
function Circle() {
  let _ratio = { x: 0, y: 0.5 };

  Object.defineProperty(this, "getRatio", {
    get() {
      return _ratio;
    },
    set(value) {
      return (_ratio = value);
    },
  });
}

const circle = new Circle();
console.log(circle.getRatio);
console.log((circle.getRatio = { x: 10, y: 2 }));
