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
console.log("Whatchu' gonna do? Fish?");

const playerInventory = new PlayerInventory();
playerInventory.add("fishing pole");

// TODO add freshwater hamachi as super rare fish so Bagelo feels like part of the team
const fishList = ["bluegill", "largemouth bass", "sunfish",
    "crappie", "perch", "northern pike", 
    "king salmon", "northern muskie", "carp", 
    "walleye"];

let purse = 0;

while (true) {
    const inputs = (await rl.question("> "));
    const command = inputs;
    if (command == "fish")  {
        const randomNum = random(10);
        console.log("You caught a " + fishList[randomNum] + "!");
        playerInventory.add(fishList[randomNum]);
    } else if (command == "inventory") {
       //TODO display purse contents to player
       //TODO put shop interactions into its own while loop
        console.log(playerInventory.list());
    } else if (command == "shop") {
        console.log("Welcome to Flesh and Fin!");
        const shopAnswer = (await rl.question("What would you like to sell me today?"));
        let inventoryCheck = playerInventory.remove(shopAnswer);
        if (inventoryCheck == true) {
            purse = (purse + 10);
            console.log("10 coins is the best I can do for that one.")
        } else {
            console.log("Funny.  What do you really want to sell me?");
        }
    }
}

function random(max) {
    return Math.floor((Math.random() * max));
}