//Eddy Ahlqvist
//Known bugs: Ball doesn't bounce if it hits the exact corner of a brick.
//            If I change it, it bounce the wrong way.

//Preload - Stuff that loads before the sketch will run
function preload() {
  sounds[0] = loadSound("sounds/bounce1.mp3");  //Bounce on brick sound #1
  sounds[1] = loadSound("sounds/bounce2.mp3");  //Bounce on brick sound #2
  sounds[2] = loadSound("sounds/out.mp3");      //Played when you lose a life
  sounds[3] = loadSound("sounds/paddle.mp3");   //Played when the ball hits the paddle
  sounds[4] = loadSound("sounds/wall.mp3");     //Played when the ball hits a wall
}

//Global variables
var cnv;               //Center canvas variable
var sounds = [];       //Array containing the sounds
var bricks = [];       //Array containing the bricks
var rows = 6;          //Number of rows with bricks
var columns = 12;      //Number of columns with bricks
var brickWidth = 60;   //Sets the width of each brick
var brickHeight = 30;  //Sets the height of each brick

//Function for centering the canvas on the page
function centerCanvas() {
  x = (windowWidth - width)/2;
  y = (windowHeight - height)/2;
  cnv.position(x, y);
}

//Function that centers the canvas if the page is resized
function windowResized() {
  centerCanvas();
}

//Function for releasing the ball when left mousebutton is pressed
function mousePressed() {
  if (mouseIsPressed) {
    if (mouseButton == LEFT)
      ball.ballMoving = true;
  }
}

//Function that sets up the bricks in its grid before the game starts
function brickSetup() {
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      bricks[i*rows + j] = new Brick((i+1)*brickWidth+80, (j+1)*brickHeight+80);
    }
  }
}

//Function containing the rules for how the bricks and ball interacts with eachother
function brickFunctionality() {
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
      info.randomSound();
      info.score += 10; //Adds 10 points to score for each brick that gets removed
    }
  }

  if (bricks.length <= 0) {
    info.win();
  }
}

function setup() {
  cnv = createCanvas(1000, 640);
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
  rect(0, height-60+paddle.ph, width, 60-paddle.ph); //Bottom info rectangle
  info.soundLevels();
  info.livesDisplay();
  info.scoreDisplay();
  paddle.bounds();
  paddle.display();
  ball.display();
  ball.move();
  ball.checkHit();
  brickFunctionality();
}