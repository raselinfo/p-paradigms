const x = {};
const y = {};

const result = Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
console.log(result) // true; Because x and y are create from same object base
