var br = 10; //Ball Radius
var pw = 100; //Paddle Width
var ph = 14; //Paddle Height
var brickWidth = 60;
var brickHeight = 30;
var ballMoving = false; //True if ball is moving, false if ball is attached to paddle.
var bricks = [];
var rows = 6; //Number of rows with bricks
var columns = 12; //Number of columns with bricks
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

  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      bricks[i*rows + j] = new Brick((i+1)*brickWidth+80, (j+1)*brickHeight+80);
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
    for (var j = 0; j < bricks.length; j++) {
      if (ball.checkIfHitBrick(bricks[i])) { //Checks the distance between the ball and the bricks and detects if it's a collision
        bricks[i].brickBounce(); //Makes the ball bounce when it hits the bricks
        bricks[i].vanish();
      }
    }
  }

  for (var i = bricks.length-1; i >= 0; i--) {
    if (bricks[i].toDelete) {
      bricks.splice(i, 1);
    }
  }
}

function mousePressed() {
  ballMoving = true;
}