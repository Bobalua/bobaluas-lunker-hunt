// This is purely a playground for me to play around with the concepts of classes and objects



// TODO mess with getters and setters

class Animal {
    constructor (_name, _color, _sound, _dangerToHumanity, _numberOfLegs) {
        this.name = _name;
        this.color = _color;
        this.sound = _sound;
        this.dangerToHumanity = _dangerToHumanity;
        this.dangerToHumanity = false;
        this.numberOfLegs = _numberOfLegs
    }

    isThisDangerous() {
        if (this.dangerToHumanity == true) {
            console.log("of course you silly billy");
        } else {
            console.log("You should be fine. But trust no one.");
        }
    }
    // conceptually, this should be outside of the class, as it has instance properties called.
        lieDetector() {
        if (snake.dangerToHumanity == false) {
            console.log("You are a liar");
            snake.dangerToHumanity = true;
            console.log("They are everywhere");
            console.log("They will always be a danger to humanity");
            } else {
                console.log("good to go");
            }
    }    
}

class Cryptid extends Animal {
    constructor (_name, _color, _sound, _dangerToHumanity,_numberOfLegs, _exists) {
        super (_name, _color, _sound, _dangerToHumanity, _numberOfLegs)
        this.exists = _exists;
    }
    doesThisExist() {
        if (this.exists == true) {
            console.log("This is a real animal");
        } else {
            console.log("This is not a real animal");
        }
    }
    isThisDangerous() {
        // super.isThisDangerous(); 
        console.log("BigFoot isn't real you dummy");
        }
    }
let dog = new Animal("Charley", "gold", "woof", false, 4);

let snake = new Animal("who cares", "danger color", "danger sound", true, 0);

let bigFoot = new Cryptid("bigfoot", "brown", "sensual bellowing", false, 2, false);

console.log("Is " + dog.name + " a danger to humanity?");
if (dog.dangerToHumanity == true) {
    console.log("Sure is.")
} else {
    console.log("No way, Jose!")
}

console.log("Snake's name is " + snake.name);
console.log(`Snake's color is ${snake.color}`);
console.log("snake's sound is " + snake.sound );
console.log("Is " + snake.name + " a danger to humanity?")
if (snake.dangerToHumanity == true) {
    console.log("duh")
} else {
    console.log("nah")
}
snake.lieDetector();

bigFoot.doesThisExist();

dog.isThisDangerous();
bigFoot.isThisDangerous();
