function Ball(x, y) 
{
  this.x = x;
  this.y = y;
  this.speedX = -4;
  this.speedY = -4;
  this.br = br;

  this.display = function() {
    fill(255, 0, 200, 150);
    ellipse(this.x, this.y, this.br*2, this.br*2);
  }

  this.checkIfHitBrick = function(brick) {
    var distX = Math.abs(this.x - brick.x-brick.brickWidth/2);
    var distY = Math.abs(this.y - brick.y-brick.brickHeight/2);

    if (distX > (brick.brickWidth/2 + this.br)) { 
      return false;
    }
    if (distY > (brick.brickHeight/2 + this.br)) { 
      return false;
    }

    if (distX <= (brick.brickWidth/2)) { 
      return true;
    } 
    if (distY <= (brick.brickHeight/2)) { 
      return true;
    }

    var dx=distX-brick.brickWidth/2;
    var dy=distY-brick.brickHeight/2;
    return (dx*dx+dy*dy<=(this.br*this.br));
  }

  this.move = function(dir) {
    if (this.y + this.br >= paddle.y && this.x >= mouseX && this.x <= mouseX + paddle.pw) { //Check if the ball hits the paddle
      this.speedY *= -1;
    }
    if (this.x >= width - this.br) { //Check if the ball hits the right wall
      this.speedX *= -1;
    }
    if (this.x <= 0 + this.br) { //Check if the ball hits the left wall
      this.speedX *= -1;
    }
    if (this.y <= 0 + this.br) { //Check if the ball hits the top wall
      this.speedY *= -1;
    }
    if (this.y >= height - 60 - this.br + paddle.ph) { //Check if the ball goes out of play at the bottom
      ballMoving = false;
    }
    if (ballMoving) {
      this.x += this.speedX;
      this.y += this.speedY;
    } else {
      this.x = mouseX + paddle.pw*0.7; //Ball starts on top of the paddle.
      this.y = paddle.y - br -0.1;
      this.speedX = +4;
      this.speedY = -4;
    }
  }
}