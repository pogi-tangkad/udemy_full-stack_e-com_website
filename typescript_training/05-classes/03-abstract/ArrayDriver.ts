import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./AbShape";

let myCircle = new Circle(5, 10, 12);
let myRectangle = new Rectangle(21, 34, 8, 9);

let theShapes: Shape[] = [];


theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape);
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea().toFixed(2));
    console.log();
}
