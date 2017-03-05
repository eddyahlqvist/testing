var br = 10; //Ball Radius
var ballMoving = false; //True if ball is moving, false if ball is attached to paddle.

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
    if (this.y + this.br >= paddle.y && this.x >= mouseX + 30 && this.x <= mouseX + paddle.pw - 30) { //Check if the ball hits middle part of paddle
      this.speedY *= -1;
      paddleSound.play();
    }
    if (this.y + this.br >= paddle.y && this.x > mouseX && this.x < mouseX + 35) { //Check if the ball hits the left part of paddle
      this.speedY = -4;
      this.speedX = -4;
      paddleSound.play();
    }
    if (this.y + this.br >= paddle.y && this.x > mouseX + paddle.pw - 35 && this.x < mouseX + paddle.pw) { //Check if the ball hits the right part of paddle
      this.speedY = -4;
      this.speedX = +4;
      paddleSound.play();
    }
    if (this.x >= width - this.br) { //Check if the ball hits the right wall
      this.speedX *= -1;
      wallSound.play();
    }
    if (this.x <= 0 + this.br) { //Check if the ball hits the left wall
      this.speedX *= -1;
      wallSound.play();
    }
    if (this.y <= 0 + this.br) { //Check if the ball hits the top wall
      this.speedY *= -1;
      wallSound.play();
    }
    if (this.y >= height - 60 - this.br + paddle.ph) { //Check if the ball goes out of play at the bottom
      ballMoving = false;
      info.lives -= 1; //Removes a life each time the ball goes out of play
      outSound.play();
    }
    if (ballMoving) {
      this.x += this.speedX;
      this.y += this.speedY;
    } else {
      this.x = mouseX + paddle.pw*0.8; //Ball starts on top of the paddle.
      this.y = paddle.y - br - 0.2;
      this.speedX = +4;
      this.speedY = -4;
    }
  }
}