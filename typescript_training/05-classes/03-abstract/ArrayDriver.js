"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 12);
let myRectangle = new Rectangle_1.Rectangle(21, 34, 8, 9);
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape);
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea().toFixed(2));
    console.log();
}
