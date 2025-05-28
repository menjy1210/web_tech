function setup() {
    createCanvas(windowWidth, windowHeight);
    background(240);
  }

  function draw() {
    background(240);
    fill(100, 150, 255);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }