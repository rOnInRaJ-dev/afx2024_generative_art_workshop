class MyVector {
  constructor(x, y, _angle) {
    this.x = x;
    this.y = y;
    this.angle = _angle;
    this.show();
  }
  //  this breaks on strokeWeight();
  show() {
    fill(0);
    ellipse(this.x, this.y, 5, 5);

    push();

    translate(this.x, this.y);
    rotate(this.angle);

    line(0, 0, 20, 0);

    pop();
  }

  update() {
    this.angle = noise(this.x, this.y, frameCount / zOff) * noiseScale;
  }
}
