/**
 * This is a simple sketch of cubic disarray.
 * it has a bunch of squares rendered in a grid.
 * The size and rotation of each square is random.
 * The randomness increases as you go down the grid
 */

function setup(){
    // Initial setup
    createCanvas(800, 800);
    background(255);
    noLoop();



    // setting width and position of the grid
    let gridSize = width / 10 * 9;
    let offSet = width / 20;
    translate(offSet, offSet);


    
    let numSquares = 10;
    let squareSize = gridSize / numSquares;

    let rotationMult = 15;
    let offsetMult = 30;

    for(let i = 0; i < numSquares; i+=1){
        for(let j =0; j < numSquares; j += 1){

            // random rotation
            rotation = random(-1, 1) * j/gridSize/2 * rotationMult * Math.PI;


            // random offset


            let offSetRandomness = random(-1, 1) * j/gridSize/2 * squareSize * offsetMult;
            
            let x = i * squareSize + offSetRandomness;
            let y = j * squareSize;



            push();
            translate(x, y);
            rotate(rotation);


            strokeWeight(1.5);
            noFill();
            rect(0,0, squareSize, squareSize);            
            pop();
        }

    }

}