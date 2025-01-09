





class Shape {
    constructor(_name, _sides) {
    this.name = _name;
    this.sides = _sides;
    }

    destroyShape() {
        if (this.sides > 0) {
            this.sides = 0;         
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

square.destroyShape();

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

// shapesWithSides.splice(4, 2);

console.log(shapesWithSides);

for (let i=shapesWithSides.length; i >= 0; i--) {
    if (shapesWithSides[i] == "triangle") {
        shapesWithSides.splice(i, 2);
    }
}
// found an edge!!!

console.log(shapesWithSides);

function comparator(a, b) {
    return a-b
}

