"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
var myCoachArray = [];
myCoachArray.push(myCricketCoach);
myCoachArray.push(myGolfCoach);
for (var _i = 0, myCoachArray_1 = myCoachArray; _i < myCoachArray_1.length; _i++) {
    var tempCoach = myCoachArray_1[_i];
    console.log(tempCoach.getDailyWorkout());
    console.log();
}
