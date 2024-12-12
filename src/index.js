import { stdin, stdout } from "process";
import * as readline from 'node:readline/promises';
import PlayerInventory from "./inventory.js";

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

console.log("Welcome to Bobalua's Lunker Hunt!");
console.log("What is your name?");

let name = (await rl.question("> ")) || 'fisher';

console.log("You only got 30 days to get off this here island.");
console.log("Whatchu' gonna do, " + name + ". Cast?");

const playerInventory = new PlayerInventory(); 
playerInventory.add("fishing pole");

const fishList = ["bluegill", "largemouth bass", "sunfish",
    "crappie", "perch", "northern pike", 
    "king salmon", "tiger muskie", "carp", 
    "walleye"];
// TODO make fish into objects
// TODO make quality tiers
    // TODO quality tiers can be expressed as multipliers
let daysRemaining = 30;
let castsToday = 0;
let purse = 0;
    // if they don't have enough coins they become the rare fish for subsequent playthroughs
    // excess money is the players final score
// TODO create leaderboard
while (daysRemaining > 0) {
    const inputs = (await rl.question("> "));
    const command = inputs;
    if (command == "cast")  {
        if (playerInventory.has("fishing pole") == false) {
            console.log("How are you supposed to fish without a fishing pole you idiot?");
            console.log(".\n.\n.\n.\n.");
            console.log("You made a new one, but it took the whole day.");

            
            if (playerInventory.add("fishing pole") == false) {
                playerInventory.empty();
                console.log("All the fish you had have spoiled. Nice work.");
                playerInventory.add("fishing pole");
            }

            castsToday = 8; 
        }
        if (castsToday < 8) {
            const randomNum = random(10);
            console.log("You caught a " + fishList[randomNum] + "!");
            // playerInventory.add(fishList[randomNum]);
            if (playerInventory.add(fishList[randomNum]) == false) {
                console.log("You can't hold any more fish.\nGotta throw it back.")
            }
            castsToday = castsToday + 1;
        } else {
            daysRemaining = daysRemaining - 1;
            castsToday = 0;
            console.log("You ran out of daylight.\nTime to sleep on the beach like a bum.");
            console.log(daysRemaining + " days remaining. Go catch some fish!");
        }  
    // TODO inventory capacity 
        // TODO inform player when they reach limit
        // TODO do not add fish when they are at inventory limit      
    } else if (command == "inventory") {
        console.log(playerInventory.list());
        console.log(purse + " coins in your purse");
    // TODO have price variations that change by the day.
    } else if (command == "shop") {
        console.log("Welcome to Flesh and Fin! ");
        let shopkeepQuestion = "What would you like to sell me today? ";
        while (true) {
            const shopAnswer = (await rl.question(shopkeepQuestion));
            if (shopAnswer == "nothing") {
                break;
            }
            let inventoryCheck = playerInventory.remove(shopAnswer);
            if (inventoryCheck == true) {
                purse = (purse + 10);
                console.log("10 coins is the best I can do for that one.")
            } else {
                console.log("Funny.  What do you really want to sell me?");
            }
            shopkeepQuestion = "What else? ";
        }

        console.log('Bye bitch');
    }
}
// TODO give player final score and show leaderboard
// TODO ask player if they would like to play again
console.log("Time's up! If you don't have 100 coins, I'll give you fins!");
if (purse >= 100) {
    console.log("Lucky. Take this raft and get the hell off my island.");
} else {
    console.log("I hope you can swim. You are going to be here for a long time");
    console.log("YOU ARE NOW A FISH! GAME OVER!");
}
function random(max) {
    return Math.floor((Math.random() * max));
}