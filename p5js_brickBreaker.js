var br = 10; //Ball Radius
var pw = 100; //Paddle Width
var ph = 14; //Paddle Height

var ballMoving = false; //True if ball is moving, false if ball is attached to paddle.


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
  paddle = new Paddle ();
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
  ball.move();
  brickFunctionality();
}

function mousePressed() {
  ballMoving = true;
}