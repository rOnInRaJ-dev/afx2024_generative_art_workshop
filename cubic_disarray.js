/**
 * This is a simple sketch of cubic disarray.
 * it has a bunch of squares rendered in a grid.
 * The size and rotation of each square is random.
 * The randomness increases as you go down the grid
 */

let colorVariation = 0;

function setup() {
  // Initial setup
  createCanvas(800, 800);
  background(255);

  // TODO: comment this line to make the sketch run indefinitely
  //
  // noLoop();

  // TODO: uncomment this line to make it run indefinitely
  // uncomment this line to make it run at 24fps
  frameRate(24);
}

function drawSquares() {
  background(255);

  // setting width and position of the grid
  let gridSize = (width / 10) * 9;
  let offSet = width / 20;
  translate(offSet, offSet);

  let numSquares = 10;
  let squareSize = gridSize / numSquares;

  let rotationMult = 15;
  let offsetMult = 30;
  let gridVariation = 3;

  for (let i = 0; i < numSquares; i += 1) {
    for (let j = 0; j < numSquares; j += 1) {
      // random rotation
      rotation =
        ((random(-1, 1) * j) / gridSize / gridVariation) *
        rotationMult *
        Math.PI;

      // random offset
      let offSetRandomness =
        ((random(-1, 1) * j) / gridSize / gridVariation) *
        squareSize *
        offsetMult;

      // setting x and y position
      let x = i * squareSize + offSetRandomness;
      let y = j * squareSize;

      push();
      translate(x, y);
      rotate(rotation);

      strokeWeight(1.5);

      colorMode(HSB);
      fill(random(0, 10) + i * j + colorVariation, random(40, 80), 100);

      // TODO: uncomment this line to make the squares transparent
      // noFill();

      rect(0, 0, squareSize, squareSize);

      pop();
    }
  }
}

function draw() {
  colorVariation += 5;
  colorVariation = colorVariation % 360;

  drawSquares();
  console.log(colorVariation);
}

