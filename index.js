const _radius = Symbol()
const _draw = Symbol()
class Circle {

    constructor(radius) {
        this[_radius] = radius
    }

    // Instance Member
    [_draw]() {
        console.log((Number(this._radius) + 5))

    }

}

const obj = new Circle(5)
console.log(obj)

// Object.getOwnPropertySymbols(obj)