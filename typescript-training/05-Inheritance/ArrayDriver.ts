import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10,15);

let myCircle = new Circle(5,10,20);

let myRectangle = new Rectangle(0,0,4,3);

//array of Shapes
let theShapes: Shape[] = [];

// add the shapes inside te array 
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

console.log("Iterator over shapes\n\n");
for(let iter of theShapes){
    console.log(iter.getInfo());
}