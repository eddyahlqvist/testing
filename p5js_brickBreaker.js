var cnv; //Variable for the center Canvas thing

function centerCanvas() {
  var x = (windowWidth - width)/2;
  var y = (windowHeight - height)/2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function setup() {
  cnv = createCanvas(1000, 800);
  centerCanvas();
  noCursor();
  info = new info;
  paddle = new Paddle();
  ball = new Ball();
  brickSetup();
}

function draw() {
  background(0, 100, 155);
  fill(50);
  rect(0, height-60+paddle.ph, width, 60-paddle.ph); //Paints the bottom 
  paddle.bounds();
  paddle.display();
  ball.display();
  info.livesDisplay();
  ball.move();
  brickFunctionality();
  info.scoreDisplay();
}

function mousePressed() {
  if (mouseIsPressed) {
    if (mouseButton == LEFT)
      ballMoving = true;
  }
}