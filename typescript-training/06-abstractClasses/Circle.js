"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    //    let pi:number = 3.14159265358979;
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
    }
    // get/set accessors ...
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + `, radius=${this._radius}`;
    }
    calculateArea() {
        return Math.round(Math.PI * this._radius * this._radius);
    }
}
exports.Circle = Circle;
