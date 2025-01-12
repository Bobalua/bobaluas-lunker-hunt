import { stdin, stdout } from "process";
import * as readline from 'node:readline/promises';
import PlayerInventory from "./inventory.js";
import fs from "fs";

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

let state;

 try {
    fs.accessSync('src/state.json', fs.constants.W_OK);
    //now that I have a readfile outside of this scope, I think this could be changed to an access check
    // const data = fs.readFileSync('src/state.json', 'utf8');
    // const state = JSON.parse(data);
    // state.hamachi = 'hamachi'; //If the state file exists, this will overwrite existing values
    // state.leaderboard = [];    //Pretty sure this can be deleted
    // console.log(state); //debug
 } catch (err) {
    console.error('Here we go...', err);
    const initialState = { hamachi: 'hamachi', leaderboard: []};
    fs.writeFileSync('src/state.json', JSON.stringify(initialState, null, 2));
    // console.log(err);//debug
 }
try {
    const data = fs.readFileSync('src/state.json', 'utf8');
    state = JSON.parse(data);
} catch (err) {
    console.error('Unexpected Error. Goodbye', err);
    process.exit(1);
}



console.log("Welcome to Bobalua's Lunker Hunt!");
console.log("What is your name?");

let playerName = (await rl.question("> ")) || 'fisher';

console.log("You only got 30 days to get off this here island.");
console.log("Whatchu' gonna do, " + playerName + ". Cast?");

const playerInventory = new PlayerInventory(); 
playerInventory.add("fishing pole");

const fishList = ["bluegill", "largemouth bass", "sunfish",
    "crappie", "perch", "northern pike", 
    "king salmon", "carp", 
    "walleye", state.hamachi];
// TODO make fish into objects
// TODO make quality tiers
    // TODO quality tiers can be expressed as multipliers
let daysRemaining = 1;//changed for debugging
let castsToday = 0;
let purse = 69420;//changed for debugging

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
    } else if ( command == "days remaining") {
        console.log(daysRemaining);
    } else if ( command == "casts remaining") {
        console.log(7 - castsToday);
    }
}

// TODO ask player if they would like to play again
    // -rl.question
    // -'no' will exit program
    // -'yes' will reset inventory, days remaining, and purse and return to 
    //      log from beginning of game
if (daysRemaining == 0) {
    let playerScore = (purse - 100);
    if (playerScore > 0) {
        state.leaderboard.push(playerName, playerScore);
        state.leaderboard.splice();
        state.leaderboard.sort((a,b) => b - a);
        //will need to figure out how to sort just based on the odd number indexing
        //(or a different method of storing the scoreboard)
        //possibly just scores and no names
    } else if (playerScore <= 0) {
        state.hamachi = playerName;
    }
}

fs.writeFileSync('src/state.json', JSON.stringify(state, null, 2));

    console.log("Time's up! If you don't have 100 coins, I'll give you fins!");
if (purse >= 100) {
    console.log("Lucky. Take this raft and get the hell off my island.");
    console.log('Game Over');
    console.log(state.leaderboard);
} else {
    console.log("I hope you can swim. You are going to be here for a long time");
    console.log("YOU ARE NOW A FISH! GAME OVER!");
    console.log(state.leaderboard);
}

let endQuestion = await rl.question('Would you like to play again?');
if (endQuestion == 'no') {
    process.exit(0);//I thought process was a global object?  Unsure about this problem
} else if (endQuestion == 'yes') {
    reset();
    //Still need to figure out how to return to the top of that application should the user want to play again
}

function random(max) {
    return Math.floor((Math.random() * max));
}

function reset() {
    purse = 0;
    daysRemaining = 30;
    castsToday = 0;
    playerInventory.empty();
    playerInventory.add('fishing pole');
}
 //cannot figure out why this is throwing an error