





class Shape {
    constructor(_name, _sides) {
    this.name = _name;
    this.sides = _sides;
    }

    destroyShape() {
        if (this.sides > 0) {
            this.sides = 0;         // Not sure why this doesn't change sqare.sides to 0 when called (line 46)
        }
    }
}

let square = new Shape("square", 4);

let triangle = new Shape("triangle", 3);

let noShape = new Shape("no shape", 0);

/*  -if sides are greater than zero, add their name followed by number of sides as two entries in an array
    -if sides become zero, remove both entries from array
*/
const shapesWithSides =[];

// not sure if there is a way to look at all similar properties of objects of a specific class, instead of
// creating indivicual conditionals for each instance

if (square.sides > 0) {
    shapesWithSides.push(square.name, square.sides);
}
if (triangle.sides > 0) {
    shapesWithSides.push(triangle.name, triangle.sides);
}
if (noShape.sides > 0) {
    shapesWithSides.push(noShape.name, noShape.sides);
}

console.log(shapesWithSides);

square.destroyShape;

console.log(`This sqare has ${square.sides} sides`); //debug

if (square.sides > 0) {
    shapesWithSides.push(square.name, square.sides);
}
if (triangle.sides > 0) {
    shapesWithSides.push(triangle.name, triangle.sides);
}
if (noShape.sides > 0) {
    shapesWithSides.push(noShape.name, noShape.sides);
}

console.log(shapesWithSides);

shapesWithSides.splice(4, 2);

console.log(shapesWithSides);

for (let i=0; i < shapesWithSides.length; i++) {
    if (shapesWithSides[i] == "triangle") {
        shapesWithSides.splice(i, 2);
    }
}

console.log(shapesWithSides);
// the for loop finds a triangle at index position '2' and removes it and the following value from array,
// then the following triangle collapses into the index position that was already checked by the for loop.
// so the triangle remains in the array unless the for loop is run again.