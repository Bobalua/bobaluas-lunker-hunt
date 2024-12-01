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

const fishList = ["bluegill", "bass", "sunfish",
    "crappie", "perch", "pike", 
    "salmon", "muskellunge", "carp", 
    "walleye"];


while (true) {
    const inputs = (await rl.question("> "));
    const command = inputs;
    if (command == "fish")  {
        const randomNum = random(10);
        console.log("You caught a " + fishList[randomNum] + "!");
        playerInventory.add(fishList[randomNum]);
    } else if (command == "inventory") {
        console.log(playerInventory.list());
    }
}

function random(max) {
    return Math.floor((Math.random() * max));
}