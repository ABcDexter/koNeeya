import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

//let myShape = new Shape(10,15); // Abstract class cannot be instantiated
//console.log(myShape.getInfo());

let myCircle = new Circle(5,10,20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0,0,4,3);
console.log(myRectangle.getInfo());
