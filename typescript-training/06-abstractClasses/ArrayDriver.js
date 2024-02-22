"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
//let myShape = new Shape(10,15); // You cannot create an instance of an Abstract Class
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 4, 3);
//array of Shapes
let theShapes = [];
// add the shapes inside te array 
theShapes.push(myCircle);
theShapes.push(myRectangle);
console.log("Iterator over shapes\n\n");
for (let iter of theShapes) {
    console.log(iter.getInfo());
    console.log(`area is ${iter.calculateArea()}`);
}
