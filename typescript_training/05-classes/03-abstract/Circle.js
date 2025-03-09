"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const AbShape_1 = require("./AbShape");
class Circle extends AbShape_1.Shape {
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
    }
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
        return (Math.PI * (this._radius ** 2));
    }
}
exports.Circle = Circle;
