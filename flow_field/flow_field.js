/**
 * Drawing a flow field
 * **/

let cols, rows;
let vectors = [];

let zOff = 150;
let noiseScale = 1.2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  // Initializing variables
  cols = 20;
  rows = 20;

  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      let x = (windowWidth / cols) * i;
      let y = (windowHeight / rows) * j;
      let angle = noise(x, y) * noiseScale;

      let vector = new MyVector(x, y, angle);
      vectors.push(vector);
    }
  }
}

function draw() {
  for (let vec of vectors) {
    vec.show();
  }
}
