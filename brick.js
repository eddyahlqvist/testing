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