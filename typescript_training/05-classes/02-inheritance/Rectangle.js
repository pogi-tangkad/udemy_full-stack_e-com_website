
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, _width, _height) {
        super(theX, theY);
        this._width = _width;
        this._height = _height;
    }
    getInfo() {
        return super.getInfo() + `, width=${this._width}, height=${this._height}`;
    }
}
exports.Rectangle = Rectangle;
