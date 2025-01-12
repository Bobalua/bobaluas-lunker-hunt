import fs from "fs";
// const fs = require("fs");
// import * as fs from "node:fs/promises";


try {
    const data = fs.readFileSync('src/state.json', 'utf8');
    
    console.log(data);

    const state = JSON.parse(data);

    console.log(state);

    if (state.boatsPresent <= 9) {
        state.boatsPresent += 1
    } else {
        state.boatsPresent = 0
    }
        
    const lookingFor = 'islandName';
    if (lookingFor in state) {
        console.log(`island is named ${state}`);
    } else {
        console.log(`this island has no name`);
    }

    fs.writeFileSync('src/state.json', JSON.stringify(state, null, 2));

} catch (err) {
    console.error(err);
}