import { argv } from "process";
import { stdin, stdout } from "process";
import * as fs from "node:fs/promises";
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

let fishSwitch = true;
while (true) {
    const inputs = (await rl.question("> "));
    const command = inputs;
    if (command == "fish" && fishSwitch == true)  {
        fishSwitch = false;
        console.log("Nothing this time!");
    }else if (command == "fish" && fishSwitch == false) {
        fishSwitch = true;
        playerInventory.add("bluegill");
        console.log("You caught a bluegill!");
    }else if (command == "inventory") {
        console.log(playerInventory.list());
    }
}

