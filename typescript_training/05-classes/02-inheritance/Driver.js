"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 8);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(33, 31, 9, 4);
console.log(myRectangle.getInfo());
