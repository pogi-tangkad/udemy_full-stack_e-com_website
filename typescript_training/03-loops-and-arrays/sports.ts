let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Soccer"];

for (let i: number = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

for (let tempSport of sportsOne) {
    if (tempSport == "Cricket") {
        console.log(`My least favorite sport is ${tempSport}`);
    }else{
        console.log(tempSport);
    }
}