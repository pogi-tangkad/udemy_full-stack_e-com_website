import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(theX: number, theY: number, private _width: number, private _height: number){
        super(theX, theY);
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, height=${this._height}`;
    }
}