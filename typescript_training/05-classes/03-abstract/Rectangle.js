"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const AbShape_1 = require("./AbShape");
class Rectangle extends AbShape_1.Shape {
    constructor(theX, theY, _width, _height) {
        super(theX, theY);
        this._width = _width;
        this._height = _height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this.width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    getInfo() {
        return super.getInfo() + `, width=${this._width}, height=${this._height}`;
    }
    calculateArea() {
        return this._width * this._height;
    }
}
exports.Rectangle = Rectangle;
