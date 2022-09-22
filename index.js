const obj = { name: "Rasel", age: 30 };

// Object.defineProperty(obj, "name", {
//   enumerable: false,
// });
Object.defineProperties(obj, {
  name: {
    enumerable: false,
    writable: true,
  },
  age: {
    enumerable: false,
  },
});
console.log(Object.keys(obj)); // []
