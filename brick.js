var bricks = [];
var rows = 6; //Number of rows with bricks
var columns = 12; //Number of columns with bricks
var brickWidth = 60;
var brickHeight = 30;

function Brick(x, y) 
{
  this.x = x;
  this.y = y;
  this.brickWidth = brickWidth;
  this.brickHeight = brickHeight;
  this.toDelete = false;

  //Testing to adding some functions into 'Prototype'
  //This will make the functions be stored only once, and not in all of the bricks.
  Brick.prototype.brickBounce = function() {
    if (ball.y - ball.br <= this.y + this.brickHeight &&  ball.y - ball.br >= this.y && ball.x >= this.x && ball.x <= this.x + this.brickWidth) {
      ball.speedY = +4;
    }
    if (ball.y + ball.br >= this.y && ball.y - ball.br <= this.y + this.brickHeight/2 && ball.x >= this.x && ball.x <= this.x + this.brickWidth) {
      ball.speedY = -4;
    }
    if (ball.x + ball.br >= this.x && ball.x + ball.br <= this.x + this.brickWidth/2 && ball.y >= this.y && ball.y <= this.y + this.brickHeight) {
      ball.speedX = -4;
    }
    if (ball.x - ball.br <= this.x + this.brickWidth && ball.x + ball.br >= this.x + this.brickWidth/2 && ball.y >= this.y && ball.y <= this.y + this.brickHeight) {
      ball.speedX = +4;
    }
  }

  Brick.prototype.vanish = function() {
    this.toDelete = true;
  }

  Brick.prototype.display = function() {
    fill(0, 255, 200, 150);
    rect(this.x, this.y, this.brickWidth, this.brickHeight);
  }
}

function brickSetup() {
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      bricks[i*rows + j] = new Brick((i+1)*brickWidth+80, (j+1)*brickHeight+80);
    }
  }
}

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
    }
  }
}