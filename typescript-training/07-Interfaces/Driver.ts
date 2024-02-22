import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

//let myShape = new Shape(10,15); // Abstract class cannot be instantiated
//console.log(myShape.getInfo());

let myCricketCoach = new CricketCoach();

let  myGolfCoach = new GolfCoach();

//array of Coaches
let theCoaches: Coach[] = [];

// add the shapes inside te array 
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

console.log("Iterator over shapes\n\n");
for(let iter of theCoaches){
    console.log(`Training = ${iter.getDailyWorkout()}`);
}
