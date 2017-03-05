function preload() {
  bounceSounds[0] = loadSound("sounds/bounce1.mp3"); 
  bounceSounds[1] = loadSound("sounds/bounce2.mp3");
  outSound = loadSound("sounds/out.mp3");
  paddleSound = loadSound("sounds/paddle.mp3");
  wallSound = loadSound("sounds/wall.mp3");
}

var cnv; //Variable for the center Canvas thing
var bounceSounds = [];

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
  soundLevels();
  paddle.bounds();
  paddle.display();
  info.livesDisplay();
  info.scoreDisplay();
  ball.display();
  ball.move();
  brickFunctionality();
}

function mousePressed() {
  if (mouseIsPressed) {
    if (mouseButton == LEFT)
      ballMoving = true;
  }
}