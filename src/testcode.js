import fs from "fs";
// const fs = require("fs");
// import * as fs from "node:fs/promises";


try {
    const data = fs.readFileSync('src/state.json', 'utf8');
    
    console.log(data);

    const state = JSON.parse(data);

    console.log(state);

    state.boatsPresent += 1;

    fs.writeFileSync('src/state.json', JSON.stringify(state, null, 2));


} catch (err) {
    console.error(err);
}



