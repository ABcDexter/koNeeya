import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

//let myShape = new Shape(10,15); // You cannot create an instance of an Abstract Class

let myCircle = new Circle(5,10,20);

let myRectangle = new Rectangle(0,0,4,3);

//array of Shapes
let theShapes: Shape[] = [];

// add the shapes inside te array 
theShapes.push(myCircle);
theShapes.push(myRectangle);

console.log("Iterator over shapes\n\n");
for(let iter of theShapes){
    console.log(iter.getInfo());
    console.log(`area is ${iter.calculateArea()}`);
}