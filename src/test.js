const fishList = ["bluegill", "bass", "sunfish",
         "crappie", "perch", "pike", 
         "salmon", "muskellunge", "carp", 
         "walleye"];

for (let i=0; i < 20; i++) {
    const randomNum = random(10);
    // console.log(fishList[randomNum]);
    if (randomNum == 0) {
        console.log("bluegill");
    }else if (randomNum == 1) {
        console.log("bass");
    }
}

function random(max) {
    return Math.floor((Math.random() * max));
}











