//Eddy Ahlqvist

function preload() {
  bounceSounds[0] = loadSound("sounds/bounce1.mp3"); 
  bounceSounds[1] = loadSound("sounds/bounce2.mp3");
  outSound = loadSound("sounds/out.mp3");
  paddleSound = loadSound("sounds/paddle.mp3");
  wallSound = loadSound("sounds/wall.mp3");
}

var cnv; //Variable for the center Canvas thing
var bounceSounds = [];
var bricks = [];

function centerCanvas() {
  x = (windowWidth - width)/2;
  y = (windowHeight - height)/2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function mousePressed() {
  if (mouseIsPressed) {
    if (mouseButton == LEFT)
      ball.ballMoving = true;
  }
}

function setup() {
  cnv = createCanvas(1000, 800);
  centerCanvas();
  noCursor();
  info = new Info(3);
  paddle = new Paddle(100, 14, height - 60);
  ball = new Ball(10);
  brickSetup();
}

function draw() {
  background(0, 100, 155);
  fill(50);
  rect(0, height-60+paddle.ph, width, 60-paddle.ph); //Paints the bottom 
  info.soundLevels();
  info.livesDisplay();
  info.scoreDisplay();
  paddle.bounds();
  paddle.display();
  ball.display();
  ball.move();
  brickFunctionality();
}