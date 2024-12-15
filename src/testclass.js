// This is purely a playground for me to play around with the concepts of classes and objects


// TODO mess with static methods possibly?
// TODO figure out how to export class for use in other programs
// TODO mess with get and set

class Animal {
    constructor (_name, _color, _sound, _dangerToHumanity) {
        this.name = _name;
        this.color = _color;
        this.sound = _sound;
        this.dangerToHumanity = _dangerToHumanity
        this.dangerToHumanity = false;
    }

    isThisDangerous() {
        if (this.dangerToHumanity == true) {
            console.log("of course you silly billy");
        } else {
            console.log("You should be fine. But trust no one.");
        }
    }
        lieDetector() {
        if (snake.dangerToHumanity == false) {
            console.log("You are a liar");
            snake.dangerToHumanity = true;
            console.log("They are everywhere");
            console.log("They will always be a danger to humanity");
            }
            else {
                console.log("good to go");
            }
    }    
}
// Polymorphism could be demonstrated with this extended class
class Cryptid extends Animal {
    constructor (_name, _color, _sound, _dangerToHumanity, _exists) {
        super (_name, _color, _sound, _dangerToHumanity)
        this.exists = _exists;
    }
    doesThisExist() {
        if (this.exists == true) {
            console.log("This is a real animal");
        } else {
            console.log("This is not a real animal");
        }
    }
}
let dog = new Animal("Charley", "gold", "woof", false);

let snake = new Animal("who cares", "danger color", "danger sound", true);

let bigFoot = new Cryptid("bigfoot", "brown", "sensual bellowing", false, false)

console.log("Is " + dog.name + " a danger to humanity?");
if (dog.dangerToHumanity == true) {
    console.log("Sure is.")
} else {
    console.log("No way, Jose!")
}

console.log("Snake's name is " + snake.name);
console.log(`Snake's color is $snake.color`); // I am doing something dumb and it isn't printing the instance property
console.log("snake's sound is " + snake.sound );
console.log("Is " + snake.name + " a danger to humanity?")
if (snake.dangerToHumanity == true) {
    console.log("duh")
} else {
    console.log("nah")
}
snake.lieDetector();

bigFoot.doesThisExist();