"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
//let myShape = new Shape(10,15); // Abstract class cannot be instantiated
//console.log(myShape.getInfo());
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
//array of Coaches
let theCoaches = [];
// add the shapes inside te array 
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
console.log("Iterator over shapes\n\n");
for (let iter of theCoaches) {
    console.log(`Training = ${iter.getDailyWorkout()}`);
}
