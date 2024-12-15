// This is purely a playground for me to play around with the concepts of classes and objects



//TODO add an extended class for proof of concept

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

let dog = new Animal("Charley", "gold", "woof", false);

let snake = new Animal("who cares", "danger color", "danger sound", true);

console.log("Is " + dog.name + " a danger to humanity?");
if (dog.dangerToHumanity == true) {
    console.log("Sure is.")
} else {
    console.log("No way, Jose!")
}

console.log("Snake's name is " + snake.name);
console.log("Snake's color is " + snake.color);
console.log("snake's sound is " + snake.sound );
console.log("Is " + snake.name + " a danger to humanity?")
if (snake.dangerToHumanity == true) {
    console.log("duh")
} else {
    console.log("nah")
}
snake.lieDetector();