import { stdin, stdout } from "process";
import * as readline from 'node:readline/promises';
import PlayerInventory from "./inventory.js";

// 1. the question to be asked to the user
const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

console.log("Welcome to Bobalua's Lunker Hunt!");
console.log("You only got 30 days to get off this here island.");
console.log("Whatchu' gonna do? Cast?");

const playerInventory = new PlayerInventory();
playerInventory.add("fishing pole");

// TODO add freshwater hamachi as super rare fish so Bagelo feels like part of the team
const fishList = ["bluegill", "largemouth bass", "sunfish",
    "crappie", "perch", "northern pike", 
    "king salmon", "tiger muskie", "carp", 
    "walleye"];
let daysRemaining = 30;
let castsToday = 0;
let purse = 0;
// TODO add time element
    // 7 'casts' in a day
    // let castsToday = 0
    // 30 days 
    // let daysRemaining = 30
    // if the player has enough coins after 30 days, they can leave the island
    // if they don't have enough coins they become the rare fish for subsequent playthroughs
    // excess money is the players final score
// TODO create leaderboard
while (daysRemaining > 0) {
    const inputs = (await rl.question("> "));
    const command = inputs;
    if (command == "cast")  {
        if (castsToday < 8) {
            const randomNum = random(10);
            console.log("You caught a " + fishList[randomNum] + "!");
            playerInventory.add(fishList[randomNum]);
            castsToday = castsToday + 1;
        } else {
            daysRemaining = daysRemaining - 1;
            castsToday = 0;
            console.log("You ran out of daylight.\nTime to sleep on the beach like a bum.");
            console.log(daysRemaining + " days remaining. Go catch some fish!");
        }    
    } else if (command == "inventory") {
       // TODO make fishing return no fish and a message telling
            // the player why without fishing pole in inventory
        console.log(playerInventory.list());
        console.log(purse + " coins in your purse");
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