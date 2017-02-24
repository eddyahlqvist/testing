var br = 10; //Ball Radius
var pw = 100; //Paddle Width
var ph = 14; //Paddle Height
var brickWidth = 60;
var brickHeight = 30;
var ballMoving = false; //True if ball is moving, false if ball is attached to paddle.
var bricks = [];
var rows = 6;
var columns = 12;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width)*0.5;
  var y = (windowHeight - height)*0.5;
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

  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      bricks[i*rows + j] = new Bricks((i+1)*brickWidth+80, (j+1)*brickHeight+80);
    }
  }
}

function draw() {
  background(0, 100, 155);
  fill(50);
  rect(0, height-60+paddle.ph, width, 60-paddle.ph); //Paints the bottom 
  paddle.bounds();
  paddle.display();
  ball.display();
  ball.move();

  for (var i = 0; i < bricks.length; i++) {
    bricks[i].display();
  }
}

function mousePressed() {
  ballMoving = true;
}