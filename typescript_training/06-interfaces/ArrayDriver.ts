import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();


let myCoachArray: Coach[] = [];

myCoachArray.push(myCricketCoach);
myCoachArray.push(myGolfCoach);

for (let tempCoach of myCoachArray) {
    console.log(tempCoach.getDailyWorkout());
    console.log();
}